import { useHistory } from "react-router-dom";


const NotFound = () => {

    let history = useHistory()
    const handleClickBtn = () => {
        history.push('/')
    }
    return (
        <div className="not-found-container">
            <h3>This Page Isn't Available</h3>
            <h4>Cút cmm đi</h4>
            <button className="btn btn-primary" onClick={handleClickBtn}>Go Back!</button>
        </div>
    )

}


export default NotFound;