class Slot {
    col: number;
    row: number;
    value: string;
    isWinning: boolean;

    constructor(col: number, row: number, value: string) {
        this.col = col;
        this.row = row;
        this.value = value;
        this.isWinning = false;
    }
}

export default Slot;
