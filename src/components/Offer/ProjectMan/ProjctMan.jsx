import './ProjectMan.scss';
import VectorBg from '../../Assets/VectorBg/VectorBg';

const ProjectMan = () => {

    const data = {
        title: 'Project Management usług budowlano-wykończeniowych',
        contentOne: 'Współpracujemy z doświadczonym generalnym wykonawcą, który świadczy wykończeniowo-budowlane dedykowane branży gastronomicznej, dostosowane do indywidualnych potrzeb.',
        contentTwo: 'Zespół specjalistów charakteryzuje się wieloletnim doświadczeniem w projektowaniu i realizacji lokali gastronomicznych i tworzy przestrzenie, które nie tylko spełniają funkcjonalne wymagania, ale również wyróżniają się estetyką i oryginalnością.',
        contentThree: 'Zapewniamy realizację zadania od projektu po oddanie kluczy. Z pełnym spokojem i realnymi terminami.',
        list : [
            {
                title: 'Projektowanie i aranżacja wnętrz:',
                content: 'Nasi doświadczeni projektanci wnętrz pomogą stworzyć unikalną i funkcjonalną przestrzeń gastronomiczną, uwzględniając indywidualne preferencje klienta oraz zasady ergonomicznego układu pomieszczeń'
            },
            {
                title: 'Wentylacja i klimatyzacja:',
                content: 'Dostosowanie lokalu do najtrudniejszych lokalizacji'
            },
            {
                title: 'Audyt lokalu:',
                content: 'Przed inwestycyjne sprawdzenie przestrzeni'
            },
            {
                title: 'Wykończenia wnętrz:',
                content: 'Kompleksowe usługi remontowo-wykończeniowe, obejmujące malowanie, układanie podłóg, montaż sufitów, instalacje elektryczne i hydrauliczne oraz wszelkie inne prace wykończeniowe, które sprawią, że lokal będzie gotowy do przyjęcia gości'
            },
            {
                title: 'Meble na zamówienie:',
                content: 'Dostarczamy meble gastronomiczne najwyższej jakości, dostosowane do specyfiki lokalu oraz wymagań. Oferujemy również możliwość zamówienia unikatowych, spersonalizowanych rozwiązań'
            },
            {
                title: 'Instalacje gastronomiczne:',
                content: 'Zapewniamy kompleksowe wykonanie instalacji gastronomicznych, w tym montaż sprzętu kuchennego, systemów wentylacji, chłodzenia i ogrzewania'
            },
            {
                title: 'Dbałość o zgodność z normami sanitarnymi:',
                content: 'Jesteśmy świadomi istotności przestrzegania norm sanitarnych w branży gastronomicznej, dlatego nasze projekty i realizacje spełniają wszystkie wymagania dotyczące higieny i bezpieczeństwa'
            }
        ]
    }

    return (
        <div className='proman'>
            <div className='proman-main'>
                <h3 className='proman-main-title'>{data.title}</h3>
                <p className='proman-main-content'>{data.contentOne}</p>
                <p className='proman-main-content'>{data.contentTwo}</p>
                <p className='proman-main-content'>{data.contentThree}</p>
            </div>
            <div className='proman-list'>
                {data.list.map((element, index) => (
                    <>
                        <h3 className='circle-title'>{element.title}</h3>
                        <div className='circle' key={index}>
                            <p className='circle-content'>{element.content}</p>
                        </div>
                    </>
                ))}
            </div>
            <VectorBg className='bg-vector'/>
        </div>
    )
}

export default ProjectMan