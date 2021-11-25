import "./component/script/item-movie.js";
import "./component/script/item-trending-movie.js";
import main from "./component/main.js";

import "regenerator-runtime";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

document.addEventListener("DOMContentLoaded", main);
const navbar = document.querySelector('.navbar');

window.addEventListener("scroll",() => {
    const scrollY = window.scrollY;
    if (scrollY < 20) {
        navbar.classList.remove('shadow-sm');
    } else {
        navbar.classList.add('shadow-sm');
    }
});