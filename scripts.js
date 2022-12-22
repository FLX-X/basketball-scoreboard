let countHome = 0
let countGuest = 0
let countHomeEl = document.getElementById("count-home")
let countGuestEl = document.getElementById("count-guest")

function addHomeOne() {
    countHome++;
    countHomeEl.textContent = countHome;
    console.log(`el conteo para Home es ${countHome}`);
}

function addHomeTwo() {
    countHome +=2
    countHomeEl.textContent = countHome;
    console.log(`el conteo para Home es ${countHome}`);
}

function addHomeThree() {
    countHome +=3
    countHomeEl.textContent = countHome;
    console.log(`el conteo para Home es ${countHome}`);
}

function addGuestOne() {
    countGuest++;
    countGuestEl.textContent = countGuest;
    console.log(`el conteo para Guest es ${countGuest}`);
}

function addGuestTwo() {
    countGuest +=2
    countGuestEl.textContent = countGuest;
    console.log(`el conteo para Guest es ${countGuest}`);
}

function addGuestThree() {
    countGuest +=3
    countGuestEl.textContent = countGuest;
    console.log(`el conteo para Guest es ${countGuest}`);
}