import { useParams } from "react-router-dom";

const DetailBlog = () => {
    let { id } = useParams();
    return (
        <h1>Detail with ID = {id}</h1>
    )
}


export default DetailBlog;