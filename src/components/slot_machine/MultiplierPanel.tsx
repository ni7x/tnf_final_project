const MultiplierPanel = () => {
    return (
        <div className="bg-primary-lighter text-font p-4 px-6 w-full h-full overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">Symbol Multipliers</h2>
            <ul className="flex flex-wrap lg:block">
                <li className="flex items-center mb-2">
                    <span className="mr-2" role="img" aria-label="strawberry">🍓</span> Multiplier: x1
                </li>
                <li className="flex items-center mb-2">
                    <span className="mr-2" role="img" aria-label="money bag">💰</span> Multiplier: x2
                </li>
                <li className="flex items-center mb-2">
                    <span className="mr-2" role="img" aria-label="star">🌟</span> Multiplier: x3
                </li>
                <li className="flex items-center mb-2">
                    <span className="mr-2" role="img" aria-label="four leaf clover">🍀</span> Multiplier: x4
                </li>
                <li className="flex items-center mb-2">
                    <span className="mr-2" role="img" aria-label="game die">🎲</span> Multiplier: x5
                </li>
            </ul>
        </div>
    );
};

export default MultiplierPanel;
