import React, { useContext } from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import Features from "./Features";
import Banner from "./Banner";
import Blog from "./Blog";
import { AdminContext } from "../context/AdminProvider";

export const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Features />
      <Banner />
      <Blog />
    </>
  );
};
