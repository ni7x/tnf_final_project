import React from "react";

interface Props {
    isDisabled: boolean;
    mode: string;
    changeBetAmount : (mode: string) => void;
}

const ChangeBetAmountButton: React.FC<Props> = ({changeBetAmount, isDisabled, mode}) => {
    return(
        <button
            onClick={()=>changeBetAmount(mode)}
            disabled={isDisabled}
            className={"text-font h-20 px-10 text-2xl   bg-secondary font-medium hover:bg-secondary-lighter " +  (isDisabled && " hover:bg-secondary")}
        >
            {mode}
        </button>
    )
}

export default ChangeBetAmountButton