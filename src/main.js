import "./style.css";
import "./config.js";

const clientPositionSpan = document.querySelector("#clientPosition + span");
const offsetPositionSpan = document.querySelector("#offsetPosition + span");
const pagePositionSpan = document.querySelector("#pagePosition + span");
const screenPositionSpan = document.querySelector("#screenPosition + span");
const movementPositionSpan = document.querySelector("#movementPosition + span");

let textClientSpan = "";
let textOffsetSpan = "";
let textPageSpan = "";
let textScreenSpan = "";
let textMovementSpan = "";

playZone.addEventListener("mousemove", (event) => {
  textClientSpan = `${event.clientX} / ${event.clientY}`;
  textOffsetSpan = `${event.offsetX} / ${event.offsetY}`;
  textPageSpan = `${event.pageX} / ${event.pageY}`;
  textScreenSpan = `${event.screenX} / ${event.screenY}`;
  textMovementSpan = `${event.movementX} / ${event.movementY}`;

  clientPositionSpan.innerText = textClientSpan;
  offsetPositionSpan.innerText = textOffsetSpan;
  pagePositionSpan.innerText = textPageSpan;
  screenPositionSpan.innerText = textScreenSpan;
  movementPositionSpan.innerText = textMovementSpan;
});
