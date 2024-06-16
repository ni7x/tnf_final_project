import React, { useEffect, useState } from "react";

interface WinningPopupProps {
    amount: number;
    multiplier: number;
    onClose: () => void;
}

const WinningPopup: React.FC<WinningPopupProps> = ({ amount, multiplier, onClose }) => {
    const [displayedAmount, setDisplayedAmount] = useState(0);

    useEffect(() => {
        let currentAmount = 0;
        const increment = Math.ceil(amount / 50);

        const interval = setInterval(() => {
            currentAmount += increment;
            if (currentAmount >= amount) {
                currentAmount = amount;
                clearInterval(interval);
            }
            setDisplayedAmount(currentAmount);
        }, 30);

        return () => clearInterval(interval);
    }, [amount]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
            <div className="flex items-center flex-col gap-2 bg-primary xl:ml-[20rem] rounded shadow p-6 px-12">
                <p className="text-secondary font-semibold">x{multiplier} multiplier!</p>

                <p className="text-font">You have won</p>
                <p className="font-bold text-2xl mb-[-0.5rem]">{displayedAmount} $</p>
                <button
                    onClick={onClose}
                    className="py-2 bg-secondary-darker w-40 text-white rounded mt-4"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default WinningPopup;
