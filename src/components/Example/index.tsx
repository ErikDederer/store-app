import { useEffect, useState } from "react";

export default function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Use Effect version 1");
  });

  useEffect(() => {
    console.log("Use Effect version 2");
  }, []);

  useEffect(() => {
    console.log("Use Effect version 3");
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Bip");
    }, 1000);
    // clean up function
    // можно указать в ретерне cleanup функцию
    // она срабатывать в момент Unmount

    return () => {
      console.log("Clean Up");
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>Example for useEffect</h2>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        +
      </button>

      <p>Count: {count}</p>
    </div>
  );
}

// Component lifecycle
// Mount - первое появлением - первый рендер
// Update - меняются значения стейта
// Unmount - размонтирование - когда исчезает - закрывается

// callback - функция - которые мы передаем в вызов другой функции как аргумент
