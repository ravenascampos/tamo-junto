import React from "react";
import HomeDescription from "./components/HomeDescription";
import SwiperPurpose from "./components/SwiperPurpose";
import Purpose from "./components/Purpose";
import SwiperThemes from "./components/SwiperThemes";
import SwiperTestimonial from "./components/SwiperTestimonial";
import Faq from "./components/Faq";
import DownloadNow from "./components/DownloadNow";
import ContactSection from "./components/ContactSection";

export default function HomeScreen() {
  return (
    <>
      <HomeDescription />
      <SwiperPurpose />
      <Purpose />
      <SwiperThemes />
      <SwiperTestimonial />
      <Faq />
      <DownloadNow />
      <ContactSection />
    </>
  );
}
