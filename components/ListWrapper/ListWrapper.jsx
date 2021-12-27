import classes from "./ListWrapper.module.css";

const ListWrapper = (props) => {
  return <div className={classes.ListWrapperDiv}>{props.children}</div>;
};

export default ListWrapper;
