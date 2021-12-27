import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import StudentsMain from "../../components/StudentsMain/StudentsMain";

const Students = () => {
  return (
    <div className="StudentsDiv">
      <Head>
        <title>Course Admin - Students</title>
      </Head>
      <NavBar />
      <StudentsMain />
      <Footer />
    </div>
  );
};

export default Students;
