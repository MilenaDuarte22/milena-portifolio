import "../css/Footer.scss";

const Footer = () => {
  return (
    <section className="footer__section">
      <div className="footer__container">
        <div className="footer__description">
          <h1 className="footer__title">Milena Web Portfolio</h1>
          <p>
            Some nice things about me 🤠 <br /> I am trying hard.
          </p>
        </div>

        <div className="footer__column">
          <p className="footer__column-title">Navigation🗺️</p>
          <ul className="footer__list">
            <li>
              <a href="#home" className="footer__link">
                Home
              </a>
            </li>
            <li>
              <a href="#aboutme" className="footer__link">
                About me
              </a>
            </li>
            <li>
              <a href="#skills" className="footer__link">
                My skills
              </a>
            </li>
            <li>
              <a href="#portifolio" className="footer__link">
                Portfolio
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <p className="footer__column-title">Contact Me👋</p>
          <ul className="footer__list">
            <li>
              <a href="https://www.linkedin.com/in/milena-duarte-874b1a1b5/">
                <i className="uil uil-linkedin"></i> <span>Linkedin</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/MilenaDuarte22">
                <i className="uil uil-github"></i> <span>Github</span>
              </a>
            </li>
            <li>
              <a href="mailto:milena.duarte94@gmail.com">
                <i className="uil uil-envelope-edit"></i> <span>Email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <span className="footer__copy">&#169; Milena. All rights reserved</span>
    </section>
  );
};

export default Footer;
