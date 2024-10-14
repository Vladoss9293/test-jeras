import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import styleWeather from './WeatherApi.module.css';

export default function WeatherApi() {

    const [input, setInput] = useState('Okhtyrka');
    const [city, setCity] = useState(input);
    const [errorUer, setErrorUser] = useState(null);
    const [resWeather, setResWeather] = useState(null);
    const apiKey = '224d66a90f75765689de41c01c050060';
    
    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            let rasParse = data.weather;
            setResWeather(rasParse[0].description);
        })
        .catch(error => {
            console.log('Не правильно указан город');
        })

    }, [city]);

    function handleClick() {
        setCity(input);
    }

  return (
    <div>
        <div>
            <Header />
        </div>
        <div className={styleWeather.parent}>
            <div className={styleWeather.block}>
                <p className={styleWeather.text}>
                    <input value={input} onChange={(event) => setInput(event.target.value)} type="text" placeholder='Введите город на English' />
                    <button onClick={handleClick}>Go</button>
                    <br />
                    <p className={styleWeather.textWeather}>
                        {resWeather}
                    </p>
                </p>
            </div>
        </div>
    </div>
  )
}
