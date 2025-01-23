import './style.css'

const clientPosition = document.getElementById("clientPosition");
const offsetPosition = document.getElementById("offsetPosition");
const pagePosition = document.getElementById("pagePosition");
const screenPosition = document.getElementById("screenPosition");
const movementPosition = document.getElementById("movementPosition");

let textClient = "clientX/clientY : ";
let textOffset = "offsetX/offsetY : ";
let textPage = "pageX/pageY : ";
let textScreen = "screenX/screenY : ";
let textMovement = "movementX/movementY : ";

let textClientExplain = " dans les coordonnées locales (contenu du DOM)";
let textOffsetExplain = " par rapport à cet encadré (sur lequel on écoute l'event)";
let textPageExplain = " par rapport au document entier";
let textScreenExplain = " par rapport à à la fenêtre du navigateur";
let textMovementExplain = " par rapport à sa position lors du dernier event mousemove";

clientPosition.innerText = textClient;
offsetPosition.innerText = textOffset;
pagePosition.innerText = textPage;
screenPosition.innerText = textScreen;
movementPosition.innerText = textMovement;

clientPosition.setAttribute("title", textClientExplain)
offsetPosition.setAttribute("title", textOffsetExplain)
pagePosition.setAttribute("title", textPageExplain)
screenPosition.setAttribute("title", textScreenExplain)
movementPosition.setAttribute("title", textMovementExplain)
