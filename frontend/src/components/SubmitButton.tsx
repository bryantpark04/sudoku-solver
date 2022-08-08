type SubmitButtonProps = {
    onClick: (board: string[]) => void;
    board: string[];
};

const SubmitButton: React.FunctionComponent<SubmitButtonProps> = ({ onClick, board }) => {
    return (
        <button onClick={() => onClick(board)}>Solve Sudoku</button>
    )
};

export default SubmitButton;