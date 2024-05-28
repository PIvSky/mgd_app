import './NewBiz.scss';
import VectorBg from '../../Assets/VectorBg/VectorBg'

const NewBiz = () => {

    const main = {
        title: 'Dla nowo otwieranych biznesów.',
        rectangle: 'Specjalnie z myślą o tobie przygotowaliśmy metodę analizy pomysłu od podstaw do realizacji, bez ściemy i owijania w przysłowiową bawełnę.',
        strategy: {
            one: 'Budowanie strategii i przygotowanie się do otwarcia swojego pierwszego biznesu, lub porzucenie na rzecz nowej samodzielnej działalności obecnej pracy to zawsze duże wyzwanie i sporo stresu. Dla wielu to właśnie restauracja lub kawiarnia wydaje się być świetnym pomysłem na nowy początek biznesowej drogi.',
            two: 'Będziemy z tobą od początku, ale zanim ruszy budowa i pełna parą zabierzemy się do pracy nasi partnerzy merytoryczni, najlepsi praktycy branży odpowiedzą na twoje pytania i wątpliwości, oraz ocenią potencjał realizacji pomysłu.'
        },
    }

    const desc = {
        title: 'Przejdziemy proces dokładnej diagnozy i badania potrzeb:',
        subtitle: 'Pracujemy według zasady: Im lepsze pytanie, tym lepsza odpowiedź,  zadamy ci więc dużo pytań m.in:'
    }

    return (
    <>
        <div className='new-biz'>
            <div className='container'>
                <h3 className='title'>{main.title}</h3>
                <div className='rectangle-container'>
                    <div className='rectangle'>
                        <p className='rectangle-content'>{main.rectangle}</p>
                    </div>
                </div>
                <div className='desc'>
                    <p className='desc-one'>{main.strategy.one}</p>
                    <p className='desc-two'>{main.strategy.one}</p>
                </div>
            </div>
            <VectorBg className='bg-vector'/>
        </div>
    </>
        
    )
}

export default NewBiz