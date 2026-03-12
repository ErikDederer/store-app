import { useState } from "react";
import { Button } from "../ui/Button/Button";
import styles from "./Counter.module.css";

export default function Counter() {
  const headingText = "Counter";
  const [count, setCount] = useState<number>(0);
  // принимает intitial state - начальное значение стейта
  // возврщает tuple (кортеж - массив) в котором на первой позиции
  // - переменная состояния (state)
  // на второй позиции - сеттер для этого стейта
  // для создания состояния внутри компонента - при изменении которого -
  // происходит rerender компонента

  function handlePlus() {
    setCount((prev) => prev + 1);
  }

  function handleMinus() {
    setCount((prev) => prev - 1);
  }

   function handleClear() {
    setCount(0);
  }

  return (
    <div className={styles.container}>
      <h2>{headingText}</h2>
      <Button onClick={handlePlus}>+</Button>
      <div>Count: {count}</div>
      <Button onClick={handleMinus} variant="secondary">-</Button>
      <Button onClick={handleClear} variant="danger">Clear</Button>
    </div>
  );
}
