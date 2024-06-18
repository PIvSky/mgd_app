import './Blog.scss';
import VectorBg from '../Assets/VectorBg/VectorBg';

const Blog = () => {

    const blogContent = [
        {
            src: 'https://youtu.be/-WiFdLw0Z9w?si=smHVTBQ0vdHDffIO',
            title: 'Kawiarnia to także Excel - Krzysztof Mika, Coffeedesk',
            content: "Zapraszamy do wysłuchania wywiadu, który Krzysztof udzielił Agnieszce Bukowskiej i Krzyśkowi Rzymanowi z Coffeespots Polska, w którym opowiada o tym jak ważne są finanse w prowadzeniu kawiarni."
        }
    ]
    return (
        <div className='blog-container'>
            <div className='blog-content'>
                {blogContent.map((item, index) => (
                    <div className='video-container' key={index}>
                        <div className='video-frame'>
                             <iframe 
                                src="https://www.youtube.com/embed/-WiFdLw0Z9w?si=smHVTBQ0vdHDffIO" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                loading="lazy"
                                allowfullscreen></iframe>
                        </div>
                        <h2 className='video-title'>{item.title}</h2>
                        <p className='video-content'>{item.content}</p>
                    </div>
                ))}
            </div>
            <VectorBg className='bg-vector' />
        </div>
    )
}

export default Blog;