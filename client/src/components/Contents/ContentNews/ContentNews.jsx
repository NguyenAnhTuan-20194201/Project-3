import { useEffect, useState } from 'react'
import axios from 'axios'
import './ContentNews.css'

const ContentNews = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchData() {
          const result = await axios.get('https://project20221-team2-wordcup.onrender.com/api/news');
          console.log(result.data)
          setData(result.data);
        }
        fetchData();
    }, []);
    return(
        <div className='cNews'>
            {data.map(element => (
                element.items.map((item) => (
                    <div className='cNewsDisplay'>
                        <div>
                            <a className='cNewsLink' key={element._id} href={item.PageUrl}>
                                <div className='cNewsTitle'>{item.title}</div>
                            </a>
                            <a href="https://www.google.com/search?q=bongdaplus&rlz=1C1CHBD_viVN980VN980&oq=bongda&aqs=chrome.5.69i60j69i57j0i131i433i512l4j0i131i433j69i60.7809j0j7&sourceid=chrome&ie=UTF-8">
                                <div className='cNewsTime'>Bongdaplus - {item.dateDis} ngày trước</div>
                            </a>
                        </div>
                        <a className='cNewsLink' key={element._id} href={item.PageUrl}>
                            <img className='cNewsImg' src={item.imageUrl} alt="anh" />
                        </a>
                    </div>
                ))
            ))}
        </div>
    )
}

export default ContentNews