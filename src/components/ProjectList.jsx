import "./ProjectList.css";
import Project from "./Project";
import projectArray from '../project.json'
import "./ProjectList.css"
import { useNavigate } from 'react-router-dom';

function ProjectList() {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate("/")
    }


    return (
        <>
            <div className="button-div">
                <i className="fa-solid fa-arrow-left-long hover-icon" onClick={handleBack} style={{ fontSize: '50px', color: '#FBA834', cursor: 'pointer' }}></i>
            </div>

            <h3 className="projects-title">Software Engineering Projects</h3>
            <br />
            <div className="project-list">
                {projectArray.map((project, id) => (
                    <Project project={project} key={project.id} />))}
            </div>

        </>
    )
}

export default ProjectList;