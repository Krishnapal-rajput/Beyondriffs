import avatar1 from "../images/section1img1.png";
import avatar2 from "../images/section1img2.png";
import avatar3 from "../images/section1img3.png";

import "../static/Section1.css";

export default function Section1() {
  return (
    <section className="section1">
      <div className="section1container">
        <h2>Discover our Top Features</h2>
        <div className="featurescontainer">
          <div className="avatar1">
            <div className="avatarimg">
              <img src={avatar1} alt="avatar" />
            </div>
            <div className="avatartext">
              <h4>Flexible Timing</h4>
              <p>We offers expert online courses in musical instruments</p>
            </div>
          </div>
          <div className="avatar2">
            <div className="avatarimg">
              <img src={avatar2} alt="avatar" />
            </div>
            <div className="avatartext">
              <h4>Night Batches</h4>
              <p>We offers expert online courses in musical instruments</p>
            </div>
          </div>
          <div className="avatar3">
            <div className="avatarimg">
              <img src={avatar3} alt="avatar" />
            </div>
            <div className="avatartext">
              <h4>Professional Certificates</h4>
              <p>We offers expert online courses in musical instruments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
