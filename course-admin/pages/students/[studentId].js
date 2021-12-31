import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import StudentMain from "../../components/StudentMain/StudentMain";
import classes from "../../styles/Student.module.css";

const Student = () => {
  return (
    <div className={classes.StudentDiv}>
      <Head>
        <title>Students - Student</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NavBar />
      <StudentMain />
      <Footer />
    </div>
  );
};

export default Student;
