import axios from "../../pages/api/students";
import classes from "./CourseList.module.css";

const CourseList = (props) => {
  const courseList = props.courses;
  const deleteCourse = (course) => {
    courseList.splice(courseList.indexOf(course), 1);
    axios
      .patch(`/students/${props.id}`, {
        courses: [...courseList],
      })
      .then(function (res) {
        props.updateCourseList(res.data.courses);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={classes.CourseListDiv}>
      <h3>Courses</h3>
      <div>
        {props.courses.map((course, key) => {
          return (
            <div key={key} className={classes.courseDiv}>
              <h5>{course}</h5>
              <button onClick={() => deleteCourse(course)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseList;
