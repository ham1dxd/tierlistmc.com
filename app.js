const players = document.querySelectorAll(".players");
const lowplayers = document.querySelectorAll(".lowplayers");
const firstskill = document.querySelector("#firstskill");
const container = document.querySelector(".container");
const close = document.querySelector("#close");
const nethTier = document.querySelector("#nethtext");
const swordTier = document.querySelector("#swordtext");
const crystalTier = document.querySelector("#crystaltext");
const potTier = document.querySelector("#pottext");
const axeTier = document.querySelector("#axetext");
const uhcTier = document.querySelector("#uhctext");
const smpTier = document.querySelector("#smptext");
const playerid = document.querySelector(".playerid");
const searchInput = document.querySelector("#search");

const displayPlayerDetails = (playerName) => {
    firstskill.style.display = "flex";
    container.style.opacity = "40%";
    firstskill.style.zIndex = '1001';
    container.style.position = "fixed";
    nethTier.innerText = "HT1";
    crystalTier.innerText = "HT1";
    swordTier.innerText = "HT3";
    uhcTier.innerText = "";
    axeTier.innerText = "";
    smpTier.innerText = "LT2";
    potTier.innerText = "HT2";
    playerid.innerText = playerName;
};

players.forEach(player => {
    player.addEventListener("click", function() {
        const playerName = player.querySelector('.playername').innerText;
        displayPlayerDetails(playerName);
    });
});

lowplayers.forEach(lowplayer => {
    lowplayer.addEventListener("click", function() {
        const playerName = lowplayer.querySelector('.playername').innerText;
        displayPlayerDetails(playerName);
    });
});

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const searchValue = searchInput.value.toLowerCase().trim();
        let playerFound = false;

        players.forEach(player => {
            const playerName = player.querySelector('.playername').innerText.toLowerCase();
            if (playerName === searchValue) {
                displayPlayerDetails(player.querySelector('.playername').innerText);
                playerFound = true;
            }
        });

        if (!playerFound) {
            firstskill.style.display = "none";
            container.style.opacity = "100%";
            container.style.position = "relative";
        }
    }
});

close.addEventListener("click", function() {
    firstskill.style.display = "none";
    container.style.opacity = "100%";
    container.style.position = "relative";
});
