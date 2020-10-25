import _ from "lodash";
import "core-js/stable";
import "regenerator-runtime/runtime";
import Triangle from "./js/triangle";

import "./less/main.less";

import csv from "./assets/data/data.csv";
console.log(csv);

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

let t = new Triangle(1, 2, 3);
console.log(t.p());

document.body.appendChild(component());
