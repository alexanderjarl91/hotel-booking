import React, { Component } from "react";
import Title from "./Title";

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Every guest gets a complimentary cocktail upon arrival. We also have alcohol free drinks.",
      },
      {
        icon: <FaHiking />,
        title: "Hiking trips",
        info: "Let our receptionist help you book guided tours!",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttles",
        info: "We offer free shuttles downtown at 9PM every evening.",
      },
      {
        icon: <FaBeer />,
        title: "Huge Beer Selection",
        info:
          "Our bar has a very large selection of beers brewed here in Iceland.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
