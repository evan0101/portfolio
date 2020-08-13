import Navigation from "components/Navigation";
import Header from "components/Header";
import About from "components/About";
import Experience from "components/Experience";
import Work from "components/Work";
import Head from "next/head";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Evan M. - Full Stack Developer / Designer</title>
      </Head>
      <Navigation />
      <Header />
      <About />
      <Experience />
      <Work />
    </>
  );
};

export default IndexPage;
