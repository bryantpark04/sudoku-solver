type ButtonProps = {
    onClick: () => void;
};

const SubmitButton: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <button onClick={() => onClick()}>Solve Sudoku</button>
    );
};

const ResetButton: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <button onClick={onClick}>Reset Board</button>
    );
};

const UndoSolveButton: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <button onClick={onClick}>Undo Solve</button>
    );
};

export { SubmitButton, ResetButton, UndoSolveButton };