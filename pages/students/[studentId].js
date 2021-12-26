import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

const Student = () => {
  return (
    <div className="StudentDiv">
      <Head>
        <title>Students - Student</title>
      </Head>
      <NavBar />
      <Footer />
    </div>
  );
};

export default Student;
