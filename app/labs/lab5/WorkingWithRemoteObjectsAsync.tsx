"use client";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function WorkingWithRemoteObjectsAsynchronously() {
  const [assignment, setAssignment] = useState({ title: "" });
  const updateTitle = async () => {
    setAssignment(await client.updateTitle(assignment.title));
  };
  useEffect(() => {
    client.fetchAssignment().then(setAssignment);
  }, []);
  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <input className="mb-2 rounded border px-2 py-1" value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
      <br />
      <button type="button" className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white" onClick={updateTitle}>
        Update Title
      </button>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <hr />
    </div>
  );
}
