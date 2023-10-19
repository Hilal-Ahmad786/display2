/* eslint-disable @next/next/no-img-element */
import React from "react";
import AfterBefore  from "../../components/After-Before";
import ProjectVideo from "../../components/Project-Video";

import IntroWithHorizontalSec1 from "../../components/Intro-with-horizontal-sec1";
import InnerDetail from "../../components/Inner-detail";
import LightLayout from "../../layouts/light";
import Portfolio2 from "../../components/Portfolio2";
import AboutUs3 from "../../components/About-Us3";
import WorkFourColumn from "../../components/Work-Four-Column";


const Home1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout footerClass={"mt-30"}>
      <IntroWithHorizontalSec1 />
      <AfterBefore />
      <WorkFourColumn />
      <InnerDetail />
      
      <AboutUs3 />
      <ProjectVideo />
      <Portfolio2 />
    </LightLayout>
  );
};

export default Home1;
