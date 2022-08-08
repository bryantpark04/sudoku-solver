import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/Header';
import { SubmitButton, ResetButton, UndoSolveButton } from './components/Buttons';
import SudokuBoard from './components/SudokuBoard';

const App: React.FC = () => {
  const blankBoard: string[] = [...'.'.repeat(81)];
  const [board, setBoard] = useState<string[]>(blankBoard);
  const [prevBoard, setPrevBoard] = useState<string[]>(blankBoard);
  const [isInvalid, setIsInvalid] = useState<boolean>(false);

  const getRandomPuzzle = async () => {
    try {
      const res = await axios.get('/random');
      const newBoard = res.data;
      setBoard(newBoard);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRandomPuzzle();
  }, []);

  const submitPuzzle = async () => {
    try {
      const payload = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: board
      }
      const res = await axios.post('/solve', payload);
      const newBoard = res.data;

      if (newBoard.length > 0) {
        setPrevBoard(board);
        setBoard(newBoard);
        setIsInvalid(false);
      } else {
        setIsInvalid(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (idx: number, ch: string) => {
    if ((ch.length === 1 && !"123456789".includes(ch)) || ch.length > 1) {
      return
    }

    const newBoard: string[] = board.map((v, i) => {
      return idx !== i ? v : (ch === "" ? "." : ch);
    });
    setBoard(newBoard);
  };

  const resetBoard = () => {
    setBoard(blankBoard)
  };

  const undoSolve = () => {
    setBoard(prevBoard);
  };

  return (
    <div className="App">
      <Header />

      <SudokuBoard board={board} handleChange={handleChange} />

      {/* TODO: ControlCenter component */}
      <SubmitButton onClick={submitPuzzle} />
      <ResetButton onClick={resetBoard} />
      <UndoSolveButton onClick={undoSolve} />
      <button onClick={getRandomPuzzle}>Random Puzzle</button>

      {isInvalid && <p style={{color: "red"}}>Invalid puzzle!</p>}
    </div>
  );
};

export default App;
