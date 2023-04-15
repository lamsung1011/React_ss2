import useFetch from "../customize/fetch";
import "./Blog.scss"
import { Link, useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from 'react';
import AddNewBlog from "./AddNewBlog";

const Blog = () => {

    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // let history = useHistory();

    const { data: dataBlogs, isLoading, isError }
        = useFetch('https://jsonplaceholder.typicode.com/posts', false);

    useEffect(() => {
        if (dataBlogs && dataBlogs.length > 0) {
            let newDataSimple = dataBlogs.slice(0, 9) // (start, end) lấy data từ 0 tới 9
            setNewData(newDataSimple);
        }

    }, [dataBlogs]);

    const handleAddNew = (blog) => {
        // history.push("/add-new-blog")
        let data = newData;
        newData.unshift(blog)

        setShow(false);
        setNewData(data);
    }

    const deletePost = (id) => {
        let data = newData;
        data = data.filter(item => item.id !== id)
        setNewData(data);
    }

    return (
        <>

            <Button variant="primary" className="my-4" onClick={handleShow}>
                + Add new Blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog handleAddNew={handleAddNew} />
                </Modal.Body>
                {/* <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer> */}
            </Modal>


            {/* <div><button className="btn-add-new" onClick={handleAddNew}></button></div> */}
            <div className="blogs-container">
                {isLoading === false && newData && newData.length > 0 && newData.map(item => {
                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title">
                                <span>{item.title}</span>
                                <span onClick={() => deletePost(item.id)}> x </span>
                            </div>
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


