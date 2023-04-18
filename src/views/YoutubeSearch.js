import './Blog.scss';
import axios from "axios";
import { useState, useEffect } from "react";
import moment from 'moment/moment';
const YoutubeSearch = () => {

    const [video, setVideo] = useState([]);
    const [query, setQuery] = useState([]);
    useEffect(() => {

    }, [])

    const handleSearchYoutube = async () => {

        let res = await axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params": {
                'part': 'snippet',
                'maxResults': '20',
                'key': 'AIzaSyDaoIn3xPryb-mWdAHBFMNdv6QEZEhThpk',
                'type': 'video',
                'q': query
            }
        })
        if (res && res.data && res.data.items) {
            let raw = res.data.items;
            let result = []
            if (raw && raw.length > 0) {
                raw.map(item => {
                    let obj = {};
                    obj.id = item.id.videoId
                    obj.title = item.snippet.title;
                    obj.createdAt = item.snippet.publishedAt;
                    obj.author = item.snippet.channelTitle;
                    obj.description = item.snippet.description;

                    result.push(obj)
                })
            }
            setVideo(result)
        }

        console.log('check res youtube:', res);
    }


    return (
        <div className="youtube-search-container">
            <div className="yt-search" ></div>
            <input type="text" placeholder='Search'
                value={query}
                onChange={(event) => setQuery(event.target.value)} />
            <button onClick={handleSearchYoutube}>Search</button>

            {video && video.length > 0 &&
                video.map(item => {
                    return (
                        <div className='yt-result' key={item.id}>
                            <div className='left'>
                                <iframe className='iframe-yt'
                                    src={`https://www.youtube.com/embed/${item.id}`}
                                    title="Đen - Đưa Nhau Đi Trốn ft. Linh Cáo [M/V]"
                                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                            </div>
                            <div className='right'>

                                <div className='title'>
                                    {item.title}                                </div>
                                <div className='created-at'>
                                    Created at: {moment(item.createdAt).format('DD-MM-YYYY HH:mm:ss A')}
                                </div>
                                <div className='author'>
                                    Author: {item.author}
                                </div>
                                <div className='description'>
                                    {item.description}
                                </div>

                            </div>

                        </div>
                    )
                })}

        </div >
    )
}

export default YoutubeSearch;



// {
//     "kind": "youtube#searchListResponse",
//         "etag": "QG0HW9gx5Gr6YAKUdK9V5dcGa3s",
//             "nextPageToken": "CAUQAA",
//                 "regionCode": "VN",
//                     "pageInfo": {
//         "totalResults": 729,
//             "resultsPerPage": 5
//     },
//     "items": [
//         {
//             "kind": "youtube#searchResult",
//             "etag": "uO6THirFvWiJXrBEkZqQuVRvC_8",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "ncV0OEa9GoQ"
//             },
//             "snippet": {
//                 "publishedAt": "2022-12-24T12:00:10Z",
//                 "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//                 "title": "#106 [NEW] - Deploy App React.JS với Vercel | Khóa Học SERN - SQL, Express, React &amp; Node.js",
//                 "description": "Bạn nào muốn donate hay mua cho mình cốc cà phê, cái pizza hay chỉ là gói mì tôm hảo hảo, dùng link này nhé: ...",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/ncV0OEa9GoQ/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/ncV0OEa9GoQ/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/ncV0OEa9GoQ/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "Hỏi Dân IT",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2022-12-24T12:00:10Z"
//             }
//         },
//         {
//             "kind": "youtube#searchResult",
//             "etag": "uxKiBV-xqB1Pk-uyEd-ai8HkJaU",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "XGsvcFymlqI"
//             },
//             "snippet": {
//                 "publishedAt": "2022-02-21T11:00:16Z",
//                 "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//                 "title": "DEPLOY ỨNG DỤNG REACT LÊN HOST THỰC TẾ SIÊU DỄ &amp; MIỄN PHÍ - REACT.JS SIÊU EASY",
//                 "description": "Trong video này, mình sẽ cùng các bạn, chúng ta sẽ deploy ứng dụng React.JS tạo bởi Create-react-app lên host thực tế, cụ thể ...",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/XGsvcFymlqI/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/XGsvcFymlqI/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/XGsvcFymlqI/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "Hỏi Dân IT",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2022-02-21T11:00:16Z"
//             }
//         },
//         {
//             "kind": "youtube#searchResult",
//             "etag": "SVo8LRO24BGpLPUcgF78X5Mdr_Y",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "NkulG9hH2LI"
//             },
//             "snippet": {
//                 "publishedAt": "2022-12-23T12:00:08Z",
//                 "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//                 "title": "#105 [NEW] - Deploy app Node.JS với Render | Khóa Học SERN - SQL, Express, React &amp; Node.js",
//                 "description": "Link file Excel: ...",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/NkulG9hH2LI/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/NkulG9hH2LI/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/NkulG9hH2LI/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "Hỏi Dân IT",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2022-12-23T12:00:08Z"
//             }
//         },
//         {
//             "kind": "youtube#searchResult",
//             "etag": "-Zeqyv0nQa0hKYxdVFgb3bXLP0I",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "8JkHV2GZL0M"
//             },
//             "snippet": {
//                 "publishedAt": "2022-07-26T11:15:14Z",
//                 "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//                 "title": "Học React.JS Cơ Bản Trong 30 Phút (Update với React 18 năm 2022) | React Siêu Dễ Cho Beginner",
//                 "description": "Trong video này, chúng ta sẽ cùng setup và thực hành dự án React & thực hành ứng dụng Todo List được xây dựng từ đầu.",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/8JkHV2GZL0M/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/8JkHV2GZL0M/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/8JkHV2GZL0M/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "Hỏi Dân IT",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2022-07-26T11:15:14Z"
//             }
//         },
//         {
//             "kind": "youtube#searchResult",
//             "etag": "w7OMeBD2KeTtLf5NHizECkWmgmE",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "V1JONxue4fA"
//             },
//             "snippet": {
//                 "publishedAt": "2022-02-20T12:30:12Z",
//                 "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//                 "title": "#01 React Super Fast Với Vite | Khóa Học React Advanced Guides",
//                 "description": "Trong video này, chúng ta sẽ cùng nhau: ✓ Tạo Ứng Dụng React.JS Với Vite (công cụ dịch code siêu nhanh, đối thủ cạnh tranh ...",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/V1JONxue4fA/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/V1JONxue4fA/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/V1JONxue4fA/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "Hỏi Dân IT",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2022-02-20T12:30:12Z"
//             }
//         }
//     ]
// }
