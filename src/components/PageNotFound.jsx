import './PageNotFound.css'
import { useNavigate } from 'react-router-dom';
import React from 'react';
import errorImage from "../assets/404.jpg"

function PageNotFound () {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return(
        <>
            <div className="button-div">
                <i className="fa-solid fa-arrow-left-long hover-icon" onClick={handleBack} style={{ fontSize: '40px', color: '#FBA834', cursor: 'pointer' }}></i>
            </div>

            <div className="message">
                <img src={errorImage} alt="404" />
                <div className="message-text">
                    <h3>Oops, page not found! 😅</h3>
                    <p>If you’re here to view my project, please note that this project does not require login credentials. You can simply click on the live link to access it directly.</p>
                    <p>If this isn’t the reason, please check back again later.</p>
                </div>
            </div>
        
        </>
    )
}

export default PageNotFound