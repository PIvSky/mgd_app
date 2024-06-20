import { useState, useRef} from 'react';
import './Footer.scss';
import logoImg from '../../assets/logo/mika-logo-desktop.png';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';

const Footer = () => {

    const [changeContent, setChangeContent] = useState(true);
    const dialogRef = useRef(null);

    const handleAcceptCookies = () => {
        setChangeContent(false);
      };

      const openModal = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    }

    const closeModal = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    }


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
                    <p>kontakt@krzysztofmika.pl</p>
                    <p>+48 904 049 049</p>
                </div>
                <button onClick={openModal} className='footer-info-button'>polityka <br></br>prywatności</button>
            </div>
            )}
            <PrivacyPolicy closeModal={closeModal} dialogRef={dialogRef}/>
        </div>
    )
}

export default Footer