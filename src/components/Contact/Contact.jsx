import './Contact.scss';
import VectorBg from '../Assets/VectorBg/VectorBg';

const Contact = () => {

    const data = {
        title: 'Skontaktuj się z nami już dziś!',
        phoneNumber: '+ 48 793 400 067 ',
        emailAdress: 'kontakt@krzysztofmika.pl'
    }

    return (
        <div className='contact'>
            <div className='contact-main'>
                <h3 className='contact-main-title'>{data.title}</h3>
                <div className='circle-phone'>
                    <p className='circle-phone-content'>{data.phoneNumber}</p>
                </div>
                <div className='circle-email'>
                    <p className='circle-email-content'>{data.emailAdress}</p>
                </div>
            </div>
            <VectorBg className='bg-vector'/>
        </div>
    )
}

export default Contact