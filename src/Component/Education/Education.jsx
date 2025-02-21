import "./Education.css"
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
const Education = () => {
    return (
    <>
        <div className="educationCourses" id="education">
            <h4>Education and Courses</h4>
            <h1>Education & Courses</h1>
            <img className="eduBg" src="/portfolio/assets/image/edu-bg.svg" alt="" />
            <div className="container2">
            <div className="coursesSection">
                    <div className="card-2">
                        <div className="cardInfo">
                            <h2>Course: Internet Of Things</h2>
                            <h3>Syrian Computer Society | Damascus - Syria </h3>
                            <p>Is a network of connected devices that exchange data and enable remote control and information analysis.</p>
                            <div className="border"><div className="blueCircle"></div></div>
                        </div>
                    </div>
                    <div className="card-2">
                        <div className="cardInfo">
                            <h2>Course: Frontend Developer</h2>
                            <h3>Syrian Computer Society | Damascus - Syria </h3>
                            <p>Fully frontend web development training, HTML,CSS,JS including frontend libraries and frameworks.</p>
                            <div className="border"><div className="blueCircle"></div></div>
                        </div>
                    </div>
                    <div className="card-2">
                        <div className="cardInfo">
                            <h2>Course: Frontend Developer</h2>
                            <h3>Vica Web Solutions | Online </h3>
                            <p>Fully frontend web development training, HTML,CSS,JS including frontend libraries and frameworks.</p>
                            <div className="border"><div className="blueCircle"></div></div>
                        </div>
                    </div>
                    <div className="card-2">
                        <div className="cardInfo">
                            <h2>Course: Backend Developer</h2>
                            <h3>Vica Web Solutions | Online </h3>
                            <p>Fully backend web development training, Php, SQL, Git, GitHub including backend libraries and frameworks.</p>
                            <div className="border"><div className="blueCircle"></div></div>
                        </div>
                    </div>
                </div>
                <div className= "educationSection">
                    
                    <div className="card">
                        <h2>Diploma in Computer Engineering</h2>
                        <h3>Al Baath University | Homs - Syria</h3>
                        <p>Diploma Degree: Good </p>
                        <div className="border"><div className="blueCircle"></div></div>
                    </div>
                    <div className="card">
                        <h2>Bachelor in Information Technology </h2>
                        <h3>Syrian Virtual University | Damascus - Syria</h3>
                        <p>Bachelor Degree: Very Good</p>
                        <div className="border"><div className="blueCircle"></div></div>
                    </div>
                    <div className="card">
                        <h2>Master`s in Web Science </h2>
                        <h3>Syrian Virtual University | Damascus - Syria</h3>
                        <p>Graduation: Not yet</p>
                        <div className="border"><div className="blueCircle"></div></div>
                    </div>
                </div>
            </div>
            <button onClick={scrollToTop}><i className="fas fa-arrow-up"></i></button>
            <img className="eduBg-2" src="/portfolio/assets/image/edu-bg.svg" alt="" />
        </div>
        <div className="contactMe">
            <div className="tryMe">
            </div>
            <div className="tryMe2">
                    <div>
                        <h2>Try me out, risk free!</h2>
                        <p>If you’re not happy with the design after the first draft,</p>
                        <p>I’ll refund your deposit, <span>no questions asked.</span></p>
                    </div>
                    <a className="telegram" href="https://t.me/SallyAlrefaay" target="_blank">Contact Me <i className="fab fa-telegram"></i></a>
                </div>
        </div>
    </>
    )
}

export default Education;