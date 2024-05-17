import { useState } from 'react'
import './ImageSlider.scss'
import { insertLineBreaks } from '../../util/utility'
import arrowMobile from '../../assets/arrow/arrow-mobile.png'
// import arrowDesktop from '../../assets/arrow/arrow-desktop.png'

const ImageSlider = ({data}) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = (e) => {
        e.preventDefault();
        if (currentIndex > 0){
            setCurrentIndex(currentIndex - 1)
        } else {
            setCurrentIndex(data.length - 1)
        }
    }

    const nextSlide = () => {
        if (currentIndex < data.length - 1) {
        setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(0)
        }
    }

    return (
        <div className='slider-container'>           
            <div className='slide'>
                <h2 className='slide-title'>{data.title}</h2>
                <div className='slide-img-wrapper'>
                    <div className='left-arrow-mobile' onClick={prevSlide}>
                        <img src={arrowMobile} alt='left-arrow'></img>
                    </div>
                    <div className='slide-img'>
                        <div className='slide-img__logo'>
                            <img 
                                src={data[currentIndex].logoSrc} 
                                alt='brand-logo'>
                            </img>
                        </div>
                        <img 
                            className='slide-img__element' 
                            src={data[currentIndex].imgSrc} 
                            alt='brand-img'>
                        </img>
                    </div>
                    <div className='dots-container'>
                    {data.map((item ,index) => (
                        <div className='dots-container__items' key={index} onClick={() => currentSlide(index)}>
                            <svg height="20" width="20" onClick={prevSlide}>
                                <circle className='dot-image' cx="7" cy="7" r="7" fill={currentIndex === index ? '#000' : '#D9D9D9'} />
                            </svg> 
                        </div>
                    ))}
                    </div>
                    <div className='right-arrow-mobile' onClick={nextSlide}>
                        <img src={arrowMobile} alt='right-arrow'> 
                        </img>
                    </div>
                </div>
                <p className='slide-content'>{data[currentIndex].content}</p>
                <p className='slide-sign'>{insertLineBreaks(data[currentIndex].sign)}</p>            
            </div>
        </div>
    )
}

export default ImageSlider;