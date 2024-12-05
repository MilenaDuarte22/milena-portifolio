import "../css/Work.scss";
import PropTypes from "prop-types";
import img1 from "../assets/constants/image1.png";
import img2 from "../assets/constants/image2.png";
import img3 from "../assets/constants/image3.png";

const Work = (props) => {
  const images = {
    "image1.png": img1,
    "image2.png": img2,
    "image3.png": img3,
  };

  return (
    <div className="work__item">
      <div className="work__image">
        <img src={images[props.img]} alt="Cover" />
      </div>

      <div className="tecnologies__tags">
        <p className="work__tag">{props.tag}</p>
      </div>
      <h2 className="works__title">{props.title}</h2>

      <div className="work__icons">
        <button className="workbutton_icons">
          <a href="">
            <i className="uil uil-github-alt"></i> <span>code</span>
          </a>
        </button>
        <button className="workbutton_icons">
          <a href="">
            <i className="uil uil-eye"></i> <span>view</span>
          </a>
        </button>
      </div>

      <div className="work__content">
        <p className="work__descript">{props.descript}</p>
        <br />
        <p className="tecnologies">Technologies</p>
        <div className="categories">
          {props.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

Work.propTypes = {
  title: PropTypes.string.isRequired,
  descript: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Work;
