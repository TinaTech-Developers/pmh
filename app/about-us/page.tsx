import React from "react";
import PageHero from "../components/PageHero";
import About from "../components/About";
import ImpactStories from "../components/ImpactStories";
import Promotion from "../components/Promotion";

export default function page() {
  return (
    <>
      <PageHero />
      <About />
      <ImpactStories />
      <Promotion />
    </>
  );
}
