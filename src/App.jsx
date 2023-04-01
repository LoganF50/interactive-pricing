import "./css/reset.css";
import "./css/styles.css";
import { useState } from "react";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { Switch } from "./components/Switch";

function App() {
  const pricing = [
    { views: "10k", price: 8 },
    { views: "50k", price: 12 },
    { views: "100k", price: 16 },
    { views: "500k", price: 24 },
    { views: "1m", price: 36 },
  ];
  const [currentPriceIndex, setCurrentPriceIndex] = useState(2);
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);

  const getPrice = () => {
    const discount = 1 - 0.25; //25% off
    const price = isYearlyBilling
      ? pricing[currentPriceIndex].price * discount
      : pricing[currentPriceIndex].price;
    return price.toLocaleString("us-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
  };

  const getViews = () => {
    return pricing[currentPriceIndex].views;
  };

  const handleSliderChange = (e) => {
    const value = Number(e.target.value);
    setCurrentPriceIndex(value);
  };

  const handleYearlyBillingChange = () => {
    setIsYearlyBilling(!isYearlyBilling);
  };

  return (
    <div className="App">
      <Header
        title="Simple, traffic-based pricing"
        text="Sign-up for our 30-day trial. No credit card required."
      />
      <main className="card">
        <div className="card__section">
          <div className="card__views">
            <span id="views">{getViews()}</span> pageviews
          </div>
          <Slider
            label={"slider-pricing"}
            min={0}
            max={pricing.length - 1}
            value={currentPriceIndex}
            onChange={handleSliderChange}
          />
          <div className="card__pricing">
            <span className="card__price" id="price">
              {getPrice()}
            </span>
            /month
          </div>
          <div className="card__billing">
            <div>Monthly Billing</div>
            <Switch
              isOn={isYearlyBilling}
              label="yearly-billing"
              handleToggle={handleYearlyBillingChange}
            />
            <div>Yearly Billing</div>
            <div className="card__pill">-25%</div>
          </div>
        </div>
        <hr className="card__separator" />
        <div className="card__section">
          <ul className="list">
            <li className="list__feature">Unlimited websites</li>
            <li className="list__feature">100% data ownership</li>
            <li className="list__feature">Email reports</li>
          </ul>
          <Button text="Start my trial" />
        </div>
      </main>
    </div>
  );
}

export default App;
