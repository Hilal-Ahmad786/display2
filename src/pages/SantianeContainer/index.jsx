/* eslint-disable @next/next/no-img-element */
import React from "react";
import AfterBefore  from "../../components/After-Before";
import ProjectVideo from "../../components/Project-Video";

//**  import ColorSelector from "../../components/ColorSelector"; *//
import LightLayout from "../../layouts/light";
import Portfolio2 from "../../components/Portfolio2";
import SanitaBack from "../../components/Sanitaback";
import WorkFourColumn from "../../components/Work-Four-Column";
import SanitaIntro from "../../components/SanitaIntro";
import SanitaAfterBefore from "../../components/SanitaAfterBefore";
import SanitaColour from "../../components/SanitaColour";
import SanitaInnerDetail from "../../components/SanitaInnerDetail";
import Sanita4Pic from "../../components/Sanita4Pic";
import ColorSelector from "../../components/ColorSelector";


const Home1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout footerClass={"mt-30"}>
    <SanitaIntro />
    <SanitaAfterBefore />
      
      <ColorSelector />
      <SanitaInnerDetail />
      <SanitaBack />
      <ProjectVideo />
      <Sanita4Pic />
    </LightLayout>
  );
};

export default Home1;

//* <ColorSelector /> *//
