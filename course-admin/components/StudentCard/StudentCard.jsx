import classes from "./StudentCard.module.css";

const StudentCard = (props) => {
  return (
    <div className={classes.StudentCardDiv}>
      <h3>Registration ID</h3>
      <span>{props.reg}</span>
      <h3>Student Name</h3>
      <span>{props.name}</span>
    </div>
  );
};

export default StudentCard;
