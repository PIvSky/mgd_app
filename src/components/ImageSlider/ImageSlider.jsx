import { useState } from 'react'
import './ImageSlider.scss'
import { insertLineBreaks } from '../../util/utility'
import arrowMobile from '../../assets/arrow/arrow-mobile.png'
import arrowDesktop from '../../assets/arrow/arrow-desktop.png'

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

    const currentSlide = () => {
        setCurrentIndex(index)
    }

    return (
        <div className='slider-container'>           
            <div className='slide'>
                <div className='slide-img-wrapper'>
                    <h2 className='slide-title'>{data[currentIndex].title}</h2>              
                    <div className='slide-img'>
                        <div className='left-arrow-desktop' onClick={prevSlide}>
                            <img src={arrowDesktop} alt='left-arrow'></img>
                        </div>
                        <div className='left-arrow-mobile' onClick={prevSlide}>
                            <img src={arrowMobile} alt='left-arrow'></img>
                        </div>
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
                        <div className='right-arrow-mobile' onClick={nextSlide}>
                            <img src={arrowMobile} alt='right-arrow'> 
                        </img>
                    </div>
                    </div>
                    <div className='dots-container'>
                    {data.map((item, index) => (
                        <div className='dots-container__items' key={index} onClick={() => currentSlide(index)}>
                            <svg height="20" width="20">
                                <circle className='dot-image' cx="7" cy="7" r="7" fill={currentIndex === index ? '#000' : '#D9D9D9'} />
                            </svg>
                        </div>
                    ))}
                    </div>
                    <div className='slide-content'>
                        
                        <p className='slide-content-element'>{data[currentIndex].content} <div className='right-arrow-desktop' onClick={nextSlide}>
                            <img src={arrowDesktop} alt='left-arrow'></img>
                        </div></p>
                        <p className='slide-content-sign'>{insertLineBreaks(data[currentIndex].sign)}</p>
                    </div>                    
                </div>        
            </div>
        </div>
    )
}

export default ImageSlider;