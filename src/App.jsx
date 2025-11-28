import Header from "./components/Header";
import Tablist from "./components/Tablist";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* Hero section */}
        <section className="hero">
          <div className="hero__wrapper">
            <div aria-hidden="true" className="hero__image" />
            <div className="hero__content">
              <h1 className="hero__title">
                #1{" "}
                <span className="text-[var(--clr-accent-400)]">Super App</span>{" "}
                of the Country
              </h1>
              <p className="hero__subtitle">
                One app, all services at your fingertip
              </p>
              <div className="hero__btns">
                <button className="btn | hero__btn--pathao">
                  Earn with Pathao
                </button>
                <button
                  className="btn | hero__btn--download"
                  data-type="inverse"
                >
                  Download App
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* === *** === */}

        {/* Facts section */}
        <section className="facts wrapper autoShow">
          <div className="facts__body">
            <p>15 Million+</p>
            <p>App downloads</p>
          </div>
          <div className="facts__body">
            <p>350 Million+</p>
            <p>Trips/Order served</p>
          </div>
          <div className="facts__body">
            <p>10 Million+</p>
            <p>Lives impacted</p>
          </div>
        </section>
        {/* === *** === */}

        {/* Pathao platform section */}
        <section className="pathao-platform wrapper">
          <h1 className="pathao-platform__title">The Pathao platform</h1>
          <p className="pathao-platform__subtitle">
            Here's everything pathao offers just for you
          </p>
          <Tablist />
        </section>
        {/* === *** === */}

        {/* Safe platform section */}
        <section className="safe-platform wrapper">
          <h1 className="safe-platform__title">
            Every Steps of the Way #HereWithYou!
          </h1>
          <ul role="list" className="safe-platform__image-list">
            <li className="safe-platform__row">
              <img src="images/sp-1.jpg" />
            </li>
            <li className="safe-platform__row">
              <img src="images/sp-2.jpg" />
            </li>
            <li className="safe-platform__row">
              <img src="images/sp-3.jpg" />
            </li>
            <li className="safe-platform__row">
              <img src="images/sp-4.jpg" />
            </li>
            <li className="safe-platform__row">
              <img src="images/sp-5.jpg" />
            </li>
            <li className="safe-platform__row">
              <img src="images/sp-6.jpg" />
            </li>
          </ul>
          <img className="insure-image" src="images/insure-badge.png" />
        </section>

        <section className="safe-platform__content wrapper even-columns">
          <div className="flow">
            <h3>The Safest Platform</h3>
            <p>
              We care about your safety. And to ensure it, we’ve introduced
              safety coverage for all of our users, rides & captains. Your
              safety is our first priority.
            </p>
            <a href="#" className="text-[var(--clr-accent-400)] font-bold">
              Read more
            </a>
          </div>
          <div className="flow">
            <h3>We Care About You</h3>
            <p>
              We believe in providing safety and support. Pathao is the only
              platform with a rapid response team, call centre support, safety
              coverage, live location share, and more! #HereWithYou every step
              of the way.
            </p>
            <a href="#" className="text-[var(--clr-accent-400)] font-bold">
              Read more
            </a>
          </div>
        </section>
        {/* ==== *** ==== */}

        <hr className="border border-solid border-slate-300 mt-10 mb-2" />

        {/* Earn section */}
        <section className="earn autoShow">
          <div className="wrapper flow">
            <h1>Earn with your car, bike or bicycle</h1>
            <p>
              Become a captain, rider or foodman on the highest earning
              platform!
            </p>
            <button className="btn">Start Earning</button>
          </div>
          <div className="earn__illustration" aria-hidden="true" />
        </section>
        {/* ==== *** ==== */}

        {/* Headline section */}
        <section className="headline">
          <div className="wrapper">
            <h1 className="headline__title">Making headlines</h1>
            <ul role="list" className="headline__image-list">
              <li className="headline__row">
                <img src="images/forbes.png" />
              </li>
              <li className="headline__row">
                <img src="images/business-standard.png" />
              </li>
              <li className="headline__row">
                <img src="images/rest-of-world.png" />
              </li>
              <li className="headline__row">
                <img src="images/startup.png" />
              </li>
            </ul>
            <div className="headline__content">
              <p className="text-lg">
                Driving Change Across Borders: Pathao is Reimagining Lifestyles
                in South Asia
              </p>
              <p className="text-xl">
                Pathao is the biggest ride-hailing company in Bangladesh and
                Nepal. Few startups in South Asia have managed to expand
                regionally, let alone also lead those markets.
              </p>
              <a
                href="#"
                className="text-[var(--clr-accent-400)] text-lg font-semibold"
              >
                View article
              </a>
            </div>
          </div>
        </section>
        {/* ==== *** ==== */}

        {/* Blog section */}
        <section className="blog wrapper">
          <div className="blog__header">
            <h1>From the Blog</h1>
            <button className="btn" data-type="inverse">
              Go to blog
            </button>
          </div>
          <div className="blog__cards">
            <div className="blog__card">
              <img className="card__image" src="images/card1.jpg" />
              <div className="card__content">
                <p className="card__text-mute">Product updates - 2025</p>
                <h4 className="card__text-heading">
                  Waled Karim is the author of this webpage
                </h4>
              </div>
            </div>
            <div className="blog__card">
              <img className="card__image" src="images/card2.png" />
              <div className="card__content">
                <p className="card__text-mute">Product updates - 2025</p>
                <h4 className="card__text-heading">
                  Bangladesh’s Number 1 Super App, Pathao Turns 10
                </h4>
              </div>
            </div>
            <div className="blog__card">
              <img className="card__image" src="images/card3.jpg" />
              <div className="card__content">
                <p className="card__text-mute">Product updates - 2025</p>
                <h4 className="card__text-heading">
                  Pathao Introduces Pathao Car Prime and Pathao Car Max
                </h4>
              </div>
            </div>
          </div>
        </section>
        {/* ==== *** ==== */}

        <Footer />
      </main>
    </>
  );
}

export default App;
