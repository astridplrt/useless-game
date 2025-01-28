import "../style.css";
import "./fetch.css";

const fetchText = document.getElementById("fetchText");
const destinyText = document.getElementById("destinyText");
const fetchButton = document.getElementById("fetchButton");
const resetButton = document.getElementById("resetButton");
const nameInput = document.getElementById("name");
const wantInputs = document.querySelectorAll('[name="want"]');
const destinyInputs = document.querySelectorAll('[name="destiny"]');
const invalidFOrm = document.getElementById("invalidFOrm");
const invalidName = document.getElementById("invalidName");
const invalidWant = document.getElementById("invalidWant");
const invalidDestiny = document.getElementById("invalidDestiny");

function checkedRadioInput(elts) {
  for (var i = 0; i < elts.length; i++) {
    if (elts[i].checked === true) {
      return elts[i];
    }
  }
  return null;
}

function isInputchecked(elts) {
  for (var i = 0; i < elts.length; i++) {
    if (elts[i].checked === true) {
      return true;
    }
  }
  return false;
}

fetchText.innerText = "I am a good boy ?";

nameInput.addEventListener("input", () => {
  if (nameInput.value === "") {
    invalidName.innerText = "Please provide a name";
  } else {
    invalidName.innerText = "";
  }
});

fetchButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("isInputchecked(wantInputs) ", isInputchecked(wantInputs));
  console.log("isInputchecked(destinyInputs) ", isInputchecked(destinyInputs));
  console.log("nameInput ", nameInput);

  if (
    nameInput.value !== "" &&
    isInputchecked(wantInputs) &&
    isInputchecked(destinyInputs)
  ) {
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
        fetchText.innerText = `Hello ${value.postData.text}.`;
        console.log(value.postData);
        destinyText.innerText = value.fetchGame.response;
      })
      .catch((error) => {
        console.log("Une erreur est survenue : ", error);
      });
  } else {
    if (nameInput.value === "") {
      invalidName.innerText = "Please provide a name";
    }
    if (!isInputchecked(wantInputs)) {
      invalidWant.innerText = "Please choose what you want to do";
    }
    if (!isInputchecked(destinyInputs)) {
      invalidDestiny.innerText = "Please choose a destiny";
    }
  }
});

resetButton.addEventListener("click", () => {
  fetchText.innerText = "I am a good boy ?";
  destinyText.innerText = "";
});
