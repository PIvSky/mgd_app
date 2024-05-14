import './Blog.scss';
import VectorBg from '../Assets/VectorBg/VectorBg';

const Blog = () => {

    const blogContent = [
        {
            src: '',
            title: 'Wywiad z podcastu',
            content: "Zapraszamy do wysłuchania wywiadu, który Krzysztof udzielił Agnieszce Bukowskiej i Krzyśkowi Rzymanowi z Coffeespots Polska, w którym opowiada o tym jak ważne są finanse w prowadzeniu kawiarni."
        },
        {
            src: '',
            title: 'Wywiad z podcastu',
            content: "Zapraszamy do wysłuchania wywiadu, który Krzysztof udzielił Agnieszce Bukowskiej i Krzyśkowi Rzymanowi z Coffeespots Polska, w którym opowiada o tym jak ważne są finanse w prowadzeniu kawiarni."
        }
    ]
    return (
        <div className='blog-container'>
            <div className='blog-content'>
                {blogContent.map((item, index) => (
                    <div className='video-container' key={index}>
                        <div className='video-frame'>{/* TODO: tutaj będzie zagnieżdżone video */}</div>
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