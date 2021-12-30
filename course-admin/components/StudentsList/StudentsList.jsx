import ListItem from "../ListItem/ListItem";
import ListWrapper from "../ListWrapper/ListWrapper";
import classes from "./StudentsList.module.css";

const StudentsList = (props) => {
  const data = props.data;

  return (
    <div className={classes.StudentsListDiv}>
      <div className={classes.listTitlesDiv}>
        <span className={classes.reg}>ID</span>
        <span className={classes.name}>Student Name</span>
      </div>
      <ListWrapper>
        {data.map((student, key) => (
          <ListItem key={key} reg={student.reg} name={student.name} />
        ))}
      </ListWrapper>
    </div>
  );
};

export default StudentsList;
