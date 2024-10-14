import React, { useEffect, useState } from 'react'
import Header from '../header/Header.jsx'
import styleTimer from './Timer.module.css';

export default function Timer() {
    const [timer, setTimer] = useState(0);
    const [check, setCheck] = useState(false);
    const idInterval = React.useRef(null);
    
    useEffect(() => {
        if (check) {
            idInterval.current = setInterval(() => {
                setTimer(prevTimer => prevTimer + 1);
            }, 1000)
        } else {
            clearInterval(idInterval.current);
        }
    }, [check]);

    function changeSostTimer() {
        setCheck(!check);
    }

    function formatTime(totalSecond) {
        let hours = Math.floor(totalSecond / 3600);
        let minutes = Math.floor((totalSecond % 3600) / 60);
        let seconds = totalSecond % 60;


        return `${hours}:${minutes}:${seconds}`;
    }

  return (
    <div>
        <Header />
        <div className={styleTimer.parent}>
            <div className={styleTimer.block}>
                <p className={styleTimer.text}>Запусти таймер:</p>
                <p className={styleTimer.text}>{formatTime(timer)}</p>
                <button onClick={changeSostTimer} className={styleTimer.button}>{check ? 'Stop' : 'Start'}</button>
            </div>
        </div>
    </div>
  )
}
