import './SuccesStory.scss';
import ImageSlider from '../ImageSlider/ImageSlider';
import VectorBg from '../Assets/VectorBg/VectorBg';
// img
import bpwImg from '../../assets/succesStory/bpw/bpw-img.png';
import bpwLogo from '../../assets/succesStory/bpw/bpw-logo.png'
import charlotteImg from '../../assets/succesStory/charlotte/charlotte-img.png'
import charlotteLogo from '../../assets/succesStory/charlotte/charlotte-logo.png'
import bibendaImg from '../../assets/succesStory/bibenda/bibenda-img.png'
import bibendaLogo from '../../assets/succesStory/bibenda/bibenda-logo1.png'


const SuccesStory = () => {

    const succesStoryContent = [
        {
            imgSrc: bpwImg,
            logoSrc: bpwLogo,
            title: 'Brać Polskie Wina',
            content: 'Mika Gastro Design wykonało dla BRAĆ Polskie Wina całościowe wsparcie konsultingowe - od aspektów technologicznych i projektu lokalu, poprzez kwestie portfolio i strategii cenowej, na aspektach stricte biznesowych skończywszy. Nasza spółka dostała ogrom wiedzy - i co najważniejsze - konkretnych narzędzi, dzięki którym możemy świadomie i z pełną kontrolą prowadzić i rozwijać swój biznes. Bez tej wiedzy nie byłoby możliwe otwarcie dwóch lokali w jednym roku. Warte podkreślenia jest niesamowite zaangażowanie, niebywały profesjonalizm i ogrom atomowej wręcz energii Krzysztofa Miki. Dostaliśmy serię projektów szytych na miarę naszego konceptu i pod naszą strategię. Dzięki temu wszystkiemu mogliśmy ze spokojem prowadzić inwestycję, a później zarządzać naszym biznesem. Właściwie wszystkie predykcje i wskazania, które opracował Krzysztof sprawdziły się w naszej bieżącej pracy. Powiedzieć "gorąco polecam Mika Gastro Design", to nic nie powiedzieć!',
            sign: 'Marcin Bełza,\n Partner BRAĆ Polskie Wina',
        },
        {
            imgSrc: charlotteImg,
            logoSrc: charlotteLogo,
            title: 'Charlotte',
            content: 'Krzysztof dołączył do Charlotte kiedy ważyły się losy warszawskiej Charlotte Menory. Objął stanowisko menedżera w momencie przeniesienia lokalu z placu Grzybowskiego na ulicę Próżną. Wsparł to niełatwe przedsięwzięcie logistyczne i projektowe swoim doświadczeniem, doskonałą organizacją oraz dobrą energią. Stworzył zgrany zespół kelnerski, kuchenny i kierowniczy, wspierał także rozwój cateringu Charlotte. Profesjonalizm, odpowiedzialność, charyzma w połączeniu z energicznością oraz pozytywnym nastawieniem - to cechy i styl pracy jakie reprezentuje Krzysztof.',
            sign: 'Urszula Kuźnik,\n Menedżer ds. Marketingu i Sprzedaży',
        },
        {
            imgSrc: bibendaImg,
            logoSrc: bibendaLogo,
            title: 'Bibenda',
            content: 'Współpraca z Krzysztofem (Mika Gastro Design) pozwoliła nam uzyskać niezbędną przy zmianach strukturalnych perspektywę z zewnątrz. Dodatkowo profesjonalizm i podejście Krzysztofa z zacięciem do szczegółów ułatwia życie na przyszłość. Polecam w każdej sprawie związanej z biznesem gastronomicznym.',
            sign: 'Beniamin Bielecki',
        },
    ]
    return (
        <div className='succes-container'>
            <ImageSlider data={succesStoryContent} />
            <VectorBg className='bg-vector'/>
        </div>
    )
}

export default SuccesStory;