import { useEffect, useState } from "react";
import styles from "./GoldPriceCalculator.module.css";

export default function GoldPriceCalculator() {
  const [weight, setWeight] = useState<number>(0);
  const [goldPriceGram, setGoldPriceGram] = useState<number>(0);
  const [dateTime, setDateTime] = useState<string>("");
  const [currencyCode, setCurrencyCode] = useState<string>("EUR");

  useEffect(() => {
    async function fetchGoldPrice(code: string) {
      try {
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
      } catch (error) {
        console.error("Failed to fetch gold price:", error);
      }
    }

    fetchGoldPrice(currencyCode);
  }, [currencyCode]);

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

      {goldPriceGram ? (
        <div>
          <p>
            Price per gram: {goldPriceGram} {currencyCode} | Time: {dateTime}
          </p>

          <label>Weight</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />

          <p>
            💰 Total price: {(weight * goldPriceGram).toFixed(2)} {currencyCode}
          </p>
        </div>
      ) : (
        <p>Loading gold price...</p>
      )}
    </div>
  );
}
