import ListItem from "../ListItem/ListItem";
import ListWrapper from "../ListWrapper/ListWrapper";
import classes from "./StudentsList.module.css";

const StudentsList = () => {
  const StudentsData = [
    { key: 1, reg: 22001, name: "Student 1", courses: [] },
    { key: 2, reg: 22002, name: "Student 2", courses: [] },
    { key: 3, reg: 22003, name: "Student 3", courses: [] },
    { key: 4, reg: 22004, name: "Student 4", courses: [] },
    { key: 5, reg: 22005, name: "Student 5", courses: [] },
    { key: 6, reg: 22006, name: "Student 6", courses: [] },
    { key: 7, reg: 22007, name: "Student 7", courses: [] },
    { key: 8, reg: 22008, name: "Student 8", courses: [] },
    { key: 9, reg: 22009, name: "Student 9", courses: [] },
    { key: 10, reg: 22010, name: "Student 10", courses: [] },
  ];

  return (
    <div className={classes.StudentsListDiv}>
      <ListWrapper>
        {StudentsData.map((student) => (
          <ListItem key={student.key} reg={student.reg} name={student.name} />
        ))}
      </ListWrapper>
    </div>
  );
};

export default StudentsList;
