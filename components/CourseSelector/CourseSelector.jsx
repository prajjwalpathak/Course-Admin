import { useState } from "react";
import CourseList from "../CourseList/CourseList";
import classes from "./CourseSelector.module.css";

const CourseSelector = (props) => {
  const [courseList, setCourseList] = useState(props.courses);
  const addCourse = (course) => {
    if (courseList.includes(course)) {
      return alert(
        "The Course is already present. Please choose a different course."
      );
    } else {
      setCourseList([...courseList, course]);
    }
  };

  const allCourses = [
    "Course 1",
    "Course 2",
    "Course 3",
    "Course 4",
    "Course 5",
    "Course 6",
    "Course 7",
    "Course 8",
    "Course 9",
    "Course 10",
  ];

  return (
    <div className={classes.CourseSelectorDiv}>
      <CourseList courses={courseList} updateCourseList={setCourseList} />
      <div>
        {allCourses.map((course, key) => {
          return (
            <div key={key}>
              <button onClick={() => addCourse(course)}>{course}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseSelector;
