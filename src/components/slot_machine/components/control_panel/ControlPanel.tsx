import React from 'react';

interface ControlPanelProps {
    betAmountPanel: React.ReactNode;
    userMoneyElement: React.ReactNode;
    slotStartButton: React.ReactNode;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ betAmountPanel, userMoneyElement, slotStartButton }) => {
    return (
        <div className="flex flex-wrap gap-y-2 w-full  h-20 ">
            {betAmountPanel}
            {userMoneyElement}
            {slotStartButton}
        </div>
    );
}

export default ControlPanel;
