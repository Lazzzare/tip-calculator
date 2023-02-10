import React, { useEffect, useState } from "react";

const Calculator = () => {
  const [bill, setBill] = useState<number | undefined>(undefined);
  const [people, setPeople] = useState<number | undefined>(undefined);
  const [tip, setTip] = useState<number | undefined>(undefined);
  const [peopleError, SetPeopleError] = useState("");

  const allRight =
    bill !== undefined && people !== undefined && tip !== undefined;
  const tipAmount = allRight && ((bill * tip) / people).toFixed(2);
  const totalPerPerson = allRight && ((bill * (1 + tip)) / people).toFixed(2);
  const showTip = !(tipAmount === "NaN" || tipAmount === "Infinity");
  const showTotal = !(
    totalPerPerson === "NaN" || totalPerPerson === "Infinity"
  );

  useEffect(() => {
    if (people == 0) {
      SetPeopleError(`Can't be zero`);
    } else {
      SetPeopleError("");
    }
  }, [people]);

  return (
    <div className="App">
      Bill:
      <input
        type="number"
        value={bill}
        min={0}
        placeholder="bill"
        onChange={(e) => setBill(e.target.valueAsNumber)}
      />
      <div>
        <button onClick={() => setTip(0.05)}>5%</button>
        <button onClick={() => setTip(0.1)}>10%</button>
        <button onClick={() => setTip(0.15)}>15%</button>
        <button onClick={() => setTip(0.25)}>25%</button>
        <button onClick={() => setTip(0.5)}>50%</button>
      </div>
      <input
        type="number"
        value={tip && tip * 100}
        min={0}
        max={100}
        placeholder="costum"
        onChange={(e) => setTip(e.target.valueAsNumber / 100)}
      />
      People:
      <input
        type="number"
        value={people}
        min={0}
        placeholder="number of people"
        onKeyDown={(e) => {
          if (e.key === ".") {
            e.preventDefault();
          }
        }}
        onChange={(e) => setPeople(Math.trunc(e.target.valueAsNumber))}
      />
      <div style={{ color: "red" }}>{peopleError ? "Can't Be Zero" : null}</div>
      <div>tip amount / person :{showTip ? tipAmount : "0.00"}</div>
      <div>total / person: {showTotal ? totalPerPerson : "0.00"}</div>
    </div>
  );
};

export default Calculator;
