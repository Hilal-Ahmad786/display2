/* eslint-disable @next/next/no-img-element */
import React from "react";
import FlatPackIntro from "../../components/FlatpackIntro";
import BuroContainerIntro from "../../components/BuroContainerIntro";
import XlContainerIntro from "../../components/XlContainerIntro";
import SanitaContainerIntro from "../../components/SanitaContainerIntro";
import SpecialEditionIntro from "../../components/SpecialEditionIntro";
import AccesoriesIntro from "../../components/AccesoriesIntro";


import LightLayout from "../../layouts/light";



const Home1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout footerClass={"mt-30"}>
      <FlatPackIntro />
      <BuroContainerIntro />
      <XlContainerIntro />
      <SanitaContainerIntro />
      <SpecialEditionIntro />
      <AccesoriesIntro />
    </LightLayout>
  );
};

export default Home1;
