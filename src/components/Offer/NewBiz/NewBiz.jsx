import './NewBiz.scss';
import VectorBg from '../../Assets/VectorBg/VectorBg';
import img1 from '../../../assets/offer/new-biz/img-1.png';
import img2 from '../../../assets/offer/new-biz/img-2.png';
import img3 from '../../../assets/offer/new-biz/img-3.png';
import img4 from '../../../assets/offer/new-biz/img-4.png';
import img5 from '../../../assets/offer/new-biz/img-5.png';
import sketch from '../../../assets/offer/new-biz/sketch.png';

const NewBiz = () => {

    const main = {
        title: 'Dla nowo otwieranych biznesów.',
        rectangle: 'Specjalnie z myślą o tobie przygotowaliśmy metodę analizy pomysłu od podstaw do realizacji, bez ściemy i owijania w przysłowiową bawełnę.',
        strategy: {
            one: 'Budowanie strategii i przygotowanie się do otwarcia swojego pierwszego biznesu, lub porzucenie na rzecz nowej samodzielnej działalności obecnej pracy to zawsze duże wyzwanie i sporo stresu. Dla wielu to właśnie restauracja lub kawiarnia wydaje się być świetnym pomysłem na nowy początek biznesowej drogi.',
            two: 'Będziemy z tobą od początku, ale zanim ruszy budowa i pełna parą zabierzemy się do pracy nasi partnerzy merytoryczni, najlepsi praktycy branży odpowiedzą na twoje pytania i wątpliwości, oraz ocenią potencjał realizacji pomysłu.'
        },
    };

    const desc = {
        title: 'Przejdziemy proces dokładnej diagnozy i badania potrzeb:',
        subtitle: 'Pracujemy według zasady: Im lepsze pytanie, tym lepsza odpowiedź,  zadamy ci więc dużo pytań m.in:'
    };

    const infographic = [
        {
            src: img1,
            desc: 'Jakie koncepty masz obecnie na swoim radarze? Co cię interesuje w szeroko-pojętej branży gastronomicznej?'
        },
        {
            src: img2,
            desc: 'Czy znasz odpowiednie narzędzia i technologie, potrzebne do prowadzenia gastro biznesu?'
        },
        {
            src: img3,
            desc: 'Co powinniśmy uzyskać od firm zewnętrznych, a co stworzyć wewnętrznie?'
        },
        {
            src: img4,
            desc: 'Gdzie jest nisko wiszący owoc? Jakie są szybkie zwycięstwa, aby zdobyć szybki impet i stanąć szybko na nogi?'
        },
        {
            src: img5,
            desc: 'Jakie są nasze największe ryzyka i jakie strategie ich ograniczenia warto zastosować?'
        },
    ];

    const report = {
        title: 'Po zakończonym procesie otrzymasz pełny raport wraz z komentarzamiekspertów:',
        subtitleOne : 'Jakie korzyści funkcjonalne i pozafunkcjonalne otrzymasz współpracując z nami:',
        listOne : [
            'Optymalizacja budżetów otwarciowych',
            'Spokój w realizacji inwestycji ',
            'Poszerzenie wiedzy z kategorii (gastro) i biznesowej w ogóle',  
            'Optymalizacja nakładów (dolar & time)',
            'Rozwiązywanie trudnych dylematów biznesowych',  
            'Zwiększenie sprzedaży ',
            'Zbudowanie / odbudowanie zaufania wśród docelowych klientów / konsumentów ',
            'Długookresowy horyzont planistyczny',  
            'Kontrola kosztów i realne budżetowanie przychodów',
            "Powtarzalne narzędzia do prowadzenia biznesu (np. P&L, procesy, standardy)",
            'Rozwinięcie i materializacja (down-to-earth) pomysłów / konceptów / wizji klienta',
            'Doradztwo ad-hoc na wybrane dylematy / pytania klienta'
        ]
    };

    return (
        <div className='new-biz'>
            <div className='main-container'>
                <h3 className='title'>{main.title}</h3>
                <div className='rectangle-container'>
                    <div className='rectangle'>
                        <p className='rectangle-content'>{main.rectangle}</p>
                    </div>
                </div>
                <div className='text'>
                    <p className='text-one'>{main.strategy.one}</p>
                    <p className='text-two'>{main.strategy.two}</p>
                </div>
            </div>
            <div className='desc'>
                <h3 className='desc-title'>{desc.title}</h3>
                <p className='desc-subtitle'>{desc.subtitle}</p>
                <div className='inforgraphic-container'>
                {infographic.map((index, key) => (
                    <div className='graf-card' key={key}>
                        <div className='graf-rect'>
                            <img src={index.src} alt='graf-img'></img>
                        </div>
                        <p className='graf-text'>{index.desc}</p>
                    </div>
                ))}
                </div>
            </div>
            <div className='report'>
                <h3 className='report-title'>{report.title}</h3>
                <div className='subtitle-one'>
                    <img src={sketch} alt='sketch' />
                    <p>{report.subtitleOne}</p>
                </div>
                <div className='list-one'>
                    <ul>
                    {report.listOne.map((index, key)=> (
                        <li key={key}>{index}</li>
                    ))}
                    </ul>
                </div>
                <div className='subtitle-two'>
                    
                </div>
            </div>

            <VectorBg className='bg-vector'/>
        </div>        
    )
}

export default NewBiz