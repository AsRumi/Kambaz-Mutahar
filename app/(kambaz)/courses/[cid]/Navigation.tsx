"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

const links = [
  ["Home", "home", "home"],
  ["Modules", "modules", "modules"],
  ["Piazza", "piazza", "piazza"],
  ["Zoom", "zoom", "zoom"],
  ["Assignments", "assignments", "assignments"],
  ["Quizzes", "quizzes", "quizzes"],
  ["Grades", "grades", "grades"],
  ["People", "people/table", "people"],
];

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none">
      {links.map(([label, path, key]) => {
        const href = `/courses/${cid}/${path}`;
        const active = pathname === href || pathname.startsWith(href + "/");
        return (
          <Link
            key={key}
            href={href}
            id={`wd-course-${key}-link`}
            className={
              active
                ? "list-group-item active border-0"
                : "list-group-item border-0 text-red-600"
            }
          >
            {label}
          </Link>
        );
      })}
      <Link
        href={`/courses/${cid}/home`}
        id="wd-course-ai-link"
        className="list-group-item border-0 text-red-600"
      >
        Sample
      </Link>
    </div>
  );
}
