"use strict";

window.onload = () => {
    const nav = document.querySelector("nav");
    const openNav = document.getElementById("open-nav");

    openNav.onclick = () => {
        const style = window.getComputedStyle(nav);

        if (style.display === "none") {
            nav.style.display = "block";
            openNav.innerHTML = "CLOSE";
        } else {
            nav.style.display = "none";
            openNav.innerHTML = "OPEN";
        }

        /* const state = (style.display === "none") ? nav.style.display = "block" : nav.style.display = "none"; */
    }
}