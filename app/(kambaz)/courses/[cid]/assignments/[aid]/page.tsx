import Link from "next/link";
import * as db from "../../../../database";

const entryOptions = [
  ["wd-text-entry", "Text Entry"],
  ["wd-website-url", "Website URL"],
  ["wd-media-recordings", "Media Recordings"],
  ["wd-student-annotation", "Student Annotation"],
  ["wd-file-upload", "File Uploads"],
];

const field = "w-full rounded border px-3 py-2";
const label = "text-right";
const box = "space-y-3 rounded border p-4";
const heading = "mb-1 block font-semibold";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignment = db.assignments.find((a) => a._id === aid);
  return (
    <div id="wd-assignments-editor" className="max-w-3xl space-y-4 p-4">
      <div>
        <label htmlFor="wd-name" className="mb-1 block font-medium">
          Assignment Name
        </label>
        <input
          id="wd-name"
          defaultValue={assignment?.title ?? ""}
          className={field}
        />
        <p className="mt-1 text-sm text-neutral-600">Assignment id: {aid}</p>
      </div>
      <textarea
        id="wd-description"
        rows={6}
        defaultValue={assignment?.description ?? ""}
        className={field}
      />
      <div className="grid grid-cols-[10rem_1fr] items-center gap-4">
        <label htmlFor="wd-points" className={label}>
          Points
        </label>
        <input id="wd-points" defaultValue={assignment?.points ?? 100} className={field} />

        <label htmlFor="wd-group" className={label}>
          Assignment Group
        </label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={field}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>

        <label htmlFor="wd-display-grade-as" className={label}>
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="PERCENTAGE"
          className={field}
        >
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="LETTER">Letter Grade</option>
        </select>

        <label htmlFor="wd-submission-type" className="self-start pt-2 text-right">
          Submission Type
        </label>
        <div className={box}>
          <select
            id="wd-submission-type"
            defaultValue="ONLINE"
            className={field}
          >
            <option value="ONLINE">Online</option>
            <option value="PAPER">On Paper</option>
            <option value="NONE">No Submission</option>
          </select>
          <div className="font-semibold">Online Entry Options</div>
          {entryOptions.map(([id, text]) => (
            <div key={id} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={id}
                defaultChecked={id === "wd-website-url"}
              />
              <label htmlFor={id}>{text}</label>
            </div>
          ))}
        </div>

        <div className="self-start pt-2 text-right">Assign</div>
        <div className={box}>
          <div>
            <label htmlFor="wd-assign-to" className={heading}>
              Assign to
            </label>
            <input id="wd-assign-to" defaultValue="Everyone" className={field} />
          </div>
          <div>
            <label htmlFor="wd-due-date" className={heading}>
              Due
            </label>
            <input
              type="date"
              id="wd-due-date"
              defaultValue={assignment?.due}
              className={field}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="wd-available-from" className={heading}>
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                defaultValue={assignment?.available}
                className={field}
              />
            </div>
            <div>
              <label htmlFor="wd-available-until" className={heading}>
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                defaultValue="2024-05-20"
                className={field}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="wd-ai-editor-notes" className="mb-1 block font-medium">
          Sample notes
        </label>
        <textarea id="wd-ai-editor-notes" rows={3} className={field} />
      </div>
      <hr />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm text-black no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
