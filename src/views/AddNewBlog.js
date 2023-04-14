import "./Blog.scss";
import { useState } from "react";

const AddNewBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmitButton = (event) => {
        // event.preventDefault(); // cmt code chuẩn html
        // if (title === ''|| title === null || title === undefined) {
        if (!title) {
            alert('empty title')
            return;
        }
        if (!content) {
            alert('empty content')
            return;
        }
        console.log('check data title: ', title, 'check data content: ', content);
    }
    return (
        <div className="add-new-container">

            {/* <form onSubmit={handleSubmitButton}> */}
            <div className="text-add-new">--- ADD NEW BLOG ---</div>
            <div className="input-data">
                <label>Title: </label>
                <input type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div className="input-data">
                <label>Content: </label>
                <input type="text"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                />
            </div>
            <button className="btn-add-new" onClick={handleSubmitButton}>Submit</button>
            {/* <button className="btn-add-new" type="submit">Submit</button> */}

            {/* </form> */}
        </div >
    )
}


export default AddNewBlog;