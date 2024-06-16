import React, { useEffect, useState } from "react";
import Slot from "../../../../types/Slot.ts";
import MachineColumn from "./MachineColumn.tsx";
import WinningPopup from "../WinningPopup.tsx";

interface MachineScreenProps {
    isRunning: boolean;
    setIsRunning: (val: boolean) => void;
    currentSlots: Slot[];
    setCurrentSlots: React.Dispatch<React.SetStateAction<Slot[]>>;
    setUserMoney: React.Dispatch<React.SetStateAction<number>>;
    betAmount: number;
}

const MachineScreen: React.FC<MachineScreenProps> = ({
                                                         isRunning,
                                                         setIsRunning,
                                                         currentSlots,
                                                         setCurrentSlots,
                                                         setUserMoney,
                                                         betAmount,
                                                     }) => {
    const [winningAmount, setWinningAmount] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [multiplier, setMultiplier] = useState(0);
    const allPossibleValues = ["A", "B", "C", "D", "E"];

    const getRandomInt = (max: number): number => {
        return Math.floor(Math.random() * max);
    };

    const generateRandomSlots = () => {
        const newSlots = [];
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                const value = allPossibleValues[getRandomInt(allPossibleValues.length)];
                newSlots.push(new Slot(y, x, value));
            }
        }
        return newSlots;
    };

    const checkWinningCombinations = (slots: Slot[]) => {
        let localMultiplier = 0;
        const updatedSlots = slots.map(slot => ({ ...slot, isWinning: false }));

        const columnMultipliers: number[] = [];
        const rowMultipliers: number[] = [];

        for (let i = 0; i < 3; i++) {
            const column = updatedSlots.filter((slot) => slot.col === i);
            const row = updatedSlots.filter((slot) => slot.row === i);

            if (checkWinningCombination(column.map((slot) => slot.value))) {
                column.forEach((slot) => {
                    slot.isWinning = true;
                });
                columnMultipliers.push(getMultiplier(column[0].value));
            }

            if (checkWinningCombination(row.map((slot) => slot.value))) {
                row.forEach((slot) => {
                    slot.isWinning = true;
                });
                rowMultipliers.push(getMultiplier(row[0].value));
            }
        }

        if (columnMultipliers.length > 0 && rowMultipliers.length > 0) {
            localMultiplier = columnMultipliers.reduce((acc, val) => acc + val, 0) + rowMultipliers.reduce((acc, val) => acc + val, 0);
        } else if (columnMultipliers.length > 0) {
            localMultiplier = columnMultipliers.reduce((acc, val) => acc + val, 0);
        } else if (rowMultipliers.length > 0) {
            localMultiplier = rowMultipliers.reduce((acc, val) => acc + val, 0);
        }

        return { updatedSlots, localMultiplier };
    };

    const checkWinningCombination = (values: string[]) => {
        const firstValue = values[0];
        return values.every((value) => value === firstValue);
    };

    const getMultiplier = (value: string) => {
        switch (value) {
            case "A":
                return 1;
            case "B":
                return 2;
            case "C":
                return 3;
            case "D":
                return 4;
            case "E":
                return 4;
            default:
                return 0;
        }
    };

    useEffect(() => {
        if (isRunning) {
            const spinDuration = 1000;
            const interval = setInterval(() => {
                setCurrentSlots(generateRandomSlots());
            }, 100);

            setTimeout(() => {
                clearInterval(interval);
                const newSlots = generateRandomSlots();
                const { updatedSlots, localMultiplier } = checkWinningCombinations(newSlots);
                setCurrentSlots(updatedSlots);
                setIsRunning(false);

                if (localMultiplier > 0) {
                    const wonAmount = betAmount * localMultiplier;
                    setUserMoney(prevMoney => prevMoney + wonAmount);
                    setWinningAmount(wonAmount);
                    setMultiplier(localMultiplier);
                    setShowPopup(true);
                }
            }, spinDuration);
        }
    }, [isRunning, setIsRunning, betAmount, setUserMoney, setCurrentSlots]);

    useEffect(() => {
        setCurrentSlots(generateRandomSlots());
    }, [setCurrentSlots]);

    return (
        <div className="flex w-full gap-0.5 bg-secondary flex-1 border-2 border-secondary text-secondary">
            {[0, 1, 2].map((colIndex) => (
                <MachineColumn
                    key={colIndex}
                    column={currentSlots.filter((slot) => slot.col === colIndex)}
                />
            ))}
            {showPopup && <WinningPopup amount={winningAmount} multiplier={multiplier} onClose={() => setShowPopup(false)} />}
        </div>
    );
};

export default MachineScreen;
