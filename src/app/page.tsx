import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";
import FooterScale from "./components/FooterScale";
import TopPicks from "./components/TopPicks";
import Heading from "./components/Heading";
import NewArrival from "./components/NewArrival";
import Blog from "../app/components/Blog";
import Instagram from "./components/Instagram";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CardSection />
      <Heading />
      <TopPicks />
      <NewArrival />
      <Blog />
      <Instagram />
      <Footer />
      <FooterScale />
    </div>
  );
};

export default page;
