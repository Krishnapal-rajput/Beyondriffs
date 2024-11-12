import logo from "../images/logo.png";
import "../static/Header.css";
export default function Header() {
  return (
    <header className="mainHeader">
      <div className="headerContainer">
        <div className="navConttainer">
          <nav>
            <section className="logoContainer">
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="logo" />
                </a>
              </div>
            </section>
            <section className="linksContainer">
              <div>
                <a href="#">
                  Courses <span className="caret">^</span>
                </a>
              </div>
              <div>
                <a href="#">
                  Certificates <span className="caret">^</span>
                </a>
              </div>
              <div>
                <a href="#">
                  Programs <span className="caret">^</span>
                </a>
              </div>
              <div>
                <a href="#">
                  About <span className="caret">^</span>
                </a>
              </div>
              <div>
                <a href="#">
                  Support <span className="caret">^</span>
                </a>
              </div>
              <div>
                <a href="#">
                  Hiring <span className="caret">^</span>
                </a>
              </div>
            </section>
            <section className="loginContainer">
              <div className="login">
                <a href="#">Login</a>
              </div>
              <div className="trial">
                <a href="#">Book a free trial</a>
              </div>
            </section>
          </nav>
        </div>
        <div className="headingAndPopUps">
          <div className="heading">
            <h1>
              Unlock your <span className="musical">Musical</span> Journey
            </h1>
            <p>
              We offers expert online courses in musical instruments, for
              beginners and seasoned musicians. Join our community and discover
              the magic of music.
            </p>
            <button className="btn1">
              <a href="#">Book free trial</a>
            </button>
            <button className="btn2">
              <a href="#">Teach with us</a>
            </button>
          </div>
          <div className="popups">hello</div>
        </div>
      </div>
    </header>
  );
}
