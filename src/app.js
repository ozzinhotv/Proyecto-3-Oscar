/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronuon = ["That", "My", "This", "A"];
  let subject = ["dog", "police", "players", "driver"];
  let action = ["ate my", "rip off my", "threw my", "stole my"];
  let thing = ["food", "homework", "medicine", "strategies"];
  let where = ["at the park", "on the street", "in school", "at the driveway"];

  let proIndx = Math.floor(Math.random() * pronuon.length);
  let subIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let thiIndx = Math.floor(Math.random() * thing.length);
  let wheIndx = Math.floor(Math.random() * where.length);

  return (
    pronuon[proIndx] +
    " " +
    subject[subIndx] +
    " " +
    action[actIndx] +
    " " +
    thing[thiIndx] +
    " " +
    where[wheIndx]
  );
};
