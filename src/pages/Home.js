import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

import { Link } from "react-router-dom";
import Services from "../components/Services";
import { FaRProject } from "react-icons/fa";
import FeaturedRooms from "../components/FeaturedRooms";

const Home = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner
          title="Luxurious rooms"
          subtitle="deluxe rooms in Iceland starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
