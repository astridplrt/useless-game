import "./fetch.css"

const fetchText = document.getElementById("fetchText");
const fetchButton = document.getElementById("fetchButton");
const resetButton = document.getElementById("resetButton");

fetchText.innerText = "Country : ";

fetchButton.addEventListener("click", () => {
    fetch("https://ip-info.workers.rocks/?format=json")
    .then((result) => {
        if (result.ok) {
            return result.json();
        }
    })
    .then((value) => {
        fetchText.innerText = "Country : " + value.country;
    })
    .catch((error) => {
        console.log("Une erreur est survenue : ", error)
    });
})

resetButton.addEventListener("click", () => {
    fetchText.innerText = "Country : ";
})
