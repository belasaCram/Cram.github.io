"use strict";

/**
 * Light and dark mode
 */

const $themeBtn = document.querySelector("[data-theme-btn]"); //NodeElement
const $HTML = document.documentElement; //NodeElement
let isDark = window.matchMedia("(prefers-color-scheme: light)").matches;

if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  sessionStorage.setItem("theme", $HTML.dataset.theme);
}

const changeTheme = () => {
  $HTML.dataset.theme =
    sessionStorage.getItem("theme") === "light" ? "dark" : "light";
  sessionStorage.setItem("theme", $HTML.dataset.theme);
};

$themeBtn.addEventListener("click", changeTheme);
