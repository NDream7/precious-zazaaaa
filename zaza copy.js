const texts = [
    "✨Haaaiii Zazaaaa...✨",
    "😁aku harap kamu baca ini sampe terakhir yaakk eheh😁",
    "🎂hari iniiii kaann kamu ulang tahuunnn🎂",
    "😆jadiiii, aku buatin program ini buat kamuuu eheheh😆",
    "💖semogaaa, kamu suka yaaaa💖",
    "🌟Barakallahu fi umriki Siti Nazwa Jawariah🌟"
];

let textIndex = 0;
let charIndex = 0;
const intro = document.getElementById("intro");
const startBtn = document.getElementById("startBtn");
const typing = document.getElementById("typing");
const button = document.getElementById("nextBtn");
const giftBox = document.getElementById("gift-box");
const container = document.querySelector(".container");

const typingSound = document.getElementById("typingSound");
const bgMusic = document.getElementById("bgMusic");

startBtn.onclick = () => {
    intro.style.display = "none";
    container.style.display = "flex";

    bgMusic.volume = 0.5;
    bgMusic.play();

    textIndex = 0;
    charIndex = 0;
    typing.textContent = "";

    type();
};

function type () {
    if (charIndex < texts[textIndex].length) {
        typing.textContent += texts[textIndex][charIndex];

        typingSound.currentTime = 0;
        typingSound.volume = 0.7;
        typingSound.play();

        charIndex++;
        setTimeout(type, 100);
    }   else {
            if (textIndex === texts.length - 1) {
                button.style.display = "inline-block";
            } else {
                setTimeout(erase, 1500);
            }
    }
}

function erase() {
    if (charIndex > 0) {
        typing.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    }       else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 300);
    }
}

button.onclick = () => {

    giftBox.style.animation = "none";
    giftBox.classList.add("open");
    container.classList.add("zoom-in");

    setTimeout(() => {
        window.location.href = "zaza-gift.html";
    }, 1500);
};