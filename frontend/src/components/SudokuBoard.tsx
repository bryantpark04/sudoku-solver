import React from "react";

type CellProps = {
    text: string;
    idx: number;
    handleChange: (idx: number, ch: string) => void;
};

const Cell: React.FC<CellProps> = ({ text, idx, handleChange }) => {
    const handleEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(idx, event.target.value);
    };

    return (
        <span>
            <input type="text" value={text === "." ? "" : text} style={{width: 12}} onChange={handleEdit}/>
        </span>
    );
};

type SudokuBoardProps = {
    board: string[];
    handleChange: (idx: number, ch: string) => void;
};

const SudokuBoard: React.FC<SudokuBoardProps> = ({ board, handleChange }) => {
    return (
        <div>
            {board.map((c: string, i: number) => (
                <span key={i}>
                    <Cell text={c} idx={i} handleChange={handleChange}/>
                    {(i + 1) % 3 === 0 && " " /* horizontal gap between subblocks */}
                    {(i + 1) % 9 === 0 && <br /> /* end of a row */}
                    {(i + 1) % 27 === 0 && <br /> /* vertical gap between subblocks */}
                </span>
            ))}
        </div>
    );
};

export default SudokuBoard;