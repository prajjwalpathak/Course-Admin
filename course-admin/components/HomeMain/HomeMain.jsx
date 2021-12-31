import Image from "next/image";
import classes from "./HomeMain.module.css";

const HomeMain = () => {
  return (
    <div className={classes.HomeMainDiv}>
      <Image src={"/cap.png"} width={330} height={200} alt={"University"} />
      <h1>XYZ University</h1>
      <p>Application for Course Administrator</p>
    </div>
  );
};

export default HomeMain;
