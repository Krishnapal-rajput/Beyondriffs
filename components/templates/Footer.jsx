import logo from "../images/logo-02.png";
import "../static/Footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <header className="footerHead">
          <h3>Turn your Passion into Reality</h3>
          <h3 className="bold">Let's Begin!</h3>
          <div className="freeTrial">
            <a href="#">Book free trial</a>
          </div>
        </header>
        <main className="footerMain">
          <div className="leftSection">
            <h2>Explore Our Melodic Courses!</h2>
            <p className="normalText">
              Discover a symphony of online music classes tailored to your
              rhythm.
            </p>
          </div>
          <div className="rightSection">
            <div className="bold">Course</div>
            <div className="bold">Blog</div>
            <div className="bold">Support</div>
            <div className="bold">Legal</div>
            <div className="normalText">
              <a href="#">Instruments</a>
            </div>
            <div className="normalText">
              <a href="#">Post</a>
            </div>
            <div className="normalText">
              <a href="#">Contact us</a>
            </div>
            <div className="normalText">
              <a href="#">Privacy</a>
            </div>
            <div className="normalText">
              <a href="#">Vocals</a>
            </div>
            <div className="normalText">
              <a href="#">Tips and tricks</a>
            </div>
            <div className="normalText">
              <a href="#">FAQ</a>
            </div>
            <div className="normalText">
              <a href="#">Policy</a>
            </div>
            <div className="normalText">
              <a href="#">Certificates</a>
            </div>
          </div>
        </main>
        <div className="divider"></div>
        <footer className="footerFooter">
          <div className="footerLogo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="socialIcons">
            <div className="twitter">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="linkedin">
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="gmail">
              <a href="#">
                <i className="fab fa-google"></i>
              </a>
            </div>
            <div className="instagram">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </footer>
  );
}
