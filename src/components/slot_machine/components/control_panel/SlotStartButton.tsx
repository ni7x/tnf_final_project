import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRotateRight} from "@fortawesome/free-solid-svg-icons";

interface Props {
    isDisabled: boolean;
    startSlotMachine : () => void;
}
const SlotStartButton: React.FC<Props> = ({startSlotMachine, isDisabled}) => {
    return(
        <button
            onClick={()=>startSlotMachine()}
            disabled={isDisabled}
            className="text-font  h-20  text-2xl bg-secondary px-10  font-bold"
        >
            <FontAwesomeIcon icon={faRotateRight} />
        </button>
    )
}

export default  SlotStartButton;