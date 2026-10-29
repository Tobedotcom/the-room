import "../../css/landing/howitworks.css";

import StepCard from "./StepCard";

import AnimatedPage from "../animation/AnimatedPage";
import AnimatedItem from "../animation/AnimatedItem";

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works__container">
      <div className="how-it-works__header">
  <div className="how-it-works__heading-block">
    <p className="how-it-works__eyebrow">HOW IT WORKS</p>
    <h2 className="how-it-works__title">Start with a shared rhythm.</h2>
  </div>

  <p className="how-it-works__intro">
    Designed for the everyday stuff that is easy to forget and hard to
    coordinate.
  </p>
</div>

        <AnimatedPage>
          <div className="how-it-works__steps">
            <AnimatedItem>
              <StepCard
                number="01"
                title="Add your roommates"
                description="Invite the people who make your place feel like home."
              />
            </AnimatedItem>

            <AnimatedItem>
              <StepCard
                number="02"
                title="Set up your rhythm"
                description="Add chores, plan meals, and make responsibilities clear."
              />
            </AnimatedItem>

            <AnimatedItem>
              <StepCard
                number="03"
                title="Stay in sync"
                description="Check in, swap plans, and keep the household moving."
              />
            </AnimatedItem>
          </div>
        </AnimatedPage>
      </div>
    </section>
  );
}

export default HowItWorks;