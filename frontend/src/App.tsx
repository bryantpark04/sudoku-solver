import './App.css';

import { useEffect, useState } from 'react';

import Header from './components/Header';
import SudokuBoard from './components/SudokuBoard';
import axios from 'axios';

const App: React.FC = () => {
  const blankBoard: string[] = [...'.'.repeat(81)];

  const [board, setBoard] = useState<string[]>(blankBoard);
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

  return (
    <div className="App">
      <Header />

      <SudokuBoard board={board} handleChange={handleChange}/>
      <div className="buttonContainer flex gap-3 justify-center">
        <button onClick={submitPuzzle} className="bg-[#00063D]  text-[#fff] rounded-md px-5 py-1 hover:underline font-sans font-bold text-2xl">SOLVE</button>
        <button onClick={resetBoard} className="bg-[#00063D] text-[#fff] rounded-md px-5 py-1 hover:underline font-sans font-bold text-2xl">RESET</button>
        <button onClick={getRandomPuzzle} className="bg-[#00063D] text-[#fff] rounded-md px-5 py-1 hover:underline font-sans font-bold text-2xl">RANDOM</button>
      </div>

      {isInvalid && <p style={{color: "red"}}>Invalid puzzle!</p>}
    </div>
  );
};

export default App;
