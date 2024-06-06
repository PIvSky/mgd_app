import './ExistBiz.scss';
import VectorBg from '../../Assets/VectorBg/VectorBg';
import sketch from '../../../assets/offer/new-biz/sketch.png';

const ExistBiz = () => {

    const main = {
        title: 'Dla istniejących biznesów.',
        rectangle: 'Dzięki wiedzy na temat trendów branżowych i zdolności do dostosowywania strategii do przyszłego sukcesu będziemy dla ciebie wszechstronnym partnerem oferując szeroki zakres usług, które pomogą ci nawigować w zawiłościach branży, dostosować się do zmian i tworzyć trwałą wartość',
    };

    const research = {
        title: 'Przejdziemy proces dokładnej diagnozy i badanaia potrzeb, analizując m.in:',
        subtitleOne: 'Działalność biznesową',
        subtitleTwo: 'Działalność marketingową',
        businessList : [
            'Diagnoza obecnego stanu sprzedaży',
            'Praca z klientami - weryfikacja obecnych standardów obsługi i budowa nowych, optymalnych; weryfikacja i ocena scoringowa oferty całościowego menu',
            'Ewaluacja, badanie kondycji sprzedaży i dokumentów sprzedaży: raport wraz z oceną',
            'Ewaluacja, badanie lokalizacji (usytuowanie, wystrój, ułożenie, prezentacja produktów itp.)',
            'Badanie elastyczności cenowej w danej kategorii (np. restauracja) i segmencie (np. mainstream, fine dining, średnia półka)',
            'Analiza kadr – płace, kompetencje i efektywność sprzedażowa',
            'Rekrutacja i szkolenie kadr',
            'Analiza kosztów i rentowności klienta (FC_BC_LC)',
            'Analiza wydajności pracowników',
            'Analiza gospodarki magazynowej'
        ],
        marketingList : [
            'Ocena jakości i efektywności kanałów komunikacji, ocena konsumenckiej percepcji marki i produktu',
            'Ocena brandingu'
        ],
    }

    const benefits = {
        subtitle: 'Jakie bezpośrednie korzyści otrzymasz we współpracując z nami:',
        nestedSubtitleOne: 'Operacyjne:',
        nestedSubtitleTwo: 'Marketingowe:',
        listOne : [
            'Rozwiązywanie bieżących problemów',
            'Wzmocnienie i rozwój sprzedaży',
            'Budowa optymalnych standardów obsługi',
            'Wdrożenie i wskazania praktyczne z ewaluacji i badania kondycji sprzedaży',
            'Efektywna polityka cenowa',
            'Wskazania praktyczne z analizy kosztów i rentowności klienta (FC_BC_LC)',
            'HACCP, GHP, GMP, BHP',
            'Wdrożenie narzędzi controllingowych i Business Intelligence'
        ],
        listTwo : [
            'Branding, Tone of Voice, strategia komunikacji',
            'Projekt menu'
        ]
    }

    return (
        <div className='ex-biz'>
            <div className='main-container'>
                <h3 className='title'>{main.title}</h3>
                <div className='rectangle-container'>
                    <div className='rectangle'>
                        <p className='rectangle-content'>{main.rectangle}</p>
                    </div>
                </div>
            </div>
            <div className='research'>
                <h3 className='research-title'>{research.title}</h3>
                <p className='research-nested-subtitle-biz'>{research.subtitleOne}</p>
                <div className='research-list-one'>
                    {research.businessList.map((item, index) => (
                        <div className='rect' key={index}>
                          <p className='rect-text'>{item}</p>
                        </div>
                    ))}
                    
                </div>
                <p className='research-nested-subtitle-mark'>{research.subtitleTwo}</p>
                <div className='research-list-two'>
                    {research.marketingList.map((item, index) => (
                        <div className='rect' key={index}>
                          <p className='rect-text'>{item}</p>
                        </div>
                    ))}
                </div>
            </div>                
            <div className='benefits'>
                <div className='subtitle-two'>
                    <img src={sketch} alt='sketch' />
                    <p>{benefits.subtitle}</p>
                </div>
                <p className='nested-subtitle'>{benefits.nestedSubtitleOne}</p>
                <div className='list-one'>
                    <ul>
                    {benefits.listOne.map((index, key)=> (
                        <li key={key}>{index}</li>
                    ))}
                    </ul>
                </div>
                <p className='nested-subtitle'>{benefits.nestedSubtitleTwo}</p>
                <div className='list-two'>
                    <ul>
                    {benefits.listTwo.map((index, key)=> (
                        <li key={key}>{index}</li>
                    ))}
                    </ul>
                </div>
            </div>
            <VectorBg className='bg-vector'/>
        </div>
    )
}

export default ExistBiz