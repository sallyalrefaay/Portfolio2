import { Link } from 'react-router-dom';
const Cards = ({ card }) => {
    return (
        <>
            {card.map((element, index) => {
                return (
                    <div className="portfolio-item" key={index}>
                        <div className="portfolio-image">
                            <img src={element.img} alt="" />
                        </div>
                        <div className="item-cont">
                            <div className="item-title">
                                <h3>{element.title}</h3>
                                <p> {element.tools.join(", ")}</p>
                            </div>
                            <Link to={`/portfolio/${element.id}`} className="btn"><i className="fa-solid fa-up-right-from-square"></i></Link>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Cards; 