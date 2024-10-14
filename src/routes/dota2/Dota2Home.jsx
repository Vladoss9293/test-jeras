import React, { useState } from 'react'
import Header from '../header/Header'
import styleDota from './Dota2Home.module.css';
import oneSong from '../../song/images.jfif';
import twoSong from '../../song/Ingame_model_Dust_of_Appearance.webp';
import threeSong from '../../song/images (1).jfif';
import fourSong from '../../song/a-change-in-moonshard-v0-4l97t2ol11yc1.webp';
import fiveSong from '../../song/Ingame_model_Smoke_of_Deceit.webp';
import song from '../../song/m2jhdc9iwis4rx0bvune.mp3';
import birth from '../../song/image-removebg-preview.png';


export default function Dota2Home() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correct, setCorrect] = useState(0);

  let questions = [
    {
      title: oneSong,
      variants: ['Aedon disk', 'Black King Bar', 'Silver Eage', 'Не из доты 2'],
      correct: 0
    },
    {
      title: twoSong,
      variants: ['Smouke Of Deceit', 'Granate', 'Dust of Appearance', 'Faerie Fire'],
      correct: 2
    },
    {
      title: threeSong,
      variants: ['Mask of Madness', 'Moonshard', 'Звук смерти Терзателя', 'Не из доты 2'],
      correct: 0
    },
    {
      title: fourSong,
      variants: ['Moonshard', '3 скилл Лиона', 'Satanic', 'Не из доты 2'],
      correct: 0
    },
    {
      title: fiveSong,
      variants: ['Cheease', 'Aegis', 'Smouke Of Deceit', 'Dust of Appearance'],
      correct: 2
    }
  ]

  function Game() {
    return <div>
      <div>
        <img id={styleDota.imgDota} src={questions[currentQuestion].title} alt="Aedon disk"/>
        <div>
          {questions[currentQuestion].variants.map((text, index) => (
            <p className={styleDota.p} onClick={() => handleClick(index)} key={index}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  }

  function handleClick(index) {
    setCurrentQuestion(currentQuestion + 1);

    if (index === questions[currentQuestion].correct) {
      setCorrect(correct + 1)
    }

    console.log(index);
  }

  function Result() {
    setInterval(() => {
      window.location.reload();
    }, 3000);

    return <div>
      <div>
        <div>Поздравляю!</div>
      </div>
      <div>
        <img style={{width: '236px', height: '156px'}} src={birth} alt="" />
      </div>
      <div>
        <div>Вы ответили верно на {correct} из {questions.length}</div>
      </div>
    </div>
  }

  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
            <div className={styleDota.parent}>
              <div className={styleDota.block}>
                {currentQuestion !== questions.length ? <Game /> : <Result />}
              </div>
            </div>
        </div>
        <audio controls>
          <source src={song} type="audio/mp3" />
          Ваш браузер не поддерживает аудио.
        </audio>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/eS0GL73tkmw" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
    </div>
  )
}
