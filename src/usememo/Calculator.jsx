import { useState, useMemo } from "react";

const InputNumber = ({ value, onChange }) => {
  return (
    <>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </>
  );
};

export const Calculator = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operation, setOperation] = useState(null);

  const map = new Map();
  const initialNumbers = `${a},${b}`;

  const result = useMemo(() => {
    switch (operation) {
      case "multiply":
        return a * b;
      case "add":
        return a + b;
      case "subtract":
        return a - b;
      default:
        return null;
    }
  }, [a, b, operation]);

  map.set(initialNumbers, result);

  return (
    <div>
      <InputNumber value={a} onChange={setA} />
      <InputNumber value={b} onChange={setB} />
      <button onClick={() => setOperation("multiply")}>*</button>
      <button onClick={() => setOperation("add")}>+</button>
      <button onClick={() => setOperation("subtract")}>-</button>
      <p>result: {result}</p>
    </div>
  );
};
