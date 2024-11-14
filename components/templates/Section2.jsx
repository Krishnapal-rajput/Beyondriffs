import img from "../images/section2img.png";
import "../static/Section2.css";

export default function Section2() {
  return (
    <section className="section2">
      <div className="section2content">
        <div className="section2leftimg">
          <img src={img} alt="img" />
        </div>
        <div className="section2rightcontent">
          <h2>
            Harmony Unleashed Our{" "}
            <span className="musical section2-boldtext">Musical Tale</span>
          </h2>
          <p className="section2text">
            Beyondriffs is more than an online music school, it’s a vibrant
            community where creativity thrives. Our team of expert instructors
            brings decades of experience, guiding you through melodies,
            harmonies, and rhythm. We’re not just teachers; we’re fellow
            travellers on this melodic journey.
          </p>
          <button className="section2btn">
            <a href="#">
              Explore our story <span className="section2caret">^</span>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
