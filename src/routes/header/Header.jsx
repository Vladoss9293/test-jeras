import styleHeader from './Header.module.css'
import JerasImage from '../../image/headers/jeras/Jeras-removebg.png';
import { Link } from 'react-router-dom';

function Header() {
    return <header className={styleHeader.headBody}>
        <div className={styleHeader.jerasImage}>
            <Link to="/test-jeras/">
                <img src={JerasImage} alt="Jeras" />
            </Link>
        </div>
        <div className={styleHeader.SignUp}>
            <Link to="/sign-in" className={styleHeader.SignUpText}>sign-in</Link>
            <Link to="/sign-up" className={styleHeader.SignInpText}>sign-up</Link>
        </div>
    </header>
}

export default Header;