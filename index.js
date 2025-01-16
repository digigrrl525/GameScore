let point = 0

let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")
let setScore = document.getElementById("reset")

function plusOneHome() {
    point += 1
    homeScore.textContent = point
}

function plusTwoHome() {
    point += 2
    homeScore.textContent = point
}

function plusThreeHome() {
    point += 3
    homeScore.textContent = point
}

function plusOneGuest() {
    point += 1
    guestScore.textContent = point
}

function plusTwoGuest() {
    point += 2
    guestScore.textContent = point
}

function plusThreeGuest() {
    point += 3
    guestScore.textContent = point
}

function resetScore() {
    point = 0
    guestScore.textContent = point
    homeScore.textContent = point
}
