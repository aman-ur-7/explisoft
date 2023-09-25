import React from "react";
import Header from "../SmallComponents.jsx/Header";
import busAni from "../../assets/busAni.png";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="home-page">
        <div className="businss-add">
          <h1>Grow your business with Explisoft</h1>
          <h3>Making technology accessible to small and medium businesses</h3>
          <h3>
            Explisoft offers website development services at an affordable price
            of just 10,000 rupees per year.
          </h3>
        </div>
        <div className="business-animation">
          <img src={busAni}></img>
        </div>
      </section>
    </div>
  );
};

export default Home;
