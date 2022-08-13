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
        <input type="text" value={text === "." ? "" : text} onChange={handleEdit} className="w-14 h-14 text-[#00063D] text-5xl font-sans font-bold p-4 caret-[#00063D]"/>
    );
};

type SudokuBoardProps = {
    board: string[];
    handleChange: (idx: number, ch: string) => void;
};

const SudokuBoard: React.FC<SudokuBoardProps> = ({ board, handleChange }) => {
    return (
        <div className="sudokuContainer flex justify-center p-5 pb-10">
            <div className="divide-y-2 divide-[#F26419] border-2 w-fit border-[#F26419]">
                <div className="bigRow0 w-fit grid grid-cols-3 divide-x-2 divide-[#F26419]">
                    <div className="topLeft divide-y divide-[#F6A02D66] w-fit">
                        <div className="row0 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[0]} idx = {0} handleChange = {handleChange}/>
                            <Cell text = {board[1]} idx = {1} handleChange = {handleChange}/>
                            <Cell text = {board[2]} idx = {2} handleChange = {handleChange}/>
                        </div>
                        <div className="row1 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[9]} idx = {9} handleChange = {handleChange}/>
                            <Cell text = {board[10]} idx = {10} handleChange = {handleChange}/>
                            <Cell text = {board[11]} idx = {11} handleChange = {handleChange}/>
                        </div>
                        <div className="row2 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[18]} idx = {18} handleChange = {handleChange}/>
                            <Cell text = {board[19]} idx = {19} handleChange = {handleChange}/>
                            <Cell text = {board[20]} idx = {20} handleChange = {handleChange}/>
                        </div>
                    </div>
                    <div className="topMiddle divide-y divide-[#F6A02D66] w-fit">
                        <div className="row0 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[3]} idx = {3} handleChange = {handleChange}/>
                            <Cell text = {board[4]} idx = {4} handleChange = {handleChange}/>
                            <Cell text = {board[5]} idx = {5} handleChange = {handleChange}/>
                        </div>
                        <div className="row1 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[12]} idx = {12} handleChange = {handleChange}/>
                            <Cell text = {board[13]} idx = {13} handleChange = {handleChange}/>
                            <Cell text = {board[14]} idx = {14} handleChange = {handleChange}/>
                        </div>
                        <div className="row2 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[21]} idx = {21} handleChange = {handleChange}/>
                            <Cell text = {board[22]} idx = {22} handleChange = {handleChange}/>
                            <Cell text = {board[23]} idx = {23} handleChange = {handleChange}/>
                        </div>
                    </div>
                    <div className="topRight divide-y divide-[#F6A02D66] w-fit">
                        <div className="row0 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[6]} idx = {6} handleChange = {handleChange}/>
                            <Cell text = {board[7]} idx = {7} handleChange = {handleChange}/>
                            <Cell text = {board[8]} idx = {8} handleChange = {handleChange}/>
                        </div>
                        <div className="row1 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[15]} idx = {15} handleChange = {handleChange}/>
                            <Cell text = {board[16]} idx = {16} handleChange = {handleChange}/>
                            <Cell text = {board[17]} idx = {17} handleChange = {handleChange}/>
                        </div>
                        <div className="row2 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[24]} idx = {24} handleChange = {handleChange}/>
                            <Cell text = {board[25]} idx = {25} handleChange = {handleChange}/>
                            <Cell text = {board[26]} idx = {26} handleChange = {handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="bigRow0 w-fit grid grid-cols-3 divide-x-2 divide-[#F26419]">
                    <div className="topLeft divide-y divide-[#F6A02D66] w-fit">
                        <div className="row0 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[27]} idx = {27} handleChange = {handleChange}/>
                            <Cell text = {board[28]} idx = {28} handleChange = {handleChange}/>
                            <Cell text = {board[29]} idx = {29} handleChange = {handleChange}/>
                        </div>
                        <div className="row1 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[36]} idx = {36} handleChange = {handleChange}/>
                            <Cell text = {board[37]} idx = {37} handleChange = {handleChange}/>
                            <Cell text = {board[38]} idx = {38} handleChange = {handleChange}/>
                        </div>
                        <div className="row2 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[45]} idx = {45} handleChange = {handleChange}/>
                            <Cell text = {board[46]} idx = {46} handleChange = {handleChange}/>
                            <Cell text = {board[47]} idx = {47} handleChange = {handleChange}/>
                        </div>
                    </div>
                    <div className="topMiddle divide-y divide-[#F6A02D66] w-fit">
                        <div className="row0 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[30]} idx = {30} handleChange = {handleChange}/>
                            <Cell text = {board[31]} idx = {31} handleChange = {handleChange}/>
                            <Cell text = {board[32]} idx = {32} handleChange = {handleChange}/>
                        </div>
                        <div className="row1 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[39]} idx = {39} handleChange = {handleChange}/>
                            <Cell text = {board[40]} idx = {40} handleChange = {handleChange}/>
                            <Cell text = {board[41]} idx = {41} handleChange = {handleChange}/>
                        </div>
                        <div className="row2 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[48]} idx = {48} handleChange = {handleChange}/>
                            <Cell text = {board[49]} idx = {49} handleChange = {handleChange}/>
                            <Cell text = {board[50]} idx = {50} handleChange = {handleChange}/>
                        </div>
                    </div>
                    <div className="topRight divide-y divide-[#F6A02D66] w-fit">
                        <div className="row0 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[33]} idx = {33} handleChange = {handleChange}/>
                            <Cell text = {board[34]} idx = {34} handleChange = {handleChange}/>
                            <Cell text = {board[35]} idx = {35} handleChange = {handleChange}/>
                        </div>
                        <div className="row1 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[42]} idx = {42} handleChange = {handleChange}/>
                            <Cell text = {board[43]} idx = {43} handleChange = {handleChange}/>
                            <Cell text = {board[44]} idx = {44} handleChange = {handleChange}/>
                        </div>
                        <div className="row2 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[51]} idx = {51} handleChange = {handleChange}/>
                            <Cell text = {board[52]} idx = {52} handleChange = {handleChange}/>
                            <Cell text = {board[53]} idx = {53} handleChange = {handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="bigRow0 w-fit grid grid-cols-3 divide-x-2 divide-[#F26419]">
                    <div className="topLeft divide-y divide-[#F6A02D66] w-fit">
                        <div className="row0 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[54]} idx = {54} handleChange = {handleChange}/>
                            <Cell text = {board[55]} idx = {55} handleChange = {handleChange}/>
                            <Cell text = {board[56]} idx = {56} handleChange = {handleChange}/>
                        </div>
                        <div className="row1 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[63]} idx = {63} handleChange = {handleChange}/>
                            <Cell text = {board[64]} idx = {64} handleChange = {handleChange}/>
                            <Cell text = {board[65]} idx = {65} handleChange = {handleChange}/>
                        </div>
                        <div className="row2 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[72]} idx = {72} handleChange = {handleChange}/>
                            <Cell text = {board[73]} idx = {73} handleChange = {handleChange}/>
                            <Cell text = {board[74]} idx = {74} handleChange = {handleChange}/>
                        </div>
                    </div>
                    <div className="topMiddle divide-y divide-[#F6A02D66] w-fit">
                        <div className="row0 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[57]} idx = {57} handleChange = {handleChange}/>
                            <Cell text = {board[58]} idx = {58} handleChange = {handleChange}/>
                            <Cell text = {board[59]} idx = {59} handleChange = {handleChange}/>
                        </div>
                        <div className="row1 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[66]} idx = {66} handleChange = {handleChange}/>
                            <Cell text = {board[67]} idx = {67} handleChange = {handleChange}/>
                            <Cell text = {board[68]} idx = {68} handleChange = {handleChange}/>
                        </div>
                        <div className="row2 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[75]} idx = {75} handleChange = {handleChange}/>
                            <Cell text = {board[76]} idx = {76} handleChange = {handleChange}/>
                            <Cell text = {board[77]} idx = {77} handleChange = {handleChange}/>
                        </div>
                    </div>
                    <div className="topRight divide-y divide-[#F6A02D66] w-fit">
                        <div className="row0 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[60]} idx = {60} handleChange = {handleChange}/>
                            <Cell text = {board[61]} idx = {61} handleChange = {handleChange}/>
                            <Cell text = {board[62]} idx = {62} handleChange = {handleChange}/>
                        </div>
                        <div className="row1 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[69]} idx = {69} handleChange = {handleChange}/>
                            <Cell text = {board[70]} idx = {70} handleChange = {handleChange}/>
                            <Cell text = {board[71]} idx = {71} handleChange = {handleChange}/>
                        </div>
                        <div className="row2 divide-x divide-[#F6A02D66] w-fit">
                            <Cell text = {board[78]} idx = {78} handleChange = {handleChange}/>
                            <Cell text = {board[79]} idx = {79} handleChange = {handleChange}/>
                            <Cell text = {board[80]} idx = {80} handleChange = {handleChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SudokuBoard;