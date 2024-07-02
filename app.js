const hamid = document.querySelector("#firstplayer");
const deivi = document.querySelector("#secondplayer")
const firstskill = document.querySelector("#firstskill");
const container = document.querySelector(".container");
const search = document.querySelector(".search");
const close = document.querySelector("#close")
const nethTier = document.querySelector("#nethtext")
const swordTier = document.querySelector("#swordtext")
const crystalTier = document.querySelector("#crystaltext")
const potTier = document.querySelector("#pottext")
const axeTier = document.querySelector("#axetext")
const uhcTier = document.querySelector("#uhctext")
const smpTier = document.querySelector("#smptext")
const playerid = document.querySelector(".playerid")

hamid.addEventListener("click", function() {
    firstskill.style.display = "flex";
    container.style.opacity = "40%";
    firstskill.style.zIndex = '1001';
    container.style.position = "fixed"
    nethTier.innerText = "HT1"
    crystalTier.innerText = "LT2"
    swordTier.innerText = "HT2"
    uhcTier.innerText = "NT"
    axeTier.innerText = "NT"
    smpTier.innerText = "NT"
    potTier.innerText = "LT1"
    playerid.innerText = "_HAMID"
});

deivi.addEventListener("click", function() {
    firstskill.style.display = "flex";
    container.style.opacity = "40%";
    firstskill.style.zIndex = '1001';
    container.style.position = "fixed"
    nethTier.innerText = "HT3"
    crystalTier.innerText = "LT3"
    swordTier.innerText = "LT2"
    uhcTier.innerText = "NT"
    axeTier.innerText = "NT"
    smpTier.innerText = "HT3"
    potTier.innerText = "HT3"
    playerid.innerText = "Deivi_17"
});

search.addEventListener("input", function() {
        firstskill.style.display = "block";
        container.style.opacity = "40%";
        firstskill.style.zIndex = '1001';
        container.style.position = "fixed"
    
});

close.addEventListener("click", function() {
    firstskill.style.display = "none";
    container.style.opacity = "100";
    container.style.position = "relative";
})


