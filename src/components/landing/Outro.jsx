import "../../css/landing/outro.css";

import AnimatedPage from "../animation/AnimatedPage";
import AnimatedItem from "../animation/AnimatedItem";

function Outro() {
  return (
    <section className="outro">
      <AnimatedPage className="outro__container">
        <AnimatedItem>
          <p className="outro__heading">
            Built for students living together.
          </p>
        </AnimatedItem>

        <AnimatedItem>
          <h2 className="outro__subtitle">
            A thoughtful portfolio project for making shared homes feel a
            little lighter.
          </h2>
        </AnimatedItem>

        <AnimatedItem>
          <a
            href="#home"
            className="outro__back-to-top"
            aria-label="Back to top"
          >
            ↑
          </a>
        </AnimatedItem>
      </AnimatedPage>
    </section>
  );
}

export default Outro;