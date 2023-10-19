/* eslint-disable @next/next/no-img-element */
import React from "react";
import Con11Intro from "../../components/Con11Intro";
import Con11AfterBefore from "../../components/Con11AfterBefore";

import ProjectVideo from "../../components/Project-Video";
import InnerDetail from "../../components/Inner-detail";
import LightLayout from "../../layouts/light";
import Portfolio2 from "../../components/Portfolio2";
import ConBack11 from "../../components/Con11Back";
import WorkFourColumn from "../../components/Work-Four-Column";
import ConAnimi from "../../components/ConAnimi";


const Home1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout footerClass={"mt-30"}>
      <Con11Intro />
      <Con11AfterBefore />
      <WorkFourColumn />
      <InnerDetail />  
      <ConBack11/>
      <ProjectVideo />
      <Portfolio2 />
      <ConAnimi />
    </LightLayout>
  );
};

export default Home1;
