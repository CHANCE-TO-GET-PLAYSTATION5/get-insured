// Countdown Timer (30 Minutes)
let timer = 30 * 60; // 30 minutes in seconds
const countdownEl = document.getElementById('timer');

function updateTimer() {
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.textContent = `${minutes}:${seconds}`;
    if (timer > 0) {
        timer--;
        setTimeout(updateTimer, 1000);
    } else {
        countdownEl.textContent = "Time's up!";
    }
}

updateTimer();

// Fake FOMO Counter
function updateFOMO() {
    let randomEntries = Math.floor(Math.random() * 10) + 30; // Random 30-40 entries
    // document.querySelector('.fomo').innerHTML = `✅ ${randomEntries} people entered in the last 5 minutes!`;
}
setInterval(updateFOMO, 10000); // Update every 10 seconds

// Redirect to Affiliate Link
function submitEntry() {
    let name = document.getElementById('name').value;
    if (name === "") {
        alert("Please enter your name!");
        return;
    }
    window.location.href = "https://afflat3d2.com/trk/lnk/74C1DBEB-50FE-447B-8E84-205EAB7C4C12/?o=19692&c=918277&a=739788&k=BC36511AB81E67FACCCE87C11681AC73&l=20643";
}

