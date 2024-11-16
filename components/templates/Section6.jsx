import img1 from "../images/section6frame1.png";
import img2 from "../images/section6frame2.png";
import img3 from "../images/section6frame3.png";
import img4 from "../images/section6frame4.png";

import "../static/Section6.css";
export default function Section6() {
  return (
    <section className="section6">
      <div className="section6container">
        <div className="benefits">
          <div className="benefit">
            <img src={img1} alt="benefits" />
            <p>Internationally Recognized</p>
          </div>
          <div className="benefit">
            <img src={img2} alt="benefits" />
            <p>Milestones in your musical journey</p>
          </div>
          <div className="benefit">
            <img src={img3} alt="benefits" />
            <p>Build Rigour and practice dicipline</p>
          </div>
          <div className="benefit">
            <img src={img4} alt="benefits" />
            <p>Removes Performance Fear</p>
          </div>
        </div>
      </div>
    </section>
  );
}
