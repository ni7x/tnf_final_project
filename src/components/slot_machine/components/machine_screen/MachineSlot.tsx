import React from "react";

interface MachineSlotProps {
    value: string;
    isWinning: boolean;
}

const MachineSlot: React.FC<MachineSlotProps> = ({ value, isWinning }) => {
    let emoji = "";

    switch (value) {
        case "A":
            emoji = "🍓";
            break;
        case "B":
            emoji = "💰";
            break;
        case "C":
            emoji = "🌟";
            break;
        case "D":
            emoji = "🍀";
            break;
        case "E":
            emoji = "🎲";
            break;
        default:
            emoji = "❓";
            break;
    }

    return (
        <div className={`grow text-5xl  flex items-center justify-center  lg:h-[100px] ${isWinning ? "bg-secondary border-4 border-primary-lighter text-font" : "bg-primary-lighter"}`}>
            <span>
                {emoji}
            </span>
        </div>
    );
};

export default MachineSlot;
