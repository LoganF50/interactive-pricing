import "./css/reset.css";
import "./css/styles.css";
import { Button } from "./components/Button";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header
        title="Simple, traffic-based pricing"
        text="Sign-up for our 30-day trial. No credit card required."
      />
      <main className="card">
        <div className="card__section">
          <div className="card__views">
            <span id="views">100k</span> pageviews
          </div>
          <div className="card__slider">PLACEHOLDER SLIDER</div>
          <div className="card__pricing">
            <span className="card__price" id="price">
              $16.00
            </span>
            /month
          </div>
          <div className="card__billing">
            <div>Monthly Billing</div>
            <div>PLACEHOLDER_SWITCH</div>
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
