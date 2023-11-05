let homeScoreEl = document.getElementById("home-score-el");
let guestScoreEl = document.getElementById("guest-score-el");

let countHome = 0;
let countGuest = 0;

function onePointHome() {
  countHome = countHome + 1;
  homeScoreEl.textContent = countHome;
}

function twoPointHome() {
  countHome = countHome + 2;
  homeScoreEl.textContent = countHome;
}

function threePointHome() {
  countHome = countHome + 3;
  homeScoreEl.textContent = countHome;
}

function onePointGuest() {
  countGuest = countGuest + 1;
  guestScoreEl.textContent = countGuest;
}

function twoPointGuest() {
  countGuest = countGuest + 2;
  guestScoreEl.textContent = countGuest;
}

function threePointGuest() {
  countGuest = countGuest + 3;
  guestScoreEl.textContent = countGuest;
}

function newGame() {
  homeScoreEl.textContent = 0;
  guestScoreEl.textContent = 0;
}
