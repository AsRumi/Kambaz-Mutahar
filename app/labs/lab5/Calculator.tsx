"use client";
import { useState } from "react";

const symbols: Record<string, string> = { add: "+", subtract: "-", multiply: "×", divide: "÷" };
const input = "mb-2 ml-2 rounded border px-2 py-1";

export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operation, setOperation] = useState("add");
  const [output, setOutput] = useState("");
  const calculate = async (op: string) => {
    const response = await fetch(`/api/lab5/calculator?a=${a}&b=${b}&operation=${op}`);
    const data = await response.json();
    setOutput(data.error ?? `${data.a} ${symbols[op]} ${data.b} = ${data.result}`);
  };
  return (
    <div id="wd-calculator">
      <h3>Calculator (Next.js Web API)</h3>
      A: <input className={input} placeholder="A" value={a} onChange={(e) => setA(e.target.value)} />
      <br />
      B: <input className={input} placeholder="B" value={b} onChange={(e) => setB(e.target.value)} />
      <br />
      Operation:
      <select className={input} value={operation}
        onChange={(e) => {
          setOperation(e.target.value);
          calculate(e.target.value);
        }}>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">×</option>
        <option value="divide">÷</option>
      </select>
      <br />
      <button type="button" className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white" onClick={() => calculate(operation)}>
        Calculate
      </button>
      <input className={input} value={output} readOnly />
      <hr />
    </div>
  );
}
