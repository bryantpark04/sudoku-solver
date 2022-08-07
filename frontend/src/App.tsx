import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const testBoard: string = '6.....8.3.4.7.................5.4.7.3..2.....1.6.......2.....5.....8.6......1....';
  const [board, setBoard] = useState<string[]>([...testBoard]);
  const [txt, setTxt] = useState<string[]>([""]);

  useEffect(() => {
    (async () => {
      try {
        const payload = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }, 
          body: board
        }
        const res = await axios.post('/solve', payload);
        setTxt(res.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="App">
      <p>The unsolved board is {board}</p>
      <p>The board is {txt}</p>
    </div>
  );
}

export default App;
