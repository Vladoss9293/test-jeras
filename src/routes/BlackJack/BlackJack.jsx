import React from 'react'
import Header from '../header/Header'
import styleBlackJack from './BlackJack.module.css';

export default function BlackJack() {
  const [money, setMoney] = React.useState(150);
  const [playerSchet, setPlayerSchet] = React.useState(0);
  const [inGame, setInGame] = React.useState(false);
  const [robotSchet, setRobotSchet] = React.useState(0);
  const [choice, setChoice] = React.useState(0);
  const [more, setMore] = React.useState(false);
  const [gameOver, setGameOver] = React.useState(false);
  const [bid, setBid] = React.useState(0);

  let oneBid = Math.floor(money / 3);
  let twoBid = Math.floor(money / 2);

  function handleClick(amount) {
    if (money >= amount) {
      let newArondBot = Math.floor(Math.random() * (21 - 17 + 2)) + 15;
      setRobotSchet(newArondBot);
      setChoice(amount);
      setMoney(Math.floor(money - amount));
      setBid(amount + amount);
      setInGame(true);
      console.log(`Ставка: ${amount}`)
    } else {
      alert('Ты бомж!');
    }
  }
  
  function Accept() {
    if (playerSchet < 21) {
      let randomPlayer = Math.floor(Math.random() * 10) + 1;
      setPlayerSchet(playerSchet + randomPlayer);
    }
  }

  function Refuse() {
    if (playerSchet > robotSchet && playerSchet <= 21) {
      setMore(true);
      setMoney(money + bid);
      setTimeout(() => {
        setChoice(0);
        setInGame(false);
        setPlayerSchet(0);
        setMore(false);
        setGameOver(false);
        setBid(0);
      }, 3000)
    } else {
      setGameOver(true);
      setTimeout(() => {
        setChoice(0);
        setInGame(false);
        setPlayerSchet(0);
        setMore(false);
        setGameOver(false);
        setBid(0);
      }, 3000)
    }
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={styleBlackJack.parent}>
        <div className={styleBlackJack.block}>
          {!inGame ? (
            <div>
              <div className={styleBlackJack.text}>
                {money}$
              </div>
              <div className={styleBlackJack.blackJack1}>
                Выберите ставку
              </div>
              <div className={styleBlackJack.blackJack2}>
                <div className={styleBlackJack.button}>
                  <button onClick={() => handleClick(oneBid)} className={styleBlackJack.button1}>{oneBid}</button>
                  <button onClick={() => handleClick(twoBid)} className={styleBlackJack.button1}>{twoBid}</button>
                  <button onClick={() => handleClick(money)} className={styleBlackJack.button1}>{money}</button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className={styleBlackJack.blackJack2}>{gameOver ? 'Ты проиграл.' : more ? 'Вы выиграли!' : 'Ваш счет | Счет бота'}</div>
              <div className={styleBlackJack.blackJack2}>{playerSchet} | {robotSchet}</div>

              <div className={styleBlackJack.buttonV}>
                <button onClick={Accept} className={styleBlackJack.buttonVParent}>Взять карты</button>
                <button onClick={Refuse} className={styleBlackJack.buttonVParentOt}>Отказаться</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
