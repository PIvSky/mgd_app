import './Research.scss';
import VectorBg from '../../Assets/VectorBg/VectorBg';
import pic1 from '../../../assets/research/pic1.png';
import pic2 from '../../../assets/research/pic2.png';
import pic3 from '../../../assets/research/pic3.png';
import pic4 from '../../../assets/research/pic4.png';
import pic5 from '../../../assets/research/pic5.png';
import pic6 from '../../../assets/research/pic6.png';

const Research = () => {

    const data = {
        title: 'Badania rynku i trendy',
        descOne: 'Wyrusz z nami w inspiracyjną podróż. Jeden z naszych ekspertów będzie towarzyszyć ci podczas wyjazdu w poszukiwaniu najlepszych światowych inspiracji, do miejsca, które wybierzemy na podstawie Twoich preferencji',
        descTwo: 'Na zakończenie otrzymasz od nas pełny raport trendowy wraz z zdjęciami inspiracyjnymi i klarowną wizją, w którą stronę powinieneś zmierzać oraz jak przenieść te inspiracje na płaszczyznę rzeczywistości.',
        circleOne: 'Nie wiesz, od czego zacząć? Jak zbierać potrzebne dane i co może cię zainspirować? Gdzie znaleźć wiedzę i informacje na temat tego, jaki rodzaj biznesu powinieneś otworzyć na rodzimym rynku?',
        circleTwo: 'Chcesz dowiedzieć się więcej? Napisz do nas!',
        pic: [pic1, pic2, pic3, pic4, pic5, pic6]
    }

    return (
        <div className='research'>
            <div className='research-main'>
                <h3 className='research-main-title'>{data.title}</h3>
                <div className='circle-container'>
                    <div className='circle'>
                        <p className='circle-content'>{data.circleOne}</p>
                    </div>
                </div>
            </div>
            <div className='research-desc'>
                <p className='researc-desc-one'>{data.descOne}</p>
                <p className='researc-desc-two'>{data.descTwo}</p>
            </div>
            <div className='research-pic'>
                {}
            </div>
            <VectorBg className='bg-vector'/>
        </div>
    )
}

export default Research