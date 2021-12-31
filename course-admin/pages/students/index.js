import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import StudentsMain from "../../components/StudentsMain/StudentsMain";
import classes from "../../styles/Student.module.css";

const Students = () => {
  return (
    <div className={classes.StudentsDiv}>
      <Head>
        <title>Course Admin - Students</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NavBar />
      <StudentsMain />
      <Footer />
    </div>
  );
};

export default Students;
