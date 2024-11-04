import './Home.css'
import React from 'react';
import Navbar from './Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'devicon/devicon.min.css'
import 'font-awesome/css/font-awesome.min.css';


function Home() {

    return (
        <div className="main-page">

            <div className="about-norman">
                <img src="https://media.licdn.com/dms/image/v2/C5603AQFeqZBk1gqZPA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1627719716013?e=1735171200&v=beta&t=Wjj-k2Hjq9tR_3RfcgH6N7js-n-J9QOl5euuvef_rRQ" alt="Norman" />
                <h2>Norman Cheah</h2>
                <p>A learning specialist passionate about e-learning and digital development.</p>

                <div className="contact-links">

                    <div className="tooltip">
                        <a href="https://www.linkedin.com/in/norman-cheahhy/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin hover-icon" style={{ fontSize: '35px', color: 'white' }}></i>
                        </a>
                        <span className="tooltiptext">LinkedIn Profile</span>
                    </div>

                    <div className="tooltip">
                        <a href="https://github.com/normanKL" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github hover-icon" style={{ fontSize: '35px', color: 'white' }}></i>
                        </a>
                        <span className="tooltiptext">GitHub Profile</span>
                    </div>

                    <div className="tooltip">
                        <a href="mailto:cheahhonyuen@gmail.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa-regular fa-envelope hover-icon" style={{ fontSize: '35px', color: 'white' }}></i>
                        </a>
                        <span className="tooltiptext">Email Me</span>
                    </div>

                </div>

            </div>

            <div className="main-content">
                <div className="flex-container">

                    <div className="navbar">
                        <Navbar />
                    </div>

                    <div className="introduction">
                        <div className="content">
                            <div className="text">
                                <h3>Organization Learning Specialist </h3>
                                <p className='topic-details'>Learning specialist passionate about e-learning and digital development. Experienced in Instructor-Led Training (ILT) facilitation, now exploring programming and coding to enhance my skills and broaden my expertise.</p>
                                <div className="learning-experiences">
                                    <section>
                                        <h5>Learning:</h5>
                                        <h4>+20</h4>
                                        <p> years of experience</p>
                                    </section>
                                    <section>
                                        <h5>e-Learning Development:</h5>
                                        <h4>+4</h4>
                                        <p> years of experience</p>
                                    </section>
                                    <section>
                                        <h5>Software Engineering:</h5>
                                        <h4> &lt; 1</h4>
                                        <p> year of experience</p>
                                    </section>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="e-learning-development">
                        <div className="content">
                            <div className="text">
                                <h3>e-Learning & Digital Development</h3>
                                <p className='topic-details'>With over 20 years of experience in Instructor-Led Training (ILT) facilitation, I have spent the past 4 years venturing into e-learning development. My work includes managing group mandatory e-learning for 70+ countries, collaborating with vendors and subject matter experts, and developing country-specific e-learning modules using Articulate Storyline.
                                    Additionally, I partner with Learning Operations teams to ensure smooth deployment and execution.</p>
                                <div className="elearning-experiences">
                                    <section>
                                        <h5> Group Mandatory e-Learning Development:</h5>
                                        <h4>+6</h4>
                                        <p>projects for 70+ countries worldwide, collaborating with vendors.</p>
                                    </section>
                                    <section>
                                        <h5>Internal e-Learning Development:</h5>
                                        <h4>+6</h4>
                                        <p> projects and developed independently using Articulate Storyline</p>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="norman-coding">
                        <div className="content">
                            <div className="text">
                                <h3>Software Engineering Journey</h3>
                                <p className='topic-details'>I attended the General Assembly Software Engineering Bootcamp to learn programming and enhance my skills,
                                    broadening my expertise in ways that are critical for e-learning development. I believe this will also open up new opportunities in different fields, boosting my creativity and fostering innovation.</p>
                                <div className="programming">
                                    <h4>Skills</h4>
                                    <div className="skills-icons">
                                        <section className="icons">
                                            <i className="devicon-git-plain"></i>
                                            <p className="icon-text">Git</p>
                                        </section>
                                        <section className="icons">
                                            <i className="devicon-github-plain"></i>
                                            <p className="icon-text">Github</p>
                                        </section>
                                        <section className="icons">
                                            <i className="devicon-html5-plain"></i>
                                            <p className="icon-text">HTML</p>
                                        </section>
                                        <section className="icons">
                                            <i className="devicon-css3-plain"></i>
                                            <p className="icon-text">CSS</p>
                                        </section>
                                        <section className="icons">
                                            <i className="devicon-bulma-plain"></i>
                                            <p className="icon-text">Bulma</p>
                                        </section>
                                        <section className="icons">
                                            <i className="devicon-javascript-plain"></i>
                                            <p className="icon-text">JavaScript</p>
                                        </section>
                                        <section className="icons">
                                            <i className="devicon-typescript-plain"></i>
                                            <p className="icon-text">TypeScript</p>
                                        </section>
                                        <section className="icons">
                                            <i className="devicon-nodejs-plain"></i>
                                            <p className="icon-text">Node.js</p>
                                        </section>
                                        <section className="icons">
                                            <i className="devicon-python-plain"></i>
                                            <p className="icon-text">Python</p>
                                        </section>
                                        <section className="icons">
                                            <i className="devicon-react-original"></i>
                                            <p className="icon-text">React</p>
                                        </section>
                                        <section className="icons">
                                            <i className="devicon-django-plain"></i>
                                            <p className="icon-text">Django</p>
                                        </section>
                                        <section className="icons">
                                            <i className="devicon-postman-plain"></i>
                                            <p className="icon-text">Postman</p>
                                        </section>
                                        <section className="icons">
                                            <i className="devicon-npm-original-wordmark"></i>
                                            <p className="icon-text">NPM</p>
                                        </section>
                                        <section className="icons">
                                            <i className="devicon-express-original"></i>
                                            <p className="icon-text">Express</p>
                                        </section>
                                        <section className="icons">
                                            <i className="devicon-postgresql-plain"></i>
                                            <p className="icon-text">PostgreSQL</p>
                                        </section>
                                        <section className="icons">
                                            <i className="devicon-mongodb-plain"></i>
                                            <p className="icon-text">MongoDB</p>
                                        </section>
                                        <section className="icons">
                                            <i className="devicon-heroku-plain"></i>
                                            <p className="icon-text">Heroku</p>
                                        </section>
                                        <section className="icons">
                                            <i className="devicon-netlify-plain"></i>
                                            <p className="icon-text">Netlify</p>
                                        </section>
                                        <section className="icons">
                                            <i className="devicon-visualstudio-plain"></i>
                                            <p className="icon-text">VS Code</p>
                                        </section>
                                        <section className="icons">
                                            <i className="devicon-trello-plain"></i>
                                            <p className="icon-text">Trello</p>
                                        </section>
                                        <section className="icons">
                                            <i className="devicon-slack-plain"></i>
                                            <p className="icon-text">Slack</p>
                                        </section>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>


                    <div className="norman-projects">
                        <div className="content">
                            <div className="text">
                                <h3>Software Engineering Projects</h3>
                                <div className="my-projects">
                                    <p className='topic-details'>I’ve built several projects during my Software Engineering Bootcamp and other courses, and I’m always working on new ones in my free time. I love experimenting with my own design ideas to keep sharpening my skills and stay ready for whatever new challenges come my way in this ever-changing world.</p>
                                    <a href="/projects" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-solid fa-arrow-up-right-from-square hover-icon" style={{ fontSize: '25px', color: '#FBA834' }}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="norman-experiences">
                        <div className="content">
                            <div className="text">
                                <h3>Career Journey & Experiences</h3>
                                <div className="my-career">
                                    <p className='topic-details'>With extensive experience in Learning and Development across financial services, hospitality, and manufacturing, I advanced from Training Coordinator to Instructor, then to Head of the Learning Team, and now serve as an E-Learning Development Specialist. 
                                        I create impactful content on key topics like risk management and code of conduct, establish learning governance frameworks, and design engaging, human-centered learning experiences. My expertise spans the entire process—from needs assessment to implementation—blending project management and instructional design to deliver solutions that drive meaningful, lasting impact.</p>
                                    <a href="/experience" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-solid fa-arrow-up-right-from-square hover-icon" style={{ fontSize: '25px', color: '#FBA834' }}></i>
                                    </a>
                                </div>
                                <div className="career-experiences">
                                    <section>
                                        <h5>Financial Institutions:</h5>
                                        <h4>+12</h4>
                                        <p> years of working experience</p>
                                    </section>
                                    <section>
                                        <h5>Manufacturing:</h5>
                                        <h4>+5</h4>
                                        <p> years of working experience</p>
                                    </section>
                                    <section>
                                        <h5>Hospitality:</h5>
                                        <h4>+3</h4>
                                        <p> years of working experience</p>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="norman-location">
                        <div className="content">
                            <div className="text">
                                <h3>Location and Job Preferences</h3>
                                <p className='topic-details'>I live in the beautiful city of <strong>Kuala Lumpur, Malaysia</strong>. For onsite and hybrid job opportunities, my preference is <strong>within the Klang Valley</strong>. However, for fully remote job opportunities, location is not an issue.</p>
                                <p className='topic-details'>I am open to any job opportunities that could broaden my experience and skills, regardless of whether they are full-time, part-time, contract, or project-based.</p>
                            </div>
                        </div>
                    </div>

                    <div className="footer-space" style={{ marginBottom: '50px' }}></div>

                </div>



            </div>

        </div>
    )
}

export default Home;