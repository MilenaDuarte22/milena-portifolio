import "../css/About_me.scss";
import img from "../assets/cv/profile.jpg";

export default function About_me() {
  return (
    <section className="aboutme__section" id="aboutme">
      <div className="aboutme__container">
        <div className="profile__picture">
          <img className="aboutme__profile" src={img}></img>
        </div>

        <div className="terminal__loader">
          <div className="terminal__header">
            <div className="terminal__title">📁AboutMe</div>
            <div className="terminal__controls">
              <div className="control close"></div>
              <div className="control minimize"></div>
              <div className="control maximize"></div>
            </div>
          </div>

          <div className="terminal__screen">
            <div className="terminal__text">
              <p className="terminal__name">MilenaDuarte ~ %</p>
              <br />
              <p>
                Hi, I’m a developer passionate about building my version of the
                digital world one character at a time. Designing and coding
                ideas from the ground up and creating beautiful and intuitive
                applications. Challenges excite me, I enjoy collaborating to
                create solutions that make a real-life impact. Whether it’s
                solving complex issues or brainstorming new ideas, I’m always
                ready to contribute and learn.
              </p>
              <br />
              <p className="terminal__name">contact me 👋</p>
              <br />
              <button className="terminal__btn">
                <a href="mailto:milena.duarte94@gmail.com">
                  {" "}
                  <i className="uil uil-envelope-edit"></i> <span>Email</span>
                </a>
              </button>

              <button className="terminal__btn">
                <a href="https://www.linkedin.com/in/milena-duarte-874b1a1b5/">
                  <i className="uil uil-linkedin"></i> <span>Linkedin</span>
                </a>
              </button>

              <button className="terminal__btn">
                <a href="https://github.com/MilenaDuarte22">
                  <i className="uil uil-github"></i> <span>Github</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
