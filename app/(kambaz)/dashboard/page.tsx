"use client";

import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { useAccountContext } from "../account/AccountContext";
import * as client from "../courses/client";

const field =
  "mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  const { currentUser } = useAccountContext();
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [myCourses, setMyCourses] = useState<Course[]>([]);

  useEffect(() => {
    client.fetchAllCourses().then(setCourses);
    if (currentUser) {
      client.findMyCourses().then(setMyCourses);
    }
  }, [currentUser, setCourses]);

  const onAddCourse = async () => {
    const newCourse = await client.createCourse(course);
    addCourse(newCourse);
    setMyCourses([...myCourses, newCourse]);
  };

  const onUpdateCourse = async () => {
    const saved = await client.updateCourse(course);
    updateCourse(saved);
    setMyCourses(myCourses.map((c) => (c._id === saved._id ? saved : c)));
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    deleteCourse(courseId);
    setMyCourses(myCourses.filter((c) => c._id !== courseId));
  };

  const onEnroll = async (c: Course) => {
    await client.enrollIntoCourse(c._id);
    setMyCourses([...myCourses, c]);
  };

  const onUnenroll = async (courseId: string) => {
    await client.unenrollFromCourse(courseId);
    setMyCourses(myCourses.filter((c) => c._id !== courseId));
  };

  let visibleCourses = courses;
  if (currentUser && !showAllCourses) {
    visibleCourses = myCourses;
  }

  return (
    <div id="wd-dashboard">
      <div className="flex items-center justify-between">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {currentUser && (
          <button
            type="button"
            id="wd-enrollments-toggle"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            Enrollments
          </button>
        )}
      </div>
      <hr />
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={onAddCourse}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={onUpdateCourse}
        >
          Update
        </button>
      </h5>
      <input
        className={`mt-2 ${field}`}
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className={field}
        rows={3}
        value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
        id="wd-course-description"
      />
      <input
        className={field}
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      <input
        type="date"
        className={`mb-3 ${field}`}
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-course-start-date"
      />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({visibleCourses.length})
      </h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {visibleCourses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            enrolled={myCourses.some((m) => m._id === c._id)}
            onEdit={() => setCourse(c)}
            onDelete={() => onDeleteCourse(c._id)}
            onEnroll={() => onEnroll(c)}
            onUnenroll={() => onUnenroll(c._id)}
          />
        ))}
      </div>
    </div>
  );
}
