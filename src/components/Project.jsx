import React, { useState } from 'react';
import "./Project.css"
import "devicon/devicon.min.css";

function Project(props) {

    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails)
    };


    return (
        <>
            <div className="my-project">
                <div className="project-details" onClick={toggleDetails}>
                    {showDetails ? (
                        <div className='details-box'>
                            <p className="details-box-title">{props.project.title}</p>
                            <div>
                                <h4>Introduction:</h4>
                                {props.project.description.map((line, index) => (
                                    <p key={index} className="details-box-description">{line}</p>
                                ))}
                            </div>
                            <div>
                                <h4>Features:</h4>
                                {props.project.note.map((line, index) => (
                                    <p key={index} className="details-box-description">{line}</p>
                                ))}
                            </div>
                            <div className="devicon">
                                <h4>Technologies used:</h4>
                                <section className="devicon-list">
                                    {props.project.devicon.map((iconClass, index) => (
                                        <i key={index} className={iconClass}></i>
                                    ))}
                                </section>
                            </div>

                            <div className="live-site">
                                <p>Explore the live application <a href={props.project.live} target="_blank" rel="noopener noreferrer" className='live-link' onClick={(e) => e.stopPropagation()}>HERE</a>.</p>
                                <p>
                                    If applicable, you can find the login credentials in the README file{" "}
                                    {props.project.ReadMe ? (
                                        <a
                                            href={props.project.ReadMe}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="live-link"
                                            onClick={(e) => e.stopPropagation()}>
                                            HERE
                                        </a>
                                    ) : (
                                        <a
                                            href="/not-found"
                                            className="live-link"
                                            onClick={(e) => e.stopPropagation()}>
                                            HERE
                                        </a>
                                    )}.
                                </p>
                            </div>

                        </div>
                    ) : (
                        <div className="img-box">
                            <img className="project-img" src={props.project.img} alt={props.project.title} />
                            <p className="img-details-1">{props.project.title}</p>
                            <p className="img-details-2">Created on: {props.project.date}</p>
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}

export default Project; 