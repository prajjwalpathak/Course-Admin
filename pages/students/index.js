import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

const Students = () => {
  return (
    <div className="StudentsDiv">
      <Head>
        <title>Course Admin - Students</title>
      </Head>
      <NavBar />
      <Footer />
    </div>
  );
};

export default Students;
