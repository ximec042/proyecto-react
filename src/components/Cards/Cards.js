import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="assets/images/img-1.jpg"
              text="Explode the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="home"
            />
            <CardItem
              src="assets/images/img-2.jpg"
              text="Explode the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="home"
            />
         
          </ul>
          <ul className="cards__items">
            <CardItem
              src="assets/images/img-3.jpg"
              text="Explode the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="home"
            />
            <CardItem
              src="assets/images/img-4.jpg"
              text="Explode the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="home"
            />
            <CardItem
              src="assets/images/img-5.jpg"
              text="Explode the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="home"
            />
        
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
