import React from "react";
import HomeDescription from "./components/HomeDescription";
import Purpose from "./components/Purpose";
import SwiperHome from "./components/SwiperHome";

export default function HomeScreen() {
  return (
    <>
      <HomeDescription />
      <SwiperHome />
      <Purpose />
    </>
  );
}
