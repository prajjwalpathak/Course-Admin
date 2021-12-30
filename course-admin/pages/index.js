import Head from "next/head";
import Footer from "../components/Footer/Footer";
import HomeMain from "../components/HomeMain/HomeMain";
import NavBar from "../components/NavBar/NavBar";

const Homepage = () => {
  return (
    <div className="HomepageDiv">
      <Head>
        <title>Course Admin</title>
      </Head>
      <NavBar />
      <HomeMain />
      <Footer />
    </div>
  );
};

export default Homepage;
