"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const button = "mr-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white";
const input = "mr-2 mb-2 rounded border px-2 py-1";

export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-path-parameters">
      <h3>Path Parameters</h3>
      <input className={input} value={a} onChange={(e) => setA(e.target.value)} />
      <input className={input} value={b} onChange={(e) => setB(e.target.value)} />
      <br />
      <a id="wd-path-parameter-add" className={button} href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}>
        Add {a} + {b}
      </a>
      <a id="wd-path-parameter-subtract" className={button} href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}>
        Subtract {a} - {b}
      </a>
      <a id="wd-path-parameter-multiply" className={button} href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}>
        Multiply {a} × {b}
      </a>
      <a id="wd-path-parameter-divide" className={button} href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}>
        Divide {a} ÷ {b}
      </a>
      <hr />
    </div>
  );
}
