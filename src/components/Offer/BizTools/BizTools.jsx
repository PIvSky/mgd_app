import './BizTools.scss';
import VectorBg from '../../Assets/VectorBg/VectorBg';

const BizTools = () => {

    const content = {
        title: 'Implementacja nowoczesnych narzędzi biznesowych',
        subtitle: 'Dzięki naszym zaufanym partnerom technologicznym wdrażamy najnowocześniejsze systemy umożliwiające codzienną kontrolę biznesu, m.in:',
        items : [
            "Zarządczy rachunek wyników",
            "Analiza struktury przychodów",
            "Analiza struktury kosztów",
            "Analiza marżowości produktów",
            "Analiza podejrzanych transakcji POS",
            "Kontrola utargów",
            "Kontrola magazynów",
            "System motywacyjny pracowników",
            "Analiza wydajności pracowników",
            "KPI lokalu oraz pracowników",
            "Budżetowanie operacyjne",
            "Budżetowanie inwestycyjne"
        ]
    }
        
    return (
        <div className='modern-tools'>
            <div className='main'>
                <h3 className='main-title'>{content.title}</h3>
                <p className='main-subtitle'>{content.subtitle}</p>
            </div>
            <div className='list'>
                {content.items.map((item, index) => (
                    <div className='list-rect' key={index}>
                        <p className='list-rect-text'>{item}</p>
                    </div>
                ))}
            </div>
        <VectorBg className='bg-vector'/>
        </div>
    )
}

export default BizTools