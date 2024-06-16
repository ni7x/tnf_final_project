import { useState } from "react";
import Slot from "../../types/Slot";
import MachineScreen from "./components/machine_screen/MachineScreen.tsx";
import ControlPanel from "./components/control_panel/ControlPanel.tsx";
import ChangeBetAmountPanel from "./components/control_panel/ChangeBetAmountPanel.tsx";
import SlotStartButton from "./components/control_panel/SlotStartButton.tsx";
import MultiplierPanel from "./MultiplierPanel.tsx";

const SlotMachine = () => {
    const [betAmount, setBetAmount] = useState<number>(50);
    const [userMoney, setUserMoney] = useState<number>(1000);
    const [isMachineRunning, setIsMachineRunning] = useState<boolean>(false);
    const [currentSlots, setCurrentSlots] = useState<Slot[]>([]);

    const startMachine = () => {
        if (userMoney - betAmount >= 0) {
            setUserMoney(userMoney - betAmount);
            setIsMachineRunning(true);
        }
    };

    return (
        <div className="flex flex-col xl:flex-row justify-center gap-10 h-screen items-center ">
            <div className="xl:w-1/5 w-full">
                <MultiplierPanel/>
            </div>
            <div className="flex flex-col xl:w-2/5 xl:py-10 w-full  h-[90%] gap-5">
                <MachineScreen
                    isRunning={isMachineRunning}
                    setIsRunning={setIsMachineRunning}
                    currentSlots={currentSlots}
                    setCurrentSlots={setCurrentSlots}
                    setUserMoney={setUserMoney}
                    betAmount={betAmount}
                />
                <ControlPanel
                    betAmountPanel={
                        <ChangeBetAmountPanel
                            setBetAmount={setBetAmount}
                            betAmount={betAmount}
                        />
                    }
                    userMoneyElement={
                        <p className="h-full flex items-center text-font text-lg font-medium justify-center flex-1 bg-secondary-darker">{userMoney} $</p>
                    }
                    slotStartButton={
                        <SlotStartButton
                            isDisabled={userMoney - betAmount < 0 || isMachineRunning}
                            startSlotMachine={startMachine}
                        />
                    }
                />
            </div>
        </div>

    );
};

export default SlotMachine;
