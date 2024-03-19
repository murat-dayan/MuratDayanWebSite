import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out my projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/notesappjp.png"
              text="Notes App With Jetpack Compose"
              label="Kotlin"
              path="https://github.com/murat-dayan/NotesAppJetpackCompose"
            />
            <CardItem
              src="images/fakestore.jpg"
              text="Fake Store Mobile App With Kotlin Xml"
              label="Kotlin"
              path="https://github.com/murat-dayan/FakeStore"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/notetakingapp.png"
              text="Notes App With React-Native Typescript"
              label="React-Native"
              path="https://github.com/murat-dayan/NoteTakingAppRNTypescript"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
