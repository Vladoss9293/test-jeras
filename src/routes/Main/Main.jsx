import styleMain from './Main.module.css';
import ApiImg from '../../image/main/mini-game/api.webp';
import Block1Image from '../../image/main/block/block-1.webp';
import camenNojBymaga from '../../image/main/mini-game/camenNojBymaga.webp';
import screenTimer from '../../image/main/mini-game/screenTimer.webp';
import ticTac from '../../image/main/mini-game/tic-tac.webp';
import weather from '../../image/main/block/weather.webp';
import dota2 from '../../image/main/block/dota2.webp';
import { Link } from 'react-router-dom';

function Main() {
    return <div>
        <div className={styleMain.styleBlock}>
            <Link to="/count-game">
                <img src={Block1Image} alt="" />
            </Link>
        </div>
        <div className={styleMain.styleBlock}>
            <Link to="/camenNojBymaga">
                <img src={camenNojBymaga} alt="" />
            </Link>
        </div>
        <div className={styleMain.styleBlock}>
            <Link to="/api">
                <img src={ApiImg} alt="" />
            </Link>
        </div>
        <div className={styleMain.styleBlock}>
            <Link to="/timer">
                <img src={screenTimer} alt="" />
            </Link>
        </div>
        <div className={styleMain.styleBlock}>
            <Link to="/tic-tak">
                <img src={ticTac} alt="" />
            </Link>
        </div>
        <div className={styleMain.styleBlock}>
            <Link to="/weather-api">
                <img src={weather} alt="" />
            </Link>
        </div>
        <div className={styleMain.styleBlock}>
            <Link to="/dota2-sound">
                <img src={dota2} alt="" />
            </Link>
        </div>
        <div className={styleMain.styleBlock}>
            <a href="">
                <img src="" alt="" />
            </a>
        </div>
    </div>
}

export default Main;