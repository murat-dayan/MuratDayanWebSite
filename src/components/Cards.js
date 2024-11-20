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
              src="images/img-lessonline.png"
              text="Social Media App With Kotlin Mvvm"
              label="Kotlin"
              path="https://github.com/murat-dayan/LessOnline"
            />
            <CardItem
              src="images/img-offlinenews.png"
              text="Offline and online news app with Kotlin MVI"
              label="Kotlin"
              path="https://github.com/murat-dayan/Offline-News-App"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/epasaj.jpg"
              text="E commerce App With Mvvm "
              label="Kotlin"
              path="https://github.com/murat-dayan/E-Pasaj"
            />
            <CardItem
              src="images/movieapp.png"
              text="Movie App With Jetpack Compose With MVVM Pattern"
              label="Kotlin"
              path="https://github.com/murat-dayan/MovieApp"
            />
          </ul>
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
            <CardItem
              src="images/alpersoraravci.jfif"
              text="Quiz App About Space"
              label="Flutter"
              path="https://github.com/murat-dayan/AlperSorarAvci"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
