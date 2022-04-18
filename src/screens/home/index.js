import React from "react";
import HomeDescription from "./components/HomeDescription";
import SwiperPurpose from "./components/SwiperPurpose";
import Purpose from "./components/Purpose";
import SwiperThemes from "./components/SwiperThemes";
import SwiperTestimonial from "./components/SwiperTestimonial";
import DownloadNow from "./components/DownloadNow";

export default function HomeScreen() {
  return (
    <>
      <HomeDescription />
      <SwiperPurpose />
      <Purpose />
      <SwiperThemes />
      <SwiperTestimonial />
      <DownloadNow />
    </>
  );
}
