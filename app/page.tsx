// Landing Page

import DesktopAndMobile from "./Landing_page/components/desktopAndMobile";
import DevComment from "./Landing_page/components/devComment";
import Features from "./Landing_page/components/features";
import Header from "./Landing_page/components/header";
import Macbook from "./Landing_page/components/macbook";
import Questions from "./Landing_page/components/questions";

const Home = () => {
  return (
    <>
      <Header />
      <Macbook />
      <Features />
      <DevComment />
      <DesktopAndMobile />
      <Questions />
    </>
  );
};

export default Home;
