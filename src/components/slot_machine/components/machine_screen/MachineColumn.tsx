import React from "react";
import Slot from "../../../../types/Slot.ts";
import MachineSlot from "./MachineSlot.tsx";

interface MachineColumnProps {
    column: Slot[];
}

const MachineColumn: React.FC<MachineColumnProps> = ({ column }) => {
    return (
        <div className={`flex flex-col gap-0.5 grow-1 w-full bg-secondary`}>
            {column.map((item, index) => (
                <MachineSlot
                    key={index}
                    value={item.value}
                    isWinning={item.isWinning}
                />
            ))}
        </div>
    );
};

export default MachineColumn;
