import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import StudentMain from "../../components/StudentMain/StudentMain";

const Student = () => {
  return (
    <div className="StudentDiv">
      <Head>
        <title>Students - Student</title>
      </Head>
      <NavBar />
      <StudentMain />
      <Footer />
    </div>
  );
};

export default Student;
