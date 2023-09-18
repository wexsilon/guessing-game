import { ChangeEvent, useState } from 'react';
import './App.css';
import { randomNumber } from './util';



function App() {

    const [secretNumber, setSecretNumber] = useState<number>(randomNumber(1, 100));
    const [message, setMessage] = useState<string>("");
    function onChangeValue(e: ChangeEvent<HTMLInputElement>) {
        const inputNumber = parseInt(e.target.value);
        if (!Number.isNaN(inputNumber)) {
            if (inputNumber == secretNumber) {
                setMessage(`You win!\nNumber: ${secretNumber}`);
            } else if (inputNumber > secretNumber) {
                setMessage("Too big!");
            } else {
                setMessage("Too small!");
            }
        }
    }
    
    return (
        <div className="App">
            <h1>{ message }</h1>
            <input type="text" onChange={onChangeValue} />
        </div>
    );
}

export default App;
