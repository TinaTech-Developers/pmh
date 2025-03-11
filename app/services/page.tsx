import React from "react";
import WhyUs from "../components/WhyUs";
import PageHero from "../components/PageHero";
import ServicesSlider from "../components/ServicesSlider";

export default function page() {
  return (
    <>
      <PageHero title="Services" />
      <WhyUs />
      <ServicesSlider />
    </>
  );
}
