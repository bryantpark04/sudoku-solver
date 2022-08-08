import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/Header';
import { SubmitButton, ResetButton } from './components/Buttons';
import SudokuBoard from './components/SudokuBoard';

const App: React.FC = () => {
  const testBoard: string = '6.....8.3.4.7.................5.4.7.3..2.....1.6.......2.....5.....8.6......1....';
  const [board, setBoard] = useState<string[]>([...testBoard]);
  // TODO: add state variable for if a puzzle is invalid

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
      setBoard(res.data);
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
    setBoard([...".".repeat(81)])
  };

  return (
    <div className="App">
      <Header />
      <SudokuBoard board={board} handleChange={handleChange} />
      <SubmitButton onClick={submitPuzzle} />
      <ResetButton onClick={resetBoard} />
    </div>
  );
};

export default App;