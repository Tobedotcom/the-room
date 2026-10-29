import "../../css/landing/features.css";

import FeatureCard from "./FeatureCard";

import AnimatedPage from "../animation/AnimatedPage";
import AnimatedItem from "../animation/AnimatedItem";

function Features() {
  return (
    <section id="features" className="features">
      <AnimatedPage>
        <AnimatedItem>
          <p className="features__eyebrow">One place for the household</p>
          <h2 className="features__title">The little systems that make sharing easier.</h2>
        </AnimatedItem>

        <div className="features__grid">
          <AnimatedItem>
            <FeatureCard
              icon="01"
              title="Chores"
              description="Keep household responsibilities clear and fair with rotating assignments and simple completion tracking."
            />
          </AnimatedItem>

          <AnimatedItem>
            <FeatureCard
              icon="02"
              title="Meals"
              description="Plan the week together so everyone knows who's cooking and what's on the table."
            />
          </AnimatedItem>

          <AnimatedItem>
            <FeatureCard
              icon="03"
              title="Chat"
              description="Keep everyday roommate conversations in one shared space."
            />
          </AnimatedItem>
        </div>
      </AnimatedPage>
    </section>
  );
}

export default Features;
