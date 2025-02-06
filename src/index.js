import "./styles/styles.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import backgroundImage from "./ios.jpg";

const contentDiv = document.querySelector(".content");
contentDiv.style.backgroundImage = `url(${backgroundImage})`;

document.addEventListener("DOMContentLoaded", () => {
    setActiveButton(document.querySelector('.homebtn'));
    loadHome();
});

function setActiveButton(activeButton) {
    document.querySelectorAll(".navbtn").forEach(bt => {
        bt.style.backgroundColor = "";
        bt.style.color = ""
    });
    activeButton.style.backgroundColor = "#2e3e4e";
    activeButton.style.color = "white"
}

document.querySelector('.homebtn').addEventListener("click", () => {
    setActiveButton(document.querySelector('.homebtn'));
    loadHome();
});

document.querySelector('.menubtn').addEventListener("click", () => {
    setActiveButton(document.querySelector('.menubtn'));
    loadMenu();
});

document.querySelector('.contactbtn').addEventListener("click", () => {
    setActiveButton(document.querySelector('.contactbtn'));
    loadContact();
});
