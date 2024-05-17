import './ImageSlider.scss'
import { insertLineBreaks } from '../../util/utility'
import arrowMobile from '../../assets/arrow/arrow-mobile.png'
import arrowDesktop from '../../assets/arrow/arrow-desktop.png'

const ImageSlider = ({data}) => {

    return (
        <div className='slider-container'>
            
            <div className='slide'>
                
                <h2 className='slide-title'>{data.title}</h2>
                <div className='slide-img-wrapper'>
                    <div className='left-arrow-mobile'>
                        <img src={arrowMobile} alt='left-arrow'></img>
                    </div>
                    <div className='slide-img'>
                        <div className='slide-img__logo'>
                            <img src={data.logoSrc} alt='brand-logo'></img>
                        </div>
                        <img className='slide-img__element' src={data.imgSrc} alt='brand-img' />
                    </div>
                    <div className='right-arrow-mobile'>
                        <img src={arrowMobile} alt='right-arrow'></img>
                    </div>
                </div>
                <p className='slide-content'>{data.content}</p>
                <p className='slide-sign'>{insertLineBreaks(data.sign)}</p>
                
            </div>
            <div className='dots'></div>
        </div>
    )
}

export default ImageSlider;