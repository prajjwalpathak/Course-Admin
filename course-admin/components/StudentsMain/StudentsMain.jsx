import PaginationPage from "../PaginationPage/PaginationPage";
import classes from "./StudentsMain.module.css";

const StudentsMain = () => {
  return (
    <div className={classes.StudentsMainDiv}>
      <PaginationPage />
    </div>
  );
};

export default StudentsMain;
