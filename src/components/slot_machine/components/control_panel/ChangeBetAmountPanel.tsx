import React, {useState} from "react";
import ChangeBetAmountButton from "./ChangeBetAmountButton.tsx";

interface Props {
    betAmount: number;
    setBetAmount : (amount: number) => void;
}

const ChangeBetAmountPanel: React.FC<Props> = ({betAmount, setBetAmount}) => {
    const allowedBetAmounts = [1, 5, 10, 25, 50, 100];
    
    const [currentBetAmountIndex, setCurrentBetAmountIndex] = useState<number>(allowedBetAmounts.indexOf(betAmount));
    const changeBetAmount = (mode: string) => {
        if(mode === "+"){
            const newIndex = currentBetAmountIndex + 1;
            if(newIndex < allowedBetAmounts.length){
                setCurrentBetAmountIndex(newIndex);
                setBetAmount(allowedBetAmounts[newIndex])
            }else{
                alert("Can't bet more than 100")
            }
        }else  if(mode === "-"){
            const newIndex = currentBetAmountIndex - 1;
            if(newIndex >= 0){
                setCurrentBetAmountIndex(newIndex);
                setBetAmount(allowedBetAmounts[newIndex])
            }else{
                alert("Can't bet more less than 1")
            }
        }
    }

    return(
        <div className="flex flex-row text-white h-20 ">
            <ChangeBetAmountButton
                mode="-"
                isDisabled={currentBetAmountIndex === 0}
                changeBetAmount={(mode) => changeBetAmount(mode)}
            />
            <p
                className="flex items-center justify-center p-10 xl:w-32 xl:p-0 font-semibold text-lg bg-secondary-darker "
            >
                {betAmount} $
            </p>
            <ChangeBetAmountButton
                changeBetAmount={(mode) => changeBetAmount(mode)}
                mode="+"
                isDisabled={currentBetAmountIndex === allowedBetAmounts.length - 1}
            />
        </div>
    )
}

export default  ChangeBetAmountPanel;