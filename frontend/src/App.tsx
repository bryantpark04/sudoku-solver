import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [time, setTime] = useState(0.0);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/time');
        setTime(res.data.time);
      } catch (err) {
        console.error(err);
        setTime(-1.0);
      }
    })();
  }, []);

  return (
    <div className="App">
      <p>The time is {time}</p>
    </div>
  );
}

export default App;
