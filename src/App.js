import { useState } from 'react';
import Button from './button';
import Dice from './Dice';

function random(n) {
    return Math.ceil(Math.random() * n);
}

function App() {
    const [num, setNum] = useState(1);
    const [sum, setSum] = useState(0);
    const [gameHistory, setGameHistory] = useState([]);

    const handleRollClick = () => {
        const nextNum = random(6);
        setNum(nextNum);
        setSum(sum + nextNum);
        //참조형(배열, 객체 등) state를 변경할 때에는 전체를 새로 만든다고 생각
        setGameHistory([...gameHistory, nextNum]); 
    }

    const handleClearClick = () => {
        setNum(1);
        setSum(0);
        setGameHistory([]);
    }
    return (
      <div>
        <div>
          <Button onClick={handleRollClick}>던지기</Button>
          <Button onClick={handleClearClick}>처음부터</Button>
        </div>
        <div>
            <h2>나</h2>
            <Dice color="red" num={num} />
            <h2>총점</h2>
            <p>{sum}</p>
            <h2>기록</h2>
            <p>{gameHistory.join(', ')}</p>
        </div>
      </div>
    );
  }
  
  export default App;