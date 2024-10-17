import './index.css'
import React from 'react';
import ErrorPage404 from './error-page-404.jsx'
import Root from './routes/root.jsx'
import CamenNojBymaga from './routes/camenNojBymaga/CamenNojBymaga.jsx';
import SignUp from './routes/signUp/SignUp.jsx';
import ReactDOM from 'react-dom/client';
import Timer from './routes/Timer/Timer.jsx'
import {
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";
import SignIn from './routes/SignIn/SignIn.jsx';
import ApiKey from './routes/Api/ApiKey.jsx';
import CountGame from './routes/CountGame/CountGame.jsx';
import TikTac from './routes/Tik-Tac/TikTac.jsx';
import WeatherApi from './routes/WeatherApi/WeatherApi.jsx';
import Dota2Home from './routes/dota2/Dota2Home.jsx';
import BlackJack from './routes/BlackJack/BlackJack.jsx';


 
const router = createBrowserRouter([
  {
    path: '/test-jeras/',
    element: <Root />,
    errorElement: <ErrorPage404 />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/count-game',
    element: <CountGame />,
  },
  {
    path: '/camenNojBymaga',
    element: <CamenNojBymaga />
  },
  {
    path: '/api',
    element: <ApiKey name={name} />
  },
  {
    path: '/timer',
    element: <Timer />
  },
  {
    path: '/tic-tak',
    element: <TikTac />
  },
  {
    path: '/weather-api',
    element: <WeatherApi />
  },
  {
    path: '/dota2-sound',
    element: <Dota2Home />
  },
  {
    path: '/black-jack',
    element: <BlackJack />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <RouterProvider router={router}/>
	</React.StrictMode>
);