import styleCamenNojBymaga from './CamenNojBymaga.module.css'
import Header from '../header/Header';
import Camen from '../../image/main/mini-game/camen.jpg';
import Noj from '../../image/main/mini-game/noj.jpg';
import Bymaga from '../../image/main/mini-game/bymaga.jpg';
import { useState } from 'react';

function CamenNojBymaga() {

    const [playerChoice, setPlayerChoice] = useState(null);
    const [RobotChoice, setRobotChoice] = useState('камень');
    const [text, setText] = useState(`Бот сделал выбор, сделай и ты!`);

    let Choice = ['камень', 'ножницы', 'бумага'];

    
    function gameButton(str) {
        setPlayerChoice(str);
        let randomBotChoce = Math.floor(Math.random() * 3);
        let vuborBota = Choice[randomBotChoce];
        setRobotChoice(vuborBota);

        if (str === vuborBota) {
            setText(`Ничья! Бот сделал выбор: ${vuborBota}`);
        } else if (
            (str === 'камень' && vuborBota === 'ножницы') ||
            (str === 'ножницы' && vuborBota === 'бумага') ||
            (str === 'бумага' && vuborBota === 'камень')
        ) {
            setText(`Ты выиграл! Бот сделал выбор: ${vuborBota}`);
        } else {
            setText(`Ты проиграл! Бот сделал выбор: ${vuborBota}`);
        }
    }


    return (
        <>
            <Header />

            <div className={styleCamenNojBymaga.Container}>
                <div className={styleCamenNojBymaga.text}>
                    {text}
                </div>
            </div>
            <div className={styleCamenNojBymaga.Container}>
                <div onClick={() => gameButton('камень')} className={styleCamenNojBymaga.styleBlock}>
                    <img src={Camen} alt="" />
                </div>
                <div onClick={() => gameButton('ножницы')} className={styleCamenNojBymaga.styleBlock}>
                    <img src={Noj} alt="" />
                </div>
                <div onClick={() => gameButton('бумага')} className={styleCamenNojBymaga.styleBlock}>
                    <img src={Bymaga} alt="" />
                </div>
                <div onClick={() => gameButton('бумага')} className={styleCamenNojBymaga.styleBlock}>
                    <img src={Bymaga} alt="" />
                </div>
            </div>
        
        </>
    )
}

export default CamenNojBymaga;