import React, { useState } from 'react';
import Header from '../header/Header';
import styleMain from '../Main/Main.module.css';
import addWoomen from '../../image/main/mini-game/woomen.webp';
import addShowWoomen from '../../image/main/mini-game/woomenShow.jpg';
import styleCountGame from './CountGame.module.css';
import Teacher from '../../image/main/mini-game/teacher.jpg';


function CountGame() {
    const [count, setCount] = useState(500);
    const [upgrade, setUpgrade] = useState(50);
    const [unlockOneScreen, setLockScreen] = useState(addShowWoomen);
    const [countUpgrate, setCountUpgrate] = useState(1);
    let random = Math.floor(Math.random() * 2) + 1;

    function plus() {
        setCount(count + countUpgrate)
    }

    function unLockOne() {
        if (count >= 500) {
            setLockScreen(addWoomen);
            setCount(count - 500);
        } else {
            alert('У вас не хватка кликов');
        }
    }

    function upgradeClick() {
        if (count > upgrade) {
            setCount(count - upgrade);
            setCountUpgrate(countUpgrate + random);
            setUpgrade(upgrade * 2);
        } else {
            console.log('Ты хуесос');
        }
    }

    return <div>
        < Header />
        <div className={styleCountGame.Container}>
            <div>
                <p className={styleCountGame.TextClick}>Кликов: {count}</p>
                <img className={styleCountGame.imageTeacher} onClick={plus} src={Teacher} alt="" />
                <button onClick={upgradeClick} className={styleCountGame.ButtonClick}>upgrade to {upgrade}</button>
            </div>
        </div>
        <div onClick={unLockOne} className={styleCountGame.styleBlock}>
            <img src={unlockOneScreen} alt="" />
        </div>
        <div className={styleCountGame.styleBlock}></div>
        <div className={styleCountGame.styleBlock}></div>
        <div className={styleCountGame.styleBlock}></div>
    </div>
}

export default CountGame;