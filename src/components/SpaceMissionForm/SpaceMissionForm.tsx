import { useId, useState } from "react";
import styles from "./SpaceMissionForm.module.css";

export default function SpaceMissionForm() {
    const [astronautName, setAstronautName] = useState("");
    const [planet, setPlanet] = useState("Mars");
    const nameInputId = useId();
    const planetSelectId = useId();
  return (
    <div className={styles.form}>
      <h2>Space Mission Registration</h2>
      <label htmlFor={nameInputId}>Astronaut Name</label>
      <input 
        type="text"
        id={nameInputId}
        placeholder="Enter astronaut name"
        value={astronautName}
        onChange={(e) => setAstronautName(e.target.value)}
      /><br />
      <label htmlFor={planetSelectId}>Select Planet</label>
        <select id={planetSelectId} value={planet} onChange={(e) => setPlanet(e.target.value)}>
          <option value="Mars">Mars</option>
          <option value="Venus">Venus</option>
          <option value="Jupiter">Jupiter</option>
          <option value="Saturn">Saturn</option>
        </select>
        {astronautName ? (
          <p className={styles.greenParagraph}>🧑‍🚀 Astronaut {astronautName} is headed to {planet}!</p>
        ) : (
          <p className={styles.redParagraph}>Please enter astronaut name to begin your mission.</p>
        )}      
    </div>  
    );
}