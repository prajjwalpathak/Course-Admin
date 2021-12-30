import classes from "./CourseList.module.css";

const CourseList = (props) => {
  const deleteCourse = (course) => {
    props.courses.splice(props.courses.indexOf(course), 1);
    props.updateCourseList(props.courses);
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
