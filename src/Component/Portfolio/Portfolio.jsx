import "./Portfolio.css"
import { details } from '../data'
import Cards from "./Cards";

export default function Portfolio() {
    return (
    <div className="portfolio" id="portfolio">
        <h3>Portfolio</h3>
        <div className="portfolioNav">
            <h1>My Creative Works Latest <span>Projects</span></h1>
            <button><a href="https://github.com/sallyalrefaay/" target="_blank">View GitHub <i className="fa-solid fa-up-right-from-square"></i></a></button>
            <div className=" portfolio-container">
            <Cards card={details} />
            </div>
        </div>
        {/* <div className="projects">
            <div className="project pro-1">
                <div className="bgColor">
                    <h2>K2skiing</h2>
                    <Link to= '/Project'>
                    <div>
                        <button><i className="fa-solid fa-up-right-from-square"></i></button><span>More Details</span>
                        <div><a href="https://sallyalrefaay.github.io/K2skiing/" target="_blank"><button><i className="fas fa-eye"></i></button>Project Demo</a></div>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="project pro-2">
                <div className="bgColor">
                    <h2>Flora</h2>
                    <Link to= '/Project'>
                    <div>
                        <button><i className="fa-solid fa-up-right-from-square"></i></button> <span>More Details</span>
                        <div><a href="https://sallyalrefaay.github.io/Flora/" target="_blank"><button><i className="fas fa-eye"></i></button>Project Demo</a></div>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="project pro-3">
                <div className="bgColor">
                    <h2>Salla Store</h2>
                    <Link to= '/Project'>
                    <div>
                        <button><i className="fa-solid fa-up-right-from-square"></i></button><span>More Details</span>
                        <div><a href="https://sallyalrefaay.github.io/Salla-store/" target="_blank"><button><i className="fas fa-eye"></i></button>Project Demo</a></div>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="project pro-4">
                <div className="bgColor">
                    <h2>Edujar</h2>
                    <Link to= '/Project'>
                    <div>
                        <button><i className="fa-solid fa-up-right-from-square"></i></button><span>More Details</span>
                        <div><a href="https://sallyalrefaay.github.io/Edujar/" target="_blank"><button><i className="fas fa-eye"></i></button>Project Demo</a></div>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="project pro-5">
                <div className="bgColor">
                    <h2>DashStack</h2>
                    <Link to= '/Project'>
                    <div>
                        <button><i className="fa-solid fa-up-right-from-square"></i></button><span>More Details</span>
                        <div><a href="https://sallyalrefaay.github.io/DashStack/" target="_blank"><button><i className="fas fa-eye"></i></button>Project Demo</a></div>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="project pro-6">
                <div className="bgColor">
                    <h2>Home Decoration</h2>
                    <Link to= '/Project'>
                    <div>
                        <button><i className="fa-solid fa-up-right-from-square"></i></button><span>More Details</span>
                        <div><a href="https://sallyalrefaay.github.io/Home-Decoration/" target="_blank"><button><i className="fas fa-eye"></i></button>Project Demo</a></div>
                    </div>
                    </Link>
                </div>
            </div>
        </div> */}
    </div>
    )
}
