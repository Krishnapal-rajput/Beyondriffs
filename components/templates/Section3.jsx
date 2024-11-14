import "../static/Section3.css";

export default function Section3() {
  return (
    <section className="section3">
      <div className="section3container">
        <div className="section3leftsection">
          <h3>Start learning Music Online</h3>
          <p className="normalText">In 3 Simple steps</p>
          <div className="freeTrial">
            <a href="#">Book free trial</a>
          </div>
        </div>
        <div className="section3rightsection">
          <div className="steps">
            <div className="step1">
              <div className="num1"><span className="number">01</span></div>
              <h4 className="stepsheading">Trial session</h4>
              <p className="normalText small">
                Book a Free Trial we contact you soon
              </p>
            </div>
          </div>
          <div className="steps">
            <div className="step2">
              <div className="num2"><span className="number">02</span></div>
              <h4 className="stepsheading">Experience</h4>
              <p className="normalText small">Experience our technology with tutor</p>
            </div>
          </div>
          <div className="steps">
            <div className="step3">
              <div className="num3"><span className="number">03</span></div>
              <h4 className="stepsheading">Start</h4>
              <p className="normalText small">
                Liked the experience? Upgrade and begin
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
