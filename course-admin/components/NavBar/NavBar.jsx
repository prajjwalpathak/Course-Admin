import Link from "next/link";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.NavBarDiv}>
      <h1 className={classes.title}>Course Admin</h1>
      <ul className={classes.unorderedList}>
        <li>
          <Link href="/">
            <a className={classes.link}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/students">
            <a className={classes.link}>Students</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
