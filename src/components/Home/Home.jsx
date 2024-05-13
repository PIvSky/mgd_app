import './Home.scss'

const Home = () => {

    const insertLineBreaks = (text) => {
        return text.split('\n').map((line, index) => {
            return index === 0 ? line : [<br key={index} />, line];
        });
    };

    const content = {
        mobile : {
            main: "Specjalizujemy się w rozwoju branży gastronomicznej, oferując wsparcie \n w  zarządzaniu, marketingu, \n HR, analizach \n i planowaniu strategicznym. Jesteśmy tu, aby dostarczać skuteczne\n i nowatorskie rozwiązania dostosowane do Twoich potrzeb. Chcesz osiągnąć więcej?",
            contact: 'Skontaktuj się z nami już dziś!',
            quote: "Proces jest ważniejszy niż wynik. Skupienie się na procesie prowadzi do lepszych wyników w dłuższym czasie",
            author: 'Shane Parrish' 
        },
        desktop: {
            main: "Specjalizujemy się w rozwoju branży gastronomicznej, oferując wsparcie w  zarządzaniu, marketingu, HR, analizach\n i planowaniu strategicznym.\n Jesteśmy tu, aby dostarczać skuteczne\n i nowatorskie rozwiązania dostosowane do Twoich potrzeb.",
            contact: {
                question: "Chcesz osiągnąć więcej?",
                button: 'Skontaktuj się \n z nami już dziś!'},
            quote: "Proces jest ważniejszy niż wynik.\n Skupienie się na procesie prowadzi \ndo lepszych wyników w dłuższym czasie",
            author: 'Shane Parrish'
        },
    }

    return (
        <>
            <div className='home mobile'>
                <div className='home-content'>
                    <p className='home-content__element'>{insertLineBreaks(content.mobile.main)}
                    </p>
                </div>
                <div className='home-circle__violet'/>
                <div className='home-circle__violet__second'/>
                <div className='home-circle__orange'>
                    <p>{content.mobile.contact}</p>
                </div>
                <div className='home-quote'>
                    <p>"{content.mobile.quote}"</p>
                    <p>{content.mobile.author}</p>
                </div>
            </div> 
            <div className='home-deskopt'>
                <div className='home-grid'>
                    <div className='home-content__deskopt'>
                        <p className='home-content__deskopt__element'>{insertLineBreaks(content.desktop.main)}
                        </p>
                    </div>
                    <div className='home-circle__deskopt__orange'>
                        <p>{content.desktop.contact.question}</p>
                        <button>{insertLineBreaks(content.desktop.contact.button)}</button>
                    </div>
                    <div className='home-circle__deskopt__violet'/>
                    <div className='home-quote__deskopt'>
                        <p>"{insertLineBreaks(content.desktop.quote)}"</p>
                        <p>{content.desktop.author}</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Home;