import './Home.scss'

const Home = () => {

    const content = {
        main: 'Specjalizujemy się w rozwoju branży gastronomicznej, oferując wsparcie w zarządzaniu, marketingu, HR, analizach i planowaniu strategicznym. Jesteśmy tu, aby dostarczać skuteczne i nowatorskie rozwiązania dostosowane do Twoich potrzeb. Chcesz osiągnąć więcej?',
        contact: 'Skontaktuj się z nami już dziś!',
        quote: "Proces jest ważniejszy niż wynik. Skupienie się na procesie prowadzi do lepszych wyników w dłuższym czasie",
        author: 'Shane Parrish' 
    }

    return (
        <div className='home'>
            <div className='home-content'>
                <p className='home-content__element'>{content.main}
                </p>
            </div>
            {/* <div className='home-circle__violet'/>
            <div className='home-circle__violet__second'/>
            <div className='home-circle__orange'>
                <p>{content.contact}</p>
            </div>
            <div className='home-quote'>
                <p>"{content.quote}"</p>
                <p>{content.author}</p>
            </div> */}
        </div>
    )
}

export default Home;