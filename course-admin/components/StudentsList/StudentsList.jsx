import ListItem from "../ListItem/ListItem";
import ListWrapper from "../ListWrapper/ListWrapper";
import classes from "./StudentsList.module.css";

const StudentsList = ({ data }) => {
  return (
    <div className={classes.StudentsListDiv}>
      <ListWrapper>
        <div className={classes.listTitlesDiv}>
          <span className={classes.reg}>ID</span>
          <span className={classes.name}>Name</span>
        </div>
        {data.map((student, key) => (
          <ListItem key={key} reg={student.reg} name={student.name} />
        ))}
      </ListWrapper>
    </div>
  );
};

export default StudentsList;
