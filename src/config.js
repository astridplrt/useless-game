/*****************************/
/*** Mousemove page (main) ***/

/*** HTML elements ***/
const playZone = document.getElementById("playZone");

const clientPosition = document.getElementById("clientPosition");
const offsetPosition = document.getElementById("offsetPosition");
const pagePosition = document.getElementById("pagePosition");
const screenPosition = document.getElementById("screenPosition");
const movementPosition = document.getElementById("movementPosition");

const clientPositionSpan = document.querySelector("#clientPosition + span");
const offsetPositionSpan = document.querySelector("#offsetPosition + span");
const pagePositionSpan = document.querySelector("#pagePosition + span");
const screenPositionSpan = document.querySelector("#screenPosition + span");
const movementPositionSpan = document.querySelector("#movementPosition + span");

/*** texts ***/
const textClient = "clientX/clientY : ";
const textOffset = "offsetX/offsetY : ";
const textPage = "pageX/pageY : ";
const textScreen = "screenX/screenY : ";
const textMovement = "movementX/movementY : ";

const textClientExplain = " dans les coordonnées locales (contenu du DOM)";
const textOffsetExplain = " par rapport à cet encadré (sur lequel on écoute l'event)";
const textPageExplain = " par rapport au document entier";
const textScreenExplain = " par rapport à à la fenêtre du navigateur";
const textMovementExplain = " par rapport à sa position lors du dernier event mousemove";

/*** texts positioning ***/
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
