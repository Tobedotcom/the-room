import "../../css/landing/hero.css";

import AnimatedPage from "../animation/AnimatedPage";
import AnimatedItem from "../animation/AnimatedItem";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <AnimatedPage className="hero__content">
          <AnimatedItem>
            <p className="hero__eyebrow">A CALMER, SHARED HOME</p>
          </AnimatedItem>

          <AnimatedItem>
            <h1 className="hero__title">
              Less roommate friction.
              <br />
              More living together.
            </h1>
          </AnimatedItem>

          <AnimatedItem>
            <p className="hero__subtitle">
              The simple household hub for fair chores, shared meals, and the
              everyday messages that keep a home running smoothly.
            </p>
          </AnimatedItem>

          <AnimatedItem>
            <div className="hero__actions">
              <button type="button" className="hero__cta">
                Get Started
              </button>

              <a href="#how-it-works" className="hero__secondary-link">
                See How It Works
              </a>
            </div>
          </AnimatedItem>
        </AnimatedPage>

        <AnimatedPage className="hero__preview">
          <AnimatedItem>
            <div className="hero__preview-card">
              <div className="hero__preview-header">
                <p className="hero__preview-eyebrow">
                  THIS WEEK AT HOME
                </p>

                <span className="hero__preview-badge">
                  On track
                </span>
              </div>

              <span className="hero__preview-subtitle">
                A little from everyone
              </span>

              <ul className="hero__preview-list">
                <li className="hero__preview-item hero__preview-item--highlight">
                  <span className="hero__preview-avatar hero__preview-avatar--maya">
                    M
                  </span>

                  <span className="hero__preview-text">
                    <strong>Amanwa</strong> · Dinner tonight
                    <span className="hero__preview-detail">
                      Fufu and soup
                    </span>
                  </span>

                  <span
                    className="hero__preview-icon"
                    aria-hidden="true"
                  >
                    🍴
                  </span>
                </li>

                <li className="hero__preview-item">
                  <span className="hero__preview-avatar hero__preview-avatar--jordan">
                    J
                  </span>

                  <span className="hero__preview-text">
                    <strong>Bosco</strong> · Clean kitchen
                    <span className="hero__preview-detail">
                      Due tomorrow
                    </span>
                  </span>

                  <span
                    className="hero__preview-icon"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                </li>

                <li className="hero__preview-item">
                  <span className="hero__preview-avatar hero__preview-avatar--priya">
                    P
                  </span>

                  <span className="hero__preview-text">
                    <strong>Henry</strong> · House chat
                    <span className="hero__preview-detail">
                      "make we hide Kelechi's thumbsleeves"
                    </span>
                  </span>

                  <span
                    className="hero__preview-icon"
                    aria-hidden="true"
                  >
                    💬
                  </span>
                </li>
              </ul>
            </div>
          </AnimatedItem>
        </AnimatedPage>
      </div>
    </section>
  );
}

export default Hero;