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
const firstbox = document.getElementById("1stbox");
const secondbox = document.getElementById("2ndbox");
const thirdbox = document.getElementById("3rdbox");
const fourthbox = document.getElementById("4thbox");
const fifthbox = document.getElementById("5thbox");

const displayPlayerDetails = (playerName, playerElement) => {
    firstskill.style.display = "flex";
    container.style.opacity = "40%";
    firstskill.style.zIndex = '1001';
    container.style.position = "fixed";
    const playerBackgroundColor = getComputedStyle(playerElement).backgroundColor;

//        First Box

    if (playerElement.parentElement === firstbox && playerBackgroundColor === `rgb(62, 113, 244)`) {
        nethTier.innerText = "HT1";
    } else if(playerElement.parentElement === firstbox && playerBackgroundColor === `rgb(135, 206, 250)`){
        nethTier.innerText = "LT1";
    }

//        Second Box

    if (playerElement.parentElement === secondbox && playerBackgroundColor === `rgb(62, 113, 244)`) {
        nethTier.innerText = "HT2";
    } else if(playerElement.parentElement === secondbox && playerBackgroundColor === `rgb(135, 206, 250)`){
        nethTier.innerText = "LT2";
    }

//       Third Box 

    if (playerElement.parentElement === thirdbox && playerBackgroundColor === `rgb(62, 113, 244)`) {
        nethTier.innerText = "HT3";
    } else if(playerElement.parentElement === thirdbox && playerBackgroundColor === `rgb(135, 206, 250)`){
        nethTier.innerText = "LT3";
    }

//       Fourth Box
 
    if (playerElement.parentElement === fourthbox && playerBackgroundColor === `rgb(62, 113, 244)`) {
        nethTier.innerText = "HT4";
    } else if(playerElement.parentElement === fourthbox && playerBackgroundColor === `rgb(135, 206, 250)`){
        nethTier.innerText = "LT4";
    }
//       Fifth Box

    if (playerElement.parentElement === fifthbox && playerBackgroundColor === `rgb(62, 113, 244)`) {
        nethTier.innerText = "HT5";
    } else if(playerElement.parentElement === fifthbox && playerBackgroundColor === `rgb(135, 206, 250)`){
        nethTier.innerText = "LT5";
    }

//      Sixth Box
 
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
        displayPlayerDetails(playerName, player);
    });
});

lowplayers.forEach(lowplayer => {
    lowplayer.addEventListener("click", function() {
        const playerName = lowplayer.querySelector('.playername').innerText;
        displayPlayerDetails(playerName, lowplayer);
    });
});

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const searchValue = searchInput.value.toLowerCase().trim();
        let playerFound = false;

        players.forEach(player => {
            const playerName = player.querySelector('.playername').innerText.toLowerCase();
            if (playerName === searchValue) {
                displayPlayerDetails(player.querySelector('.playername').innerText, player);
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
