import "./App.css";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);

  const tipAmount = ((bill * tip) / people).toFixed(2);
  const totalPerPerson = ((bill * (1 + tip)) / people).toFixed(2);
  const showTip = !(tipAmount === "NaN" || tipAmount === "Infinity");
  const showTotal = !(
    totalPerPerson === "NaN" || totalPerPerson === "Infinity"
  );

  return (
    <div className="App">
      <input
        type="number"
        value={bill}
        placeholder="bill"
        onChange={(e) => setBill(e.target.valueAsNumber)}
      />
      <button onClick={() => setTip(0.1)}>10%</button>
      <input
        type="number"
        value={people}
        placeholder="number of people"
        onChange={(e) => setPeople(Math.trunc(e.target.valueAsNumber))}
      />
      <div>tip amount / person :{showTip ? tipAmount : "0.00"}</div>
      <div>total / person: {showTotal ? totalPerPerson : "0.00"}</div>
    </div>
  );
}

export default App;
