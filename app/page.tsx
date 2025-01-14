// Landing Page

import DesktopAndMobile from "./Landing_page/components/desktopAndMobile";
import DevComment from "./Landing_page/components/devComment";
import Features from "./Landing_page/components/features";
import Header from "./Landing_page/components/header";
import Macbook from "./Landing_page/components/macbook";

const Home = () => {
  return (
    <>
      <Header />
      <Macbook />
      <Features />
      <DevComment />
      <DesktopAndMobile />
    </>
  );
};

export default Home;
