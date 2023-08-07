import "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMyMoney] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onSubmit = (event) => {
    event.preventDefault();
    setMyMoney(Number(event.target.elements.money.value));
  };
  return (
    <div>
      <main>
        <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
        {loading ? (
          <strong>Loading...</strong>
        ) : (
          <div>
            <form onSubmit={onSubmit}>
              <input
                name="money"
                type="number"
                placeholder="Write your '$' and Enter !"
              />
            </form>
            <select>
              {coins.map((coin) => (
                <option key={coin.id}>
                  {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
                  {myMoney
                    ? ` 💲 ${myMoney / coin.quotes.USD.price} ${coin.symbol}`
                    : null}
                </option>
              ))}
            </select>
          </div>
        )}
      </main>
      <footer>
        <a
          target="_blank"
          href="https://github.com/dition0221"
          rel="noreferrer"
        >
          @dition0221
        </a>
      </footer>
    </div>
  );
}

export default App;
