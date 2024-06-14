import './About.scss'
import aboutPic from '../../assets/about/about-pic.png';
import logo1 from '../../assets/about/logo/addcontrolling.svg';
import logo2 from '../../assets/about/logo/kadromierz.svg';
import logo3 from '../../assets/about/logo/gopos.png';
import logo4 from '../../assets/about/logo/bp.png';
import person1 from '../../assets/about/people/people.png';
import person2 from '../../assets/about/people/people.png';
import person3 from '../../assets/about/people/people.png';
import VectorBg from '../Assets/VectorBg/VectorBg';

const About = () => {

    const aboutData = {
        content: {
            title: 'Krzysztof Mika',
            photo: aboutPic,
            aboutOne: 'Efektywne prowadzenie gastro biznesu wymaga kompetencji z wielu dziedzin - biznesowej, zarządczej, marketingowej i HR, analitycznej, koncepcyjnej i strategicznej. W ramach jednego przedsiębiorstwa trudno jest zintegrować te kompetencje.',
            aboutTwo: 'Właśnie dlatego powołałem do życia Mika Gastro Design - aby rozstrzygać trudne dylematy biznesowe, kreować zmianę i wzrost, wspierać budowanie unikalnych i atrakcyjnych biznesowo konceptów gastronomicznych, dostarczać efektywne narzędzia do prowadzenia i rozwijania gastro biznesu.',
            mission: ['Profesjonalizacja branży gastronomicznej'],
            vision: [
                'Kreowanie zmiany',
                'Kreowanie unikalnych konceptów',
                'Rozwój polskich konceptów restauracyjnych do rangi wielkich przedsiębiorstw i budowanie imperiów na miarę Danny’ego Mayera.',                
            ]
        }
    };

    const aboutPartnersLogos = [logo1, logo2, logo3, logo4];

    const aboutPeoplePhoto = [
        {
            src: person1,
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
            src: person2,
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
            src: person3,
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        }
    ];

    return (
        <div className='about'>
            <div className='bio'>
                <div className='bio-content'>
                    <div className='bio-title'>
                        <h2 className='bio-title__element'>{aboutData.content.title}</h2>
                    </div>
                    <div className='bio-photo'>
                        <img className='bio-photo-element' alt='about-photo' src={aboutPic}/>
                    </div>
                    <div className='grid-wrapper'>
                        <div className='bio-content-element'>
                            <p>{aboutData.content.aboutOne}</p>
                            <p>{aboutData.content.aboutTwo}</p>
                        </div>
                        <div className='bio-content-mission'>
                            <h4 className='mission-subtitle'>Misja:</h4>
                            <div className='rect-container'>
                            {aboutData.content.mission.map((item, index) => (
                                <div className='mission-rect' key={index}>
                                    <p className='mission-rect-text'>{item}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className='bio-content-vision'>
                            <h4 className='vision-subtitle'>Wizja:</h4>
                            <div className='rect-container'>
                                {aboutData.content.vision.map((item, index) => (
                                    <div className='vision-rect' key={index}>
                                        <p className='vision-rect-text'>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div> 
                </div>
                <div className='bio-partners'>
                    <h4 className='partners-subtitle'>partnerzy merytoryczni</h4>
                    <div className='partners-container'>
                        {aboutPartnersLogos.map((item, index) => (
                            <img src={item} className='partner-logo' alt='logo-pic' key={index}></img>
                        ))}
                    </div>     
                </div>
                <div className='bio-people'>
                    <h4 className='people-subtitle'>partnerzy merytoryczni</h4>
                    <div className='people-container'>
                        {aboutPeoplePhoto.map((item, index) => (
                            <div className='person-card' key={index}>
                                <div className='person-rect'>
                                    <img src={item.src} alt='person-pic'/>
                                </div>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>     
                </div>
            </div>
            <VectorBg className='bg-vector'/>
        </div>
    )
}

export default About