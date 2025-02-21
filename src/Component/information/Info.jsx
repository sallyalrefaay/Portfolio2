import { useEffect, useState } from 'react';
import './Info.css';

const Info = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div id="home">
    <div className="container-1">
      <div className={`desc ${isVisible ? 'visible' : ''}`}>
          <h2><span>HEY!</span> I’m Sally, Frontend Developer</h2>
          <p>I create professional web application for business, companies, skilled in leadership, seeking to leverage solid development skills with focus on collaboration, communication and passion.</p>
          <div><button><a download href="/portfolio/assets/resume.pdf">Download Cv <i className="fas fa-download"></i></a></button></div>
      </div>
      <div className="myImg">
        <img src="/portfolio/assets/image/Home_art.png" alt="" />
        <div className="blue"></div>
        <div className="blueCircle"></div>
        <div className="purple"></div>
        <div className="purpleCircle"></div>
      </div>
  </div>
  </div>
  );
};

export default Info;