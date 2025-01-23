import './style.css'

const clientPosition = document.getElementById("clientPosition");
const offsetPosition = document.getElementById("offsetPosition");
const pagePosition = document.getElementById("pagePosition");
const screenPosition = document.getElementById("screenPosition");
const movementPosition = document.getElementById("movementPosition");

let textClientPosition = "clientX/clientY : ";
let textOffsetPosition = "offsetX/offsetY : ";
let textPagePosition = "pageX/pageY : ";
let textScreenPosition = "screenX/screenY : ";
let textMovementPosition = "movementX/movementY : ";

clientPosition.innerText = textClientPosition;
offsetPosition.innerText = textOffsetPosition;
pagePosition.innerText = textPagePosition;
screenPosition.innerText = textScreenPosition;
movementPosition.innerText = textMovementPosition;
