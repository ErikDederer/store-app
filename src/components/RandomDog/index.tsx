import { useEffect, useState } from "react";
import styles from "./RandomDog.module.css";
import { Button } from "../ui/Button/Button";

export default function RandomDog() {
  const [dogImage, setDogImage] = useState("Loading...");
  async function fetchDogImage() {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setDogImage(data.message);
    } catch (error) {
      console.error("Failed to fetch dog image:", error);
    }
  }
  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Random Dog</h2>
      <div>
        <img src={dogImage} alt="A random dog" className={styles.image} />
        <Button onClick={fetchDogImage}>New Dog</Button>
      </div>
    </div>
  );
}
