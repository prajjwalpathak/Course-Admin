import classes from "./Main.module.css";

const Main = (props) => {
  return <div className={classes.MainDiv}>{props.children}</div>;
};

export default Main;
