import './ImageSlider.scss'

const ImageSlider = (data) => {
    return (
        <div className='slider-container'>
                <div className='slide'>
                    <h2 className='slide-title'></h2>
                    <div className='slide-img'>
                        <div className='slide-img__logo'></div>
                        <img className='slide-img__element' src={data.src} alt='brand-img'></img>
                    </div>
                    <p className='slide-content'></p>
                    <p className='slide-sign'></p>
                </div>
                <div className='dots'></div>
            </div>
    )
}

export default ImageSlider;