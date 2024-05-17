import './ImageSlider.scss'
import { insertLineBreaks } from '../../util/utility'

const ImageSlider = ({data}) => {

    return (
        <div className='slider-container'>
                <div className='slide'>
                    <h2 className='slide-title'>{data.title}</h2>
                    <div className='slide-img-wrapper'>
                        <div className='slide-img'>
                            <div className='slide-img__logo'>
                                <img src={data.logoSrc} alt='brand-logo'></img>
                            </div>
                            <img className='slide-img__element' src={data.imgSrc} alt='brand-img' />
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