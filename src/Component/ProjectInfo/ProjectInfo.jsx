import './ProjectInfo.css'
import { useParams } from 'react-router-dom';
import { details } from '../data';
import { Link } from 'react-router-dom';
import Rights from "../Rights/Rights";
import Navbar from '../NavBar/Navbar';
import OtherProjects from '../OtherProjects/OtherProjects';

const ProjectsInfo = () => {
    const { id } = useParams();
    const card = details.find(card => card.id === parseInt(id));
    const imgArray = card.imgs || [];
    const skillsarray = card.tools
    return (
    <>
        <Navbar />
        <div className= "card-id">
            <Link to={`/`} className='btn-arrow'><i className="fa-solid fa-arrow-left fa-flip-vertical fa-2xl"></i></Link>
            <div className={`  , Details , pt-128 `} >
                <div className='container'>
                    <div className='about-me'>
                        <div className='container-img'>
                            {imgArray.map((Element, index) => {
                                return (
                                    <img src={Element} alt="" key={index} />
                                )
                            })}
                        </div>
                    </div>
                    <div className='container-text'>
                        <div className="btn-des">
                            <div className="des">
                                <h1>{card.title}</h1>
                                <h3>{card.description}</h3>
                                <h3>Skills :</h3>
                            </div>
                            <div className="btn-demo">
                            <a href={card.demo} className="btn btn-primary"><img src="/images/Icon.png" alt="" /></a>
                            </div>
                        </div>
                        <div className='child'>
                            {skillsarray.map((element, index) => {
                                return (
                                    <div key={index}>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                                        <h4>{element}</h4>
                                    </div>
                                )
                            })}
                            <a href={card.urlgh} className="btn btn-primary">GitHub Repo</a>
                        </div>
                    </div>
                </div>
            </div>
            <OtherProjects />
            <Rights />
        </div>
        {/* <div className="projectsInformation">
            <div className="project">
                <div className='ProImg'>
                    <img src="/Portfolio2/assets/image/project-1.png" alt="" />
                </div>
                <div className="details">
                    <h2>K2skiing</h2>
                    <p>Basic Languages in this Project: HTML5, CSS.</p>
                    <a href="https://github.com/sallyalrefaay/K2skiing.git" target="_blank">GitHub Repo<button><i className="fas fa-plus"></i></button></a>
                    <a href="https://sallyalrefaay.github.io/K2skiing/" target="_blank">Project Demo<button><i className="fas fa-eye"></i></button></a>
                </div>
            </div>
            <div className="project">
                <div className="details">
                    <h2>Flora</h2>
                    <p>Basic Languages in this Project: HTML5, CSS.</p>
                    <a href="https://github.com/sallyalrefaay/Flora.git" target="_blank">GitHub Repo<button><i className="fas fa-plus"></i></button></a>
                    <a href="https://sallyalrefaay.github.io/Flora/" target="_blank">Project Demo<button><i className="fas fa-eye"></i></button></a>
                </div>
                <div className='ProImg'>
                    <img src="/Portfolio2/assets/image/project-2.png" alt="" />
                </div>
            </div>
            <div className="project">
            <div className='ProImg'>
                    <img src="/Portfolio2/assets/image/project-3.png" alt="" />
                </div>
                <div className="details">
                    <h2>Salla Store</h2>
                    <p>Basic Languages in this Project: HTML5, CSS.</p>
                    <a href="https://github.com/sallyalrefaay/Salla-store.git" target="_blank">GitHub Repo<button><i className="fas fa-plus"></i></button></a>
                    <a href="https://sallyalrefaay.github.io/Salla-store/" target="_blank">Project Demo<button><i className="fas fa-eye"></i></button></a>
                </div>
            </div>
            <div className="project">
                <div className="details">
                    <h2>Edujar</h2>
                    <p>Basic Languages in this Project: HTML5, CSS, Java Script.</p>
                    <p>Libraies: React.</p>
                    <a href="https://github.com/sallyalrefaay/Edujar.git" target="_blank">GitHub Repo<button><i className="fas fa-plus"></i></button></a>
                    <a href="https://sallyalrefaay.github.io/Edujar/" target="_blank">Project Demo<button><i className="fas fa-eye"></i></button></a>
                </div>
                <div className='ProImg'>
                    <img src="/Portfolio2/assets/image/project-4.png" alt="" />
                </div>
            </div>
            <div className="project">
            <div className='ProImg'>
                    <img src="/Portfolio2/assets/image/project-5.png" alt="" />
                </div>
                <div className="details">
                    <h2>DashStack</h2>
                    <p>Basic Languages in this Project: HTML5, CSS, Java Script.</p>
                    <p>Libraies: Tailwind & React.</p>
                    <a href="https://github.com/sallyalrefaay/DashStack.git" target="_blank">GitGub Repo<button><i className="fas fa-plus"></i></button></a>
                    <a href="https://sallyalrefaay.github.io/DashStack/" target="_blank">Project Demo<button><i className="fas fa-eye"></i></button></a>
                </div>
            </div>
            <div className="project">
                <div className="details">
                    <h2>Home Decoration</h2>
                    <p>Basic Languages in this Project: HTML5, CSS, Java Script.</p>
                    <p>Framework: BootStrabs</p>
                    <a href="https://github.com/sallyalrefaay/Home-Decoration.git" target="_blank">GitHub Repo<button><i className="fas fa-plus"></i></button></a>
                    <a href="https://sallyalrefaay.github.io/Home-Decoration/" target="_blank">Project Demo<button><i className="fas fa-eye"></i></button></a>
                </div>
                <div className='ProImg'>
                    <img src="/Portfolio2/assets/image/project-6.png" alt="" />
                </div>
            </div>
        </div> */}
    </>
    )
}
export default ProjectsInfo