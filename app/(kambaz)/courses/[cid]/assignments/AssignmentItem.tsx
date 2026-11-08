import Link from "next/link";
import { FaFileAlt, FaTrash } from "react-icons/fa";
import { useAssignmentsStore } from "../../../store/assignmentsStore";

export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
  canDelete,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
  canDelete: boolean;
}) {
  const deleteAssignment = useAssignmentsStore((state) => state.deleteAssignment);

  const removeAssignment = () => {
    const sure = window.confirm("Are you sure you want to remove this assignment?");
    if (sure) {
      deleteAssignment(aid);
    }
  };

  return (
    <li className="wd-assignment-list-item mb-3 flex gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 p-3">
      <FaFileAlt className="mt-1 shrink-0 text-xl text-green-700" />
      <div className="flex-1">
        <Link
          href={`/courses/${cid}/assignments/${aid}`}
          className="wd-assignment-link font-semibold text-neutral-900 no-underline hover:underline"
        >
          {title}
        </Link>
        <div className="mt-1 text-sm text-neutral-600">{details}</div>
      </div>
      {canDelete && (
        <FaTrash
          className="mt-1 shrink-0 cursor-pointer text-red-600"
          onClick={removeAssignment}
          title="Delete assignment"
          id="wd-delete-assignment-click"
        />
      )}
    </li>
  );
}
