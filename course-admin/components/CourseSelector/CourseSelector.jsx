import axios from "../../pages/api/students";
import { useState } from "react";
import CourseList from "../CourseList/CourseList";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import classes from "./CourseSelector.module.css";

const CourseSelector = ({ courses, id }) => {
  const [courseList, setCourseList] = useState(courses);

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

  //Function to add a course to the list of selected courses of the student
  const addCourse = (course) => {
    if (courseList.includes(course)) {
      return alert("Course already selected.");
    } else {

      //Creating a PATCH request using Axios to update the selected courses of the student in the database
      axios
        .patch(`/students/${id}`, {
          courses: [...courseList, course],
        })
        .then(function (res) {
          setCourseList(res.data.courses);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div className={classes.CourseSelectorDiv}>
      <CourseList
        id={id}
        courses={courseList}
        updateCourseList={setCourseList}
      />
      <div className={classes.allCoursesDiv}>
        <h3 className={classes.addCoursesTitle}>Select Courses</h3>
        {allCourses.map((course, key) => {
          return (
            <div key={key} className={classes.allCoursesButtonsDiv}>
              <Button
                sx={{
                  margin: "0.5rem 1rem",
                  background: "rgb(0, 0, 100)",
                  minWidth: "8rem",
                  "&:hover": { background: "rgb(50, 50, 150)" },
                }}
                size="small"
                variant="contained"
                endIcon={
                  <AddCircleOutlineIcon
                    sx={{ width: "1.5rem", height: "1.5rem" }}
                    onClick={() => addCourse(course)}
                  />
                }
              >
                {course}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseSelector;
