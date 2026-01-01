const paragraphs = [
`🌟Selamat Ulang Tahun Zazaaaa🌟
semogaaaa Zazaaaa di tahun iniii sehat selaluuu,
dilancarkan urusannyaa, dilimpahkan rezekinyaa,
dikelilingi manusia-manusia baiikk, diperbanyak rasa syukurnya,
diperbesar rasa sabarnyaaa, dibanggakan oleh semuaaa oraanngg,
disayangi oleh semua oraanngg, dikuatkan atas segala ujiannyaa.

Yama haraapp di tahun ini Zazaaaa makin bahagiaaa,
makin ceriaaa, makin semangaaatt ngejalanin harinyaa,
semoga jugaaaa Zazaaaa dijauhkan dari segala hal buruk,
dijauhkan dari pikiran negatif, dijauhkan dari rasa sedih,
kalaupun suatu hari nanti Zazaaaa harus berhadapan dengan hal itu,
Yama percayaa pastiii Zazaaaa akan selalu bisaaa ngendaliin dan ngadepinnya.`,

``
];

const typing = document.getElementById("giftTyping");
const flower = document.getElementById("flower");
const typingSound = document.getElementById("typingSound");
const bgMusic = document.getElementById("bgMusic");

let pIndex = 0;
let charIndex = 0;

bgMusic.volume = 0.3;
bgMusic.play();

function typeParagraph() {
    const text = paragraphs[pIndex];

    if (charIndex < text.length) {
        const char = text[charIndex];
        typing.textContent += char;

        if (char !== "\n" && char !== " ") {
            typingSound.currentTime = 0;
            typingSound.volume = 0.5;
            typingSound.play();
        }

        charIndex++;

        setTimeout(
            typeParagraph,
            char === "\n" ? 500 : 85
        );
    } else {
        if (pIndex === 0) {
            flower.classList.add("show");

            setTimeout(() => {
                typing.textContent = "";
                pIndex = 1;
                charIndex = 0;
                typeParagraph();
            }, 1500);
        }
            
    }
}

typeParagraph();