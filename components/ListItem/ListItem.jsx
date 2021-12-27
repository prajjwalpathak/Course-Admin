import Link from "next/link";
import classes from "./ListItem.module.css";

const ListItem = (props) => {
  return (
    <Link href={`/students/${props.reg}`} >
      <a className={classes.link}>
        <span className={classes.reg}>{props.reg}</span>
        <span className={classes.name}>{props.name}</span>
      </a>
    </Link>
  );
};

export default ListItem;
