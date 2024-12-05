import "../css/Info.scss";
import cv from "../assets/cv/curriculo.png";

const Info = () => {
  return (
    <section className="info__section" id="skills">
      <div className="info__container">
        <div className="info__img">
          <img loading="lazy" src={cv} alt="Curriculum Vitae" />
        </div>

        <div className="info__text">
          <h2 className="info__title">
            {"{"} My technology skills <span>and interests</span>
            {"};"}
          </h2>

          <div className="info__boxes ">
            <div className="info__box">
              <i className="uil uil-edit"></i>
              <h3 className="info__boxtitle">Frontend</h3>
              <span className="info__text">
                I specialize in building responsive and optimized websites,
                ensuring user experiences across devices.
              </span>
            </div>
            <div className="info__box">
              <i className="uil uil-brackets-curly"></i>
              <h3 className="info__boxtitle">Backend</h3>
              <span className="info__text">
                Developing fast and efficient systems and APIs, providing robust
                solutions to support functionalities.
              </span>
            </div>
            <div className="info__box">
              <i className="uil uil-lightbulb"></i>
              <h3 className="info__boxtitle">Design</h3>
              <span className="info__text">
                I have created comprehensive design systems, blending aesthetics
                with functionality.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="info__contactme">
        <div className="info__contactbx">
          {"{"}
          <p className="info__titledw">
            Download the convencional <br />
            version of my cv 📄
          </p>

          <button href="mailto:milena.duarte94@gmail.com">
            <p>
              <i className="uil  uil-cloud-download"></i> <span>Download</span>
            </p>
          </button>

          {"}"}
        </div>
      </div>
    </section>
  );
};

export default Info;
