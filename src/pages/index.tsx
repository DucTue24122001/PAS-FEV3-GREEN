import React from "react";
import HomeSlider from "../../components/home/HomeSlider";
import Login from "../../components/home/Login";
import Marque from "../../components/home/Marque";
import CategoryGame from "../../components/home/CategoryGame/CategoryGame";

export default function Home() {
  return (
    <>
      <HomeSlider/>
      <Login />
      <Marque />
      <CategoryGame />
    </>
  )
}

