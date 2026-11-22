import Link from "next/link";
import Image from "next/image";
import { type Course } from "../store/coursesStore";
import { useAccountContext } from "../account/AccountContext";

export default function CourseCard({
  course,
  enrolled,
  onEdit,
  onDelete,
  onEnroll,
  onUnenroll,
}: {
  course: Course;
  enrolled: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onEnroll: () => void;
  onUnenroll: () => void;
}) {
  const { currentUser } = useAccountContext();

  return (
    <div className="wd-dashboard-course w-[300px] max-w-full overflow-hidden rounded border border-neutral-300 bg-white shadow">
      <Link
        href={`/courses/${course._id}/home`}
        className="wd-dashboard-course-link block text-neutral-900 no-underline"
      >
        <Image
          src={course.image}
          width={300}
          height={160}
          alt={course.name}
          className="h-40 w-full object-cover"
        />
        <div className="p-4">
          <h5 className="wd-dashboard-course-title m-0 mb-2 truncate text-lg font-semibold whitespace-nowrap">
            {course.name}
          </h5>
          <p className="wd-dashboard-course-description m-0 mb-3 h-[100px] overflow-hidden text-neutral-600">
            {course.description}
          </p>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          >
            Go
          </button>
          <button
            type="button"
            id="wd-edit-course-click"
            className="ms-2 inline-flex items-center justify-center rounded bg-yellow-400 px-3 py-1.5 text-sm"
            onClick={(event) => {
              event.preventDefault();
              onEdit();
            }}
          >
            Edit
          </button>
          <button
            type="button"
            id="wd-delete-course-click"
            className="ms-2 inline-flex items-center justify-center rounded bg-red-600 px-3 py-1.5 text-sm text-white"
            onClick={(event) => {
              event.preventDefault();
              onDelete();
            }}
          >
            Delete
          </button>
          {currentUser && enrolled && (
            <button
              type="button"
              id="wd-unenroll-course-click"
              className="mt-2 block rounded bg-red-600 px-3 py-1.5 text-sm text-white"
              onClick={(event) => {
                event.preventDefault();
                onUnenroll();
              }}
            >
              Unenroll
            </button>
          )}
          {currentUser && !enrolled && (
            <button
              type="button"
              id="wd-enroll-course-click"
              className="mt-2 block rounded bg-green-600 px-3 py-1.5 text-sm text-white"
              onClick={(event) => {
                event.preventDefault();
                onEnroll();
              }}
            >
              Enroll
            </button>
          )}
        </div>
      </Link>
    </div>
  );
}
