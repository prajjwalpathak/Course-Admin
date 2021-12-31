import Image from "next/image";
import classes from "./StudentCard.module.css";

const StudentCard = ({ reg, name }) => {
  return (
    <div className={classes.StudentCardDiv}>
      <div className={classes.imageDiv}>
        <Image
          src={"/student.png"}
          width={100}
          height={100}
          alt={"Student"}
          className={classes.image}
        />
      </div>

      <div className={classes.infoDiv}>
        <div className={classes.regDiv}>
          <h3 className={classes.title}>Registration ID</h3>
          <span className={classes.value}>{reg}</span>
        </div>
        <div className={classes.nameDiv}>
          <h3 className={classes.title}>Student Name</h3>
          <span className={classes.value}>{name}</span>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
