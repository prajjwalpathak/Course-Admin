import axios from "../../pages/api/students";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import classes from "./CourseList.module.css";

const CourseList = ({ id, courses, updateCourseList }) => {
  const courseList = courses;

  //Function to delete a course from the selected courses 
  const deleteCourse = (course) => {
    courseList.splice(courseList.indexOf(course), 1);

    //Creating a PATCH request using Axios to update the selected courses of the student in the database
    axios
      .patch(`/students/${id}`, {
        courses: [...courseList],
      })
      .then(function (res) {
        updateCourseList(res.data.courses);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={classes.selectedCoursesDiv}>
      <h3 className={classes.selectedCoursesTitle}>All Courses selected</h3>
      <div>
        {courses.map((course, key) => {
          return (
            <div key={key} className={classes.selectedCoursesButtonsDiv}>
              <Button
                sx={{
                  margin: "0.5rem 1rem",
                  background: "rgb(120, 10, 10)",
                  minWidth: "8rem",
                  "&:hover": { background: "brown" },
                }}
                size="small"
                color="primary"
                variant="contained"
                endIcon={
                  <DeleteIcon
                    sx={{ width: "1.5rem", height: "1.5rem" }}
                    onClick={() => deleteCourse(course)}
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

export default CourseList;
