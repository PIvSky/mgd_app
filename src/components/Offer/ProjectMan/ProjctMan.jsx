import './ProjectMan.scss';
import VectorBg from '../../Assets/VectorBg/VectorBg';

const ProjectMan = () => {

    const data = {
        title: 'Project Management usług budowlano-wykończeniowych',
        contentOne: 'Współpracujemy z doświadczonym generalnym wykonawcą, który świadczy wykończeniowo-budowlane dedykowane branży gastronomicznej, dostosowane do indywidualnych potrzeb.',
        contentOne: 'Zespół specjalistów charakteryzuje się wieloletnim doświadczeniem w projektowaniu i realizacji lokali gastronomicznych i tworzy przestrzenie, które nie tylko spełniają funkcjonalne wymagania, ale również wyróżniają się estetyką i oryginalnością.',
        contentOne: 'Zapewniamy realizację zadania od projektu po oddanie kluczy. Z pełnym spokojem i realnymi terminami.',
        list : [

        ]
    }

    return (
        <div className='proman'>
            <div className='proman-main'>
                <h3 className='proman-main-title'></h3>
                <p className='proman-main-content'></p>
                <p></p>
                <p></p>
            </div>
            <div className='proman-list'>

            </div>
            <VectorBg className='bg-vector'/>
        </div>
    )
}

export default ProjectMan