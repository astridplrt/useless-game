import "../style.css";
import "./fetch.css";

const fetchText = document.getElementById("fetchText");
const destinyText = document.getElementById("destinyText");
const fetchButton = document.getElementById("fetchButton");
const resetButton = document.getElementById("resetButton");
const nameInput = document.getElementById("name");

const wantInputs = document.querySelectorAll('[name="want"]');
const destinyInputs = document.querySelectorAll('[name="destiny"]');

function checkedRadioInput(elts) {
  for (var i = 0; i < elts.length; i++) {
    if (elts[i].checked === true) {
      return elts[i];
    }
  }
  return null;
}

fetchText.innerText = "I am a good boy ?";

fetchButton.addEventListener("click", (event) => {
    event.preventDefault();
  fetch("https://mockbin.workers.rocks/request", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameInput.value,
      want: checkedRadioInput(wantInputs)?.value,
      destiny: checkedRadioInput(destinyInputs)?.value,
    }),
  })
    .then((result) => {
      if (result.ok) {
        return result.json();
      }
    })
    .then((value) => {
      fetchText.innerText = "Here is your destiny, " + value.postData.text;
      console.log(value.postData);
      destinyText.innerText = value.fetchGame.response;
    })
    .catch((error) => {
      console.log("Une erreur est survenue : ", error);
    });
});

resetButton.addEventListener("click", () => {
  fetchText.innerText = "I am a good boy ?";
  destinyText.innerText = "";
});
