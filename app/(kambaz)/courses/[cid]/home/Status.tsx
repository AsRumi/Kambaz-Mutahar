import { FaCheckCircle, FaRegStar } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import {
  FaFileImport,
  FaArrowRightFromBracket,
  FaBullseye,
  FaChartBar,
  FaBullhorn,
  FaChartLine,
  FaBell,
} from "react-icons/fa6";

const actions = [
  [FaFileImport, "Import Existing Content"],
  [FaArrowRightFromBracket, "Import from Commons"],
  [FaBullseye, "Choose Home Page"],
  [FaChartBar, "View Course Stream"],
  [FaBullhorn, "New Announcement"],
  [FaChartLine, "New Analytics"],
  [FaBell, "View Course Notifications"],
];

const actionClass =
  "mb-1 flex w-full items-center rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-sm";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-neutral-200 px-2 py-1.5 text-sm"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-green-600 bg-green-600 px-2 py-1.5 text-sm text-white"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      {actions.map(([Icon, label]) => {
        const I = Icon as typeof FaBell;
        return (
          <button key={label as string} type="button" className={actionClass}>
            <I className="me-2 shrink-0" /> {label as string}
          </button>
        );
      })}
      <button id="wd-ai-status" type="button" className={actionClass}>
        <FaRegStar className="me-2 shrink-0" /> Sample action
      </button>
    </div>
  );
}
