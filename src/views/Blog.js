import useFetch from "../customize/fetch";
import "./Blog.scss"
import { Link, useHistory } from "react-router-dom";

const Blog = () => {
    let history = useHistory();
    const { data: dataBlogs, isLoading, isError }
        = useFetch('https://jsonplaceholder.typicode.com/posts', false);

    let newData = []

    if (dataBlogs && dataBlogs.length > 0) {
        newData = dataBlogs.slice(0, 9) // (start, end)
        console.log('check data', newData);
    }

    const handleAddNew = () => {
        history.push("/add-new-blog")
    }
    return (
        <>
            <div><button className="btn-add-new" onClick={handleAddNew}>+ Add new Blog</button></div>
            <div className="blogs-container">
                {isLoading === false && newData && newData.length > 0 && newData.map(item => {
                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title"> {item.title}</div>
                            <div className="content">{item.body}</div>
                            <button>
                                <Link to={`/blog/${item.id}`}>View Detail</Link >
                            </button>
                        </div>
                    )
                })}
                {isLoading === true && <div>Loading data...</div>}
            </div>
        </>
    )
}

export default Blog;