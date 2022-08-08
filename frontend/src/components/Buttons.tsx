type SubmitButtonProps = {
    onClick: () => void;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
    return (
        <button onClick={() => onClick()}>Solve Sudoku</button>
    );
};

type ResetButtonProps = {
    onClick: () => void;
};

const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
    return (
        <button onClick={onClick}>Reset Board</button>
    );
}

export { SubmitButton, ResetButton };