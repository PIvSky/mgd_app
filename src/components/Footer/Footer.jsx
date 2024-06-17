import { useState } from 'react';
import './Footer.scss';

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
                    <p>Używamy cookies,<br></br> daj znać,<br></br> czy jesteś z tym ok!</p>
                </div>
                <div className='cookies-buttons'>
                    <button className='cookies-buttons-element' onClick={handleAcceptCookies}>Nie Ok</button>
                    <button className='cookies-buttons-element' onClick={handleAcceptCookies}>Ok</button>
                </div>
            </div>
            ) : (
            <div className='contact'>

            </div>
            )}
            
            
        </div>
    )
}

export default Footer