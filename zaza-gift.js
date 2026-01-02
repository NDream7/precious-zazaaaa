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
Yama percayaa pastiii Zazaaaa akan selalu bisa ngendaliin dan ngadepinnya.`,

`Zazaaaa Zazaaaa, inget ga tentang bunga hyacinth? yang zaza ceritain
dari buku Jakarta Sebelum Pagi ituloohh, ingeett ndaa ingeett ndaa??
karena Yama penasaran soal bunganya, jadinya Yama sempet searching-
searching tentang bunganya loohh, ehe. Nah, kan yang dikasih Pak Menir
tuh bunga hyacinth biru yaakk? artinya tuh ternyata ketulusan dan
keteguhan, menarik bangeett kaann?? wkwk, I'm really excited to hear it.

Nah, ternyataaa bunga hyacinth itu punya banyak warnaa, dan setiap warna
punya maknanya masing-masiinngg, salah satunyaa iniii, bunga hyacinth putih.
Bunga ini jadi salah satu bunga yang mau Yama persembahkan buat Zazaaaa,
kenapaaa tuucchh? wkwk, sesuai artinya, bunga ini tuh melambangkan keindahan,
kebaikan, ketulusan, dan ungkapan terima kasih ataauu, yang paling powerfull
adalah ungkapan I'll pray for you, xixi, Zaza pasti langsung "ngomong sama
idung" WKWKWK, intinya thank you for exist in my life no matter how short
or how long, but I really really happy about that and I'll pray for you💖`
];

const typing = document.getElementById("giftTyping");
const flower = document.getElementById("flower");
const typingSound = document.getElementById("typingSound");
const bgMusic = document.getElementById("bgMusic");

let pIndex = 0;
let charIndex = 0;

const urlParams = new URLSearchParams(window.location.search);
const musicTime = urlParams.get('t');

console.log('Music time from URL:', musicTime);

bgMusic.volume = 0.3;

// Preload musik dan set time sebelum play
bgMusic.preload = 'auto';
bgMusic.load();

if (musicTime) {
    const timeValue = parseFloat(musicTime);
    
    // Tunggu musik ready
    bgMusic.addEventListener('loadeddata', function() {
        console.log('Music loaded, duration:', bgMusic.duration);
        
        // Set currentTime setelah musik loaded
        bgMusic.currentTime = timeValue;
        console.log('Time set to:', bgMusic.currentTime);
        
        // Play dengan delay kecil
        setTimeout(() => {
            bgMusic.play()
                .then(() => {
                    console.log('Playing from:', bgMusic.currentTime);
                })
                .catch(err => {
                    console.error('Play error:', err);
                    // Fallback
                    bgMusic.currentTime = 0;
                    bgMusic.play();
                });
        }, 100);
    }, { once: true });
    
} else {
    // Tidak ada parameter, play dari awal
    bgMusic.addEventListener('loadeddata', function() {
        bgMusic.play().catch(err => console.error('Play error:', err));
    }, { once: true });
}

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
            setTimeout(() => {

                typing.textContent = "";
                flower.classList.add("show");

            
                pIndex = 1;
                charIndex = 0;
                typeParagraph();
            }, 5000);
        }
            
    }
}

typeParagraph();