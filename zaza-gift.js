const paragraphs = [
`🌟Selamat Ulang Tahun Zazaaaa🌟
semogaaaa Zazaaaa di tahun iniii sehat selaluuu, dilancarkan urusannyaa, dilimpahkan rezekinyaa, dikelilingi manusia-manusia baiikk, diperbanyak rasa syukurnya, diperbesar rasa sabarnyaaa, dibanggakan oleh semuaaa oraanngg, disayangi oleh semua oraanngg, dikuatkan atas segala ujiannyaa, dijauhkan dari segala hal buruk, dijauhkan dari pikiran negatif, dijauhkan dari rasa sedih, kalaupun suatu hari nanti Zazaaaa harus berhadapan dengan hal itu, Yama percayaa pastiii Zazaaaa akan selalu bisa ngendaliin dan ngadepinnya.

Yama haraapp di tahun ini Zazaaaa makin bahagiaaa, makin ceriaaa, makin semangaaatt ngejalanin harinyaa, makin rajiinn, makin banyaakk prestasinyaaa, makin seneng bantuin oraanngg, makin sabaarr ngehadepin kerandoman dunia, makin imut? itu mah jelaass imut pisaann wkwk, hmm? makin lucuu?? itu maahh apalagiiii Zaza maahh lucu pisaannn, terus terus? makin cantiikkk??? itu mah apalagiii atuuhhh, Zaza maahhh udah cwantik poolll, cantiiikkk pisaannn cing sumpahna kereut ceuli Yama, sksksk, pasti ini mah langsung "ngomong sama idung" gera WKWKWK, pokoknya maaahhh Yama berharap yaaanngg terbaaiikkk buat Zazaaaa intinya mah, wiisshh the beeessstt for Zazaaaa💖`,

`Zazaaaa Zazaaaa, inget ga tentang bunga hyacinth? yang zaza ceritain dari buku Jakarta Sebelum Pagi ituloohh, ingeett ndaa ingeett ndaa?? karena Yama penasaran soal bunganya, jadinya Yama sempet searching-searching tentang bunganya loohh, ehe. Nah, kan yang dikasih Pak Meneer tuh bunga hyacinth biru yaakk? artinya tuh ternyata ketulusan dan keteguhan, menarik bangeett kaann?? wkwk, I really excited listen that story from you. Terus kesannya kayak bener-bener sesuai kaann? antara arti dari bunga sama ceritanya, di mana ketulusan dan keteguhan hati seorang Pak Meneer.

Nah, ternyataaa bunga hyacinth itu punya banyak warnaa, dan setiap warna punya maknanya masing-masiinngg, salah satunyaa iniii, bunga hyacinth putih. Bunga ini jadi salah satu bunga yang mau Yama persembahkan buat Zazaaaa, kenapaaa tuucchh? wkwk, sesuai artinya, bunga ini tuh melambangkan keindahan, kebaikan, ketulusan, dan ungkapan terima kasih ataauu, yang paling powerfull adalah ungkapan I'll pray for you, xixi, Zaza pasti langsung "ngomong sama idung" WKWKWK, intinya thank you for exist in my life no matter how short or how long, but I really really happy about that and I'll pray for you💖`
];

const typing = document.getElementById("giftTyping");
const zazaPhoto = document.getElementById("zazaPhoto");
const photoCaption = document.getElementById("photoCaption");
const flower = document.getElementById("flower");
const quote = document.getElementById("quote");
const typingSound = document.getElementById("typingSound");
const bgMusic = document.getElementById("bgMusic");

let pIndex = 0;
let charIndex = 0;
let photoShown = false;

const urlParams = new URLSearchParams(window.location.search);
const musicTime = urlParams.get('t');

console.log('Music time from URL:', musicTime);

bgMusic.volume = 0.3;

bgMusic.preload = 'auto';
bgMusic.load();

if (musicTime) {
    const timeValue = parseFloat(musicTime);
    
    bgMusic.addEventListener('loadeddata', function() {
        console.log('Music loaded, duration:', bgMusic.duration);
        
        bgMusic.currentTime = timeValue;
        console.log('Time set to:', bgMusic.currentTime);
        
        setTimeout(() => {
            bgMusic.play()
                .then(() => {
                    console.log('Playing from:', bgMusic.currentTime);
                })
                .catch(err => {
                    console.error('Play error:', err);
                    bgMusic.currentTime = 0;
                    bgMusic.play();
                });
        }, 100);
    }, { once: true });
    
} else {
    bgMusic.addEventListener('loadeddata', function() {
        bgMusic.play().catch(err => console.error('Play error:', err));
    }, { once: true });
}

function typeParagraph() {
    const text = paragraphs[pIndex];

    if (pIndex === 0 && !photoShown) {
        zazaPhoto.style.display = "block";
        photoCaption.style.display = "block";
        zazaPhoto.classList.add("show");
        photoCaption.classList.add("show");
        photoShown = true;
    }

    if (pIndex === 1 && !flower.classList.contains("show")) {
        flower.style.display = "block";
        quote.style.display = "block";
        flower.classList.add("show");
        quote.classList.add("show");
    }

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
                zazaPhoto.style.opacity = "0";
                photoCaption.style.opacity = "0";
                typing.style.opacity = "0";

                setTimeout(() => {

                    typing.textContent = "";
                    typing.style.opacity = "1";
                    zazaPhoto.style.display = "none";
                    photoCaption.style.display = "none";
                
                    pIndex = 1;
                    charIndex = 0;
                    typeParagraph();
                }, 1000);
            }, 5000);    
        }
            
    }
}

typeParagraph();