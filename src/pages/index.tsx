import React from "react";
import HomeSlider from "../../components/home/HomeSlider";
import Login from "../../components/home/Login";
import Marque from "../../components/home/Marque";
import CategoryGame from "../../components/home/CategoryGame/CategoryGame";
import GameHotHome from "../../components/home/GameHotHome";
import CategoryGameSkeleton from "../../components/layout/CategoryGameSkeleton";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Home() {
  const {isFetchingCategory} = useSelector((state: RootState) => state.account)

  return (
    <>
      <HomeSlider/>
      <Login />
      <Marque />
      <CategoryGame />
      {!isFetchingCategory ? <GameHotHome /> :
      <CategoryGameSkeleton/>}
    </>
  )
}

