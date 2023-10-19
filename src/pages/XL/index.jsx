/* eslint-disable @next/next/no-img-element */
import React from "react";
import AfterBefore  from "../../components/After-Before";
import ProjectVideo from "../../components/Project-Video";

import InnerDetail from "../../components/Inner-detail";
import LightLayout from "../../layouts/light";
import Portfolio2 from "../../components/Portfolio2";
import XlBack from "../../components/XlBack";
import WorkFourColumn from "../../components/Work-Four-Column";
import XlIntro from "../../components/XLIntro";
import XLAfterBefore from "../../components/XLAfterBefore";
import XlColour from "../../components/XlColour";
import Xl4pic from "../../components/Xl4pic";


const Home1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout footerClass={"mt-30"}>
      <XlIntro />
      <XLAfterBefore />
      <XlColour />
      <InnerDetail />
      <XlBack/>
      <ProjectVideo />
      <Xl4pic />
     
    </LightLayout>

  );
};

export default Home1;
