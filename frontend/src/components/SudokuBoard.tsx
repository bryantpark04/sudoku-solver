import React from "react";

type CellProps = {
    text: string;
};

const Cell: React.FunctionComponent<CellProps> = ({ text }) => {
    return (
        <span>
            <input type="text" value={text} style={{width: 20}}/>
        </span>
    );
};

type SudokuBoardProps = {
    board: string[];
};

const SudokuBoard: React.FunctionComponent<SudokuBoardProps> = ({ board }) => {
    return (
        <div>
            {board.map((c: string, i: number) => (
                <span>
                    <Cell text={c}/>
                    {(i + 1) % 3 === 0 && " " /* horizontal gap between subblocks */}
                    {(i + 1) % 9 === 0 && <br /> /* end of a row */}
                    {(i + 1) % 27 === 0 && <br /> /* vertical gap between subblocks */}
                </span>
            ))}
        </div>
    );
};

export default SudokuBoard;