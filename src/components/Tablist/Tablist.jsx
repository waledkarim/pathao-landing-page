import { Apple, Bike, Car, Euro, Truck } from "lucide-react";
import { useEffect, useEffectEvent, useState } from "react";
import "./Tablist.css";

function Tablist() {
  const [isSelectedTab, setIsSelectedTab] = useState(0);
  const [progress, setProgress] = useState(0);

  const fn = useEffectEvent(() => {
    if (progress === 100) {
      setProgress(0);
      setIsSelectedTab((prev) => (prev === 4 ? 0 : prev + 1));
    } else {
      setProgress((prev) => prev + 1);
    }
  });

  useEffect(() => {
    const id = setInterval(() => {
      fn();
    }, 50);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="tablist wrapper">
      <div className="tablist__tabs">
        {/* Bike tab */}
        <div className="tab">
          <button
            onClick={() => {
              setIsSelectedTab(0);
              setProgress(0);
            }}
            className="tab__btn"
          >
            <Bike width={18} height={18} />
            <span>Bike</span>
          </button>
          <div
            style={{ width: `${isSelectedTab === 0 ? progress : 0}%` }}
            className="tab__progress"
          />
        </div>
        {/* ===***=== */}

        {/* Car tab */}
        <div className="tab">
          <button
            onClick={() => {
              setIsSelectedTab(1);
              setProgress(0);
            }}
            className="tab__btn"
          >
            <Car width={18} height={18} />
            <span>Car</span>
          </button>
          <div
            style={{
              backgroundColor: "purple",
              width: `${isSelectedTab === 1 ? progress : 0}%`,
            }}
            className="tab__progress"
          />
        </div>
        {/* ===***=== */}

        {/* Food tab */}
        <div className="tab">
          <button
            onClick={() => {
              setIsSelectedTab(2);
              setProgress(0);
            }}
            className="tab__btn"
          >
            <Apple width={18} height={18} />
            <span>Food</span>
          </button>
          <div
            style={{
              backgroundColor: "green",
              width: `${isSelectedTab === 2 ? progress : 0}%`,
            }}
            className="tab__progress"
          />
        </div>
        {/* ===***=== */}

        {/* Parcel tab */}
        <div className="tab">
          <button
            onClick={() => {
              setIsSelectedTab(3);
              setProgress(0);
            }}
            className="tab__btn"
          >
            <Truck width={18} height={18} />
            <span>Parcel</span>
          </button>
          <div
            style={{
              backgroundColor: "orange",
              width: `${isSelectedTab === 3 ? progress : 0}%`,
            }}
            className="tab__progress"
          />
        </div>
        {/* ===***=== */}

        {/* Pay tab */}
        <div className="tab">
          <button
            onClick={() => {
              setIsSelectedTab(4);
              setProgress(0);
            }}
            className="tab__btn"
          >
            <Euro width={18} height={18} />
            <span>Pay</span>
          </button>
          <div
            style={{
              backgroundColor: "blue",
              width: `${isSelectedTab === 4 ? progress : 0}%`,
            }}
            className="tab__progress"
          />
        </div>
        {/* ===***=== */}
      </div>
      {isSelectedTab === 0 && (
        <div className="tablist__body even-columns">
          <div className="tablist__content flow">
            <div className="flow">
              <h4>Beat Traffic, Save Time</h4>
              <p>
                Nothing beats traffic like Pathao Bikes and you know it! Save
                time, save money and reach your destination on time.
              </p>
            </div>
            <div className="flow">
              <h4>We Got You Covered</h4>
              <p>
                Our rides are insured, so you can rely on us to provide you with
                the safest rides.
              </p>
            </div>
            <div className="flow">
              <h4>Always available</h4>
              <p>
                Be it early in the morning or late in the night, our trained
                riders are always available to provide you with the best
                service!
              </p>
            </div>
          </div>
          <div className="tablist__imageBox">
            <img src="images/bike-screen.png" />
          </div>
        </div>
      )}

      {isSelectedTab === 1 && (
        <div className="tablist__body even-columns">
          <div className="tablist__content flow">
            <div className="flow">
              <h4>Travel at Your Convenience</h4>
              <p>
                Budget tight? Try Pathao Car Lite! Want to travel in AC? Use
                Pathao Car Plus!
              </p>
            </div>
            <div className="flow">
              <h4>Comfort With Affordability</h4>
              <p>
                With Pathao’s rate, even if you choose to travel in Car Plus
                you’ll be traveling with ease and comfort that is affordable.
              </p>
            </div>
            <div className="flow">
              <h4>Hasslefree and Quick</h4>
              <p>
                With just a few clicks on the app, you can find a car easily, in
                minutes.
              </p>
            </div>
          </div>
          <div className="tablist__imageBox">
            <img src="images/car-screen.png" />
          </div>
        </div>
      )}

      {isSelectedTab === 2 && (
        <div className="tablist__body even-columns">
          <div className="tablist__content flow">
            <div className="flow">
              <h4>Fastest Delivery</h4>
              <p>
                Get your food delivered in less than an hour! That’s as fast as
                it can get.
              </p>
            </div>
            <div className="flow">
              <h4>So Much to Choose From</h4>
              <p>
                With 4000+ restaurants to choose from in Dhaka & Chattogram,
                pick any cuisine you want on Pathao’s food section.
              </p>
            </div>
            <div className="flow">
              <h4>Offers You Can’t Refuse</h4>
              <p>
                With combos and offers no one can beat, Pathao partners up with
                restaurants to give you the best combos in the best prices!
              </p>
            </div>
          </div>
          <div className="tablist__imageBox">
            <img src="images/food-screen.png" />
          </div>
        </div>
      )}

      {isSelectedTab === 3 && (
        <div className="tablist__body even-columns">
          <div className="tablist__content flow">
            <div className="flow">
              <h4>On Demand Delivery</h4>
              <p>
                Left your charger or keys at home? Have it delivered to you on
                Pathao Parcel, without any hassle!
              </p>
            </div>
            <div className="flow">
              <h4>Trust Us</h4>
              <p>
                You can trust us to deliver your most confidential documents to
                the desired place absolutely intact right on time!
              </p>
            </div>
            <div className="flow">
              <h4>Emergency? Deliver via Parcel!</h4>
              <p>
                With Pathao Parcel, you can get your item in the quickest time.
                Because your emergencies are Parcel’s biggest concern!
              </p>
            </div>
          </div>
          <div className="tablist__imageBox">
            <img src="images/parcel-screen.png" />
          </div>
        </div>
      )}

      {isSelectedTab === 4 && (
        <div className="tablist__body even-columns">
          <div className="tablist__content flow">
            <div className="flow">
              <h4>Transact how you want</h4>
              <p>
                From split checks to last-minute top-ups, your money moves the
                way you want!
              </p>
            </div>
            <div className="flow">
              <h4>Access funds when you need</h4>
              <p>Stuck at checkout? Access funds just when you need it!</p>
            </div>
            <div className="flow">
              <h4>Manage funds how you should</h4>
              <p>Effortlessly track and manage every financial move.</p>
            </div>
          </div>
          <div className="tablist__imageBox">
            <img src="images/pay-screen.png" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Tablist;
