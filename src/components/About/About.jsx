import './About.scss'
import aboutPic from '../../assets/about/about-pic.png';

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
                'Rozwój polskich konceptów restauracyjnych do rangi wielkich przedsiębiorstw i budowanie imperiów na miarę Danny’ego Mayera.'
            ]
        }
    };

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
                    <div className='bio-content-element'>
                        <p>{aboutData.content.aboutOne}</p>
                        <p>{aboutData.content.aboutTwo}</p>
                    </div>
                    <div className='bio-content-mission'>
                        <h4 className='mission-subtitle'>Misja:</h4>
                        {aboutData.content.mission.map((item, index) => (
                            <div className='mission-rect' key={index}>
                                <p className='mission-rect-text'>{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className='bio-content-vision'>
                        <h4 className='vision-subtitle'>Wizja:</h4>
                        {aboutData.content.vision.map((item, index) => (
                            <div className='vision-rect' key={index}>
                                <p className='vision-rect-text'>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About