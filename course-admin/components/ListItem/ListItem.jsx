import Link from "next/link";
import classes from "./ListItem.module.css";

const ListItem = ({ reg, name }) => {
  return (
    <div className={classes.listItem}>
      <Link href={`/students/${reg}`}>
        <a className={classes.link}>
          <span className={classes.reg}>{reg}</span>
          <span className={classes.name}>{name}</span>
        </a>
      </Link>
    </div>
  );
};

export default ListItem;
