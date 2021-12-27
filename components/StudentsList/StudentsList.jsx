import DATA from "../../DATA";
import ListItem from "../ListItem/ListItem";
import ListWrapper from "../ListWrapper/ListWrapper";
import classes from "./StudentsList.module.css";

const StudentsList = () => {
  return (
    <div className={classes.StudentsListDiv}>
      <div className={classes.listTitlesDiv}>
        <span className={classes.reg}>ID</span>
        <span className={classes.name}>Student Name</span>
      </div>
      <ListWrapper>
        {DATA.map((student) => (
          <ListItem key={student.key} reg={student.reg} name={student.name} />
        ))}
      </ListWrapper>
    </div>
  );
};

export default StudentsList;
