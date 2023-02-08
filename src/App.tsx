import "./App.css";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);

  const tipAmount = ((bill * tip) / people).toFixed(2);

  return (
    <div className="App">
      <div>Bill: {bill}</div>
      <div>People: {people}</div>
      <div>Tip: {tip}</div>
      <input
        type="number"
        placeholder="bill"
        onChange={(e) => setBill(e.target.valueAsNumber)}
      />
      <button onClick={() => setTip(0.1)}>10%</button>
      <input
        type="number"
        placeholder="number of people"
        onChange={(e) => setPeople(e.target.valueAsNumber)}
      />
      <div>tip amount / person : {tipAmount}</div>
      <div>total / person: {((bill * (1 + tip)) / people).toFixed(2)}</div>
    </div>
  );
}

export default App;
