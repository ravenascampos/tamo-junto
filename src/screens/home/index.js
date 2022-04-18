import React from "react";
import HomeDescription from "./components/HomeDescription";
import Purpose from "./components/Purpose";
import SwiperHome from "./components/SwiperHome";
import SwiperTestimonial from "./components/SwiperTestimonial";
import SwiperThemes from "./components/SwiperThemes";

export default function HomeScreen() {
  return (
    <>
      <HomeDescription />
      <SwiperHome />
      <Purpose />
      <SwiperThemes />
      <SwiperTestimonial />
    </>
  );
}
