import './Home.scss'

const Home = () => {

    const content = 'Specjalizujemy się w rozwoju branży gastronomicznej, oferując wsparcie w zarządzaniu, marketingu, HR, analizach i planowaniu strategicznym. Jesteśmy tu, aby dostarczać skuteczne i nowatorskie rozwiązania dostosowane do Twoich potrzeb. Chcesz osiągnąć więcej?'

    return (
        <div className='home'>
            <div className='home-content'>
                <p className='home-content__element'>{content}
                </p>
            </div>
            <div className='home-circle__violet'/>
            <div className='home-circle__violet__second'/>
            <div className='home-circle__orange'>
                <p>Skontaktuj się z nami już dziś!</p>
            </div>
        </div>
    )
}

export default Home;