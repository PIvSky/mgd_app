import { useState } from 'react';
import './Footer.scss';
import logoImg from '../../assets/logo/mika-logo-desktop.png';

const Footer = () => {

    const [changeContent, setChangeContent] = useState(true);

    const handleAcceptCookies = () => {
        setChangeContent(false);
      };


    return (
        <div className="footer">
            {changeContent ? (
            <div className='cookies'>
                <div className='cookies-question'>
                    <p>Używamy cookies, daj znać, czy jesteś z tym ok!</p>
                </div>
                <div className='cookies-buttons'>
                    <button className='cookies-buttons-element' onClick={handleAcceptCookies}>Nie Ok</button>
                    <button className='cookies-buttons-element' onClick={handleAcceptCookies}>Ok</button>
                </div>
            </div>
            ) : (
            <div className='footer-info'>
                <img className='footer-info-logo' src={logoImg} alt='logo-img'/>
                <div className='footer-info-data'>
                    <p>KONTAKT</p>
                    <p>krzysztofmika@gmail.com</p>
                    <p>+48 904 049 049</p>
                </div>
                <button className='footer-info-button'>polityka <br></br>prywatności</button>
            </div>
            )}
        </div>
    )
}

export default Footer