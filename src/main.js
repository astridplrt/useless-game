import "./style.css"

let textClientSpan = "";
let textOffsetSpan = "";
let textPageSpan = "";
let textScreenSpan = "";
let textMovementSpan = "";

  playZone.addEventListener("mousemove", (event) => {
    console.log("playZone.addEventListener");

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
