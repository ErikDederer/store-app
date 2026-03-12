import { useState } from "react";
import { Button } from "../ui/Button/Button";
import styles from "./GoldPriceCalculator.module.css";

export default function GoldPriceCalculator() {
  const [weight, setWeight] = useState<number>(0);
  const [goldPriceGram, setGoldPriceGram] = useState(0);
  const [dateTime, setDateTime] = useState<string>("");
  const [currencyCode, setCurrencyCode] = useState("EUR");

  async function fetchGoldPrice(code: string) {
    const BASE_URL = import.meta.env.VITE_GOLD_API_URL;
    const PATH = `/XAU/${code}`;
    const res = await fetch(BASE_URL + PATH, {
      headers: {
        "x-access-token": import.meta.env.VITE_GOLD_API_KEY,
      },
    });
    const data = await res.json();

    setDateTime(new Date(data.timestamp * 1000).toLocaleString());
    setGoldPriceGram(data.price_gram_24k);
  }

  return (
    <div className={styles.container}>
      <h2>GOLD PRICE CALCULATOR</h2>
      <select
        value={currencyCode}
        onChange={(e) => setCurrencyCode(e.target.value)}
      >
        <option value="USD">USD - United States Dollar</option>
        <option value="EUR">EUR - European Euro</option>
        <option value="CHF">CHF - Swiss Franc</option>
      </select>

      <Button
        onClick={() => {
          fetchGoldPrice(currencyCode);
        }}
      >
        Update gold price
      </Button>
      
     
      {goldPriceGram ? (
        <div className={styles.result}>
          <p>
            Price per gram: {goldPriceGram} {currencyCode} Time: {dateTime}
          </p>
          <label htmlFor="weight">Weight (grams):</label>
          <input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />

          <p>💰 Total price: {weight * goldPriceGram} {currencyCode}</p>
        </div>
      ) : (
        <p>First update the gold price and pick a currency.</p>
      )}
    </div>
  );
}