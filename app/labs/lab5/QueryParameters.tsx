"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const button = "mr-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white";
const input = "mr-2 mb-2 rounded border px-2 py-1";

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  const url = `${HTTP_SERVER}/lab5/calculator`;
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input className={input} value={a} onChange={(e) => setA(e.target.value)} />
      <input className={input} value={b} onChange={(e) => setB(e.target.value)} />
      <br />
      <a id="wd-query-parameter-add" className={button} href={`${url}?operation=add&a=${a}&b=${b}`}>
        Add {a} + {b}
      </a>
      <a id="wd-query-parameter-subtract" className={button} href={`${url}?operation=subtract&a=${a}&b=${b}`}>
        Subtract {a} - {b}
      </a>
      <a id="wd-query-parameter-multiply" className={button} href={`${url}?operation=multiply&a=${a}&b=${b}`}>
        Multiply {a} × {b}
      </a>
      <a id="wd-query-parameter-divide" className={button} href={`${url}?operation=divide&a=${a}&b=${b}`}>
        Divide {a} ÷ {b}
      </a>
      <hr />
    </div>
  );
}
