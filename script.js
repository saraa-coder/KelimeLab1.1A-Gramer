// 1. BASE DE DATOS
const allWords = [
{word:"Bu sen ___?",correct:"misin",translation:"¿Eres tú?"},
{word:"O öğrenci ___?",correct:"mi",translation:"¿Es estudiante?"},
{word:"Bu kitap ___?",correct:"mı",translation:"¿Es este un libro?"},
{word:"Ev büyük ___?",correct:"mü",translation:"¿La casa es grande?"},
{word:"Hava soğuk ___?",correct:"mu",translation:"¿Hace frío?"},
{word:"Sen mutlu ___?",correct:"musun",translation:"¿Estás feliz?"},
{word:"O hasta ___?",correct:"mı",translation:"¿Está enfermo/a?"},
{word:"Burası güzel ___?",correct:"mi",translation:"¿Es bonito aquí?"},
{word:"Onlar hazır ___?",correct:"mı",translation:"¿Están listos?"},
{word:"Bu doğru ___?",correct:"mu",translation:"¿Es correcto?"},
{word:"Geliyor ___?",correct:"musun",translation:"¿Vienes?"},
{word:"Gidiyor ___?",correct:"musun",translation:"¿Te vas?"},
{word:"Yemek yiyor ___?",correct:"musun",translation:"¿Estás comiendo?"},
{word:"Beni anlıyor ___?",correct:"musun",translation:"¿Me entiendes?"},
{word:"Türkçe öğreniyor ___?",correct:"musun",translation:"¿Estás aprendiendo turco?"},

// VAR / YOK
{word:"Evde süt ___?",correct:"var mı",translation:"¿Hay leche en casa?"},
{word:"Buzdolabında ekmek ___?",correct:"var mı",translation:"¿Hay pan en el frigorífico?"},
{word:"Masada kitap ___?",correct:"var mı",translation:"¿Hay un libro en la mesa?"},
{word:"Çantada kalem ___?",correct:"var mı",translation:"¿Hay un bolígrafo en la mochila?"},
{word:"Arabada benzin ___?",correct:"var mı",translation:"¿Hay gasolina en el coche?"},
{word:"Evde kimse ___?",correct:"var mı",translation:"¿Hay alguien en casa?"},
{word:"Odada kimse ___?",correct:"var mı",translation:"¿Hay alguien en la habitación?"},
{word:"Cebinde para ___?",correct:"var mı",translation:"¿Tienes dinero en el bolsillo?"},
{word:"Bugün ders ___?",correct:"var mı",translation:"¿Hay clase hoy?"},
{word:"Yarın okul ___?",correct:"var mı",translation:"¿Hay colegio mañana?"},
{word:"Şimdi zaman ___?",correct:"var mı",translation:"¿Hay tiempo ahora?"},
{word:"Evde internet ___?",correct:"var mı",translation:"¿Hay internet en casa?"},
{word:"Telefonunda sorun ___?",correct:"var mı",translation:"¿Hay un problema en el teléfono?"},
{word:"Sınıfta öğretmen ___?",correct:"var mı",translation:"¿Hay profesor en clase?"},
{word:"Bahçede köpek ___?",correct:"var mı",translation:"¿Hay un perro en el jardín?"},
{word:"Parkta çocuklar ___?",correct:"var mı",translation:"¿Hay niños en el parque?"},
{word:"Bu şehirde metro ___?",correct:"var mı",translation:"¿Hay metro en esta ciudad?"},
{word:"Sokakta trafik ___?",correct:"var mı",translation:"¿Hay tráfico en la calle?"},
{word:"Buzdolabında su ___?",correct:"var mı",translation:"¿Hay agua en la nevera?"},
{word:"Masada defter ___?",correct:"var mı",translation:"¿Hay un cuaderno en la mesa?"},
{word:"Evde yemek ___?",correct:"var mı",translation:"¿Hay comida en casa?"},
{word:"Şimdi sessizlik ___?",correct:"var mı",translation:"¿Hay silencio ahora?"},
{word:"Odada ışık ___?",correct:"var mı",translation:"¿Hay luz en la habitación?"},
{word:"Kapıda anahtar ___?",correct:"var mı",translation:"¿Hay una llave en la puerta?"},
{word:"Cebinde telefon ___?",correct:"var mı",translation:"¿Hay un teléfono en el bolsillo?"},
{word:"Bugün toplantı ___?",correct:"var mı",translation:"¿Hay reunión hoy?"},
{word:"Evde televizyon ___?",correct:"var mı",translation:"¿Hay televisión en casa?"},
{word:"Sokakta insanlar ___?",correct:"var mı",translation:"¿Hay gente en la calle?"},
{word:"Okulda sınav ___?",correct:"var mı",translation:"¿Hay examen en la escuela?"},
{word:"Şehirde sorun ___?",correct:"var mı",translation:"¿Hay problemas en la ciudad?"},
{word:"Burada otobüs ___?",correct:"var mı",translation:"¿Hay autobús aquí?"},
{word:"Burada tren ___?",correct:"yok mu",translation:"¿No hay tren aquí?"},

// CASOS + ŞİMDİKİ ZAMAN
{word:"Kitabı masa___ koyuyorum",correct:"ya",translation:"Pongo el libro en la mesa"},
{word:"Suyu bardak___ koyuyorum",correct:"a",translation:"Pongo el agua en el vaso"},
{word:"Arabayı garaj___ park ediyorum",correct:"a",translation:"Aparco el coche en el garaje"},
{word:"Ev___ çıkıyorum",correct:"den",translation:"Salgo de casa"},
{word:"Okul___ gidiyorum",correct:"a",translation:"Voy a la escuela"},
{word:"Park___ oynuyorum",correct:"ta",translation:"Juego en el parque"},
{word:"Seni okul___ götürüyorum",correct:"a",translation:"Te llevo a la escuela"},
{word:"Sütü buzdolabın___ çıkarıyorum",correct:"dan",translation:"Saco la leche de la nevera"},
{word:"Defteri çanta___ koyuyorum",correct:"ya",translation:"Pongo el cuaderno en la mochila"},
{word:"Kapı___ açıyorum",correct:"yı",translation:"Abro la puerta"},

// EK-FIIL OLUMSUZ
{word:"Ben doktor değil ___",correct:"im",translation:"No soy médico"},
{word:"Sen öğrenci değil ___",correct:"sin",translation:"No eres estudiante"},
{word:"O doktor ___",correct:"değil",translation:"No es médico"},
{word:"Biz doktor değil ___",correct:"iz",translation:"No somos médicos"},
{word:"Siz doktor değil ___",correct:"siniz",translation:"No sois médicos"},
{word:"Onlar doktor ___",correct:"değil",translation:"No son médicos"},

{word:"Ben mutlu değil ___",correct:"im",translation:"No soy feliz"},
{word:"Sen mutlu değil ___",correct:"sin",translation:"No eres feliz"},
{word:"O mutlu ___",correct:"değil",translation:"No es feliz"},
{word:"Biz mutlu değil ___",correct:"iz",translation:"No somos felices"},
{word:"Siz mutlu değil ___",correct:"siniz",translation:"No sois felices"},
{word:"Onlar mutlu ___",correct:"değil",translation:"No son felices"},

// EK-FIIL OLUMLU SORU

// BEN
{word:"Ben mühendis ___?",correct:"miyim",translation:"¿Soy ingeniero?"},
{word:"Ben cerrah ___?",correct:"mıyım",translation:"¿Soy cirujano?"},
{word:"Ben pilot ___?",correct:"muyum",translation:"¿Soy piloto?"},
{word:"Ben avukat ___?",correct:"mıyım",translation:"¿Soy abogado?"},
{word:"Ben mimar ___?",correct:"mıyım",translation:"¿Soy arquitecto?"},
{word:"Ben psikolog ___?",correct:"muyum",translation:"¿Soy psicólogo?"},
{word:"Ben şef ___?",correct:"miyim",translation:"¿Soy chef?"},
{word:"Ben programcı ___?",correct:"mıyım",translation:"¿Soy programador?"},
{word:"Ben gazeteci ___?",correct:"miyim",translation:"¿Soy periodista?"},
{word:"Ben fotoğrafçı ___?",correct:"mıyım",translation:"¿Soy fotógrafo?"},

// SEN
{word:"Sen itfaiyeci ___?",correct:"misin",translation:"¿Eres bombero?"},
{word:"Sen dişçi ___?",correct:"misin",translation:"¿Eres dentista?"},
{word:"Sen mühendis ___?",correct:"misin",translation:"¿Eres ingeniero?"},
{word:"Sen pilot ___?",correct:"musun",translation:"¿Eres piloto?"},
{word:"Sen aşçı ___?",correct:"mısın",translation:"¿Eres cocinero?"},
{word:"Sen hemşire ___?",correct:"misin",translation:"¿Eres enfermero?"},
{word:"Sen sporcu ___?",correct:"musun",translation:"¿Eres deportista?"},
{word:"Sen yorgun ___?",correct:"musun",translation:"¿Estás cansado?"},
{word:"Sen sakin ___?",correct:"misin",translation:"¿Estás tranquilo?"},
{word:"Sen heyecanlı ___?",correct:"mısın",translation:"¿Estás emocionado?"},

// O
{word:"O kaptan ___?",correct:"mı",translation:"¿Es capitán?"},
{word:"O terzi ___?",correct:"mi",translation:"¿Es sastre?"},
{word:"O marangoz ___?",correct:"mu",translation:"¿Es carpintero?"},
{word:"O müzisyen ___?",correct:"mi",translation:"¿Es músico?"},
{word:"O ressam ___?",correct:"mı",translation:"¿Es pintor?"},
{word:"O atlet ___?",correct:"mi",translation:"¿Es atleta?"},
{word:"O rehber ___?",correct:"mi",translation:"¿Es guía?"},
{word:"O kasap ___?",correct:"mı",translation:"¿Es carnicero?"},
{word:"O çevirmen ___?",correct:"mi",translation:"¿Es traductor?"},
{word:"O şoför ___?",correct:"mü",translation:"¿Es conductor?"},

// BİZ
{word:"Biz mimar ___?",correct:"mıyız",translation:"¿Somos arquitectos?"},
{word:"Biz doktor ___?",correct:"muyuz",translation:"¿Somos médicos?"},
{word:"Biz avukat ___?",correct:"mıyız",translation:"¿Somos abogados?"},
{word:"Biz öğretmen ___?",correct:"miyiz",translation:"¿Somos profesores?"},
{word:"Biz mühendis ___?",correct:"miyiz",translation:"¿Somos ingenieros?"},
{word:"Biz pilot ___?",correct:"muyuz",translation:"¿Somos pilotos?"},
{word:"Biz sporcu ___?",correct:"muyuz",translation:"¿Somos deportistas?"},
{word:"Biz sakin ___?",correct:"miyiz",translation:"¿Estamos tranquilos?"},
{word:"Biz mutlu ___?",correct:"muyuz",translation:"¿Estamos felices?"},
{word:"Biz hazır ___?",correct:"mıyız",translation:"¿Estamos listos?"},

// SİZ
{word:"Siz diplomat ___?",correct:"mısınız",translation:"¿Sois diplomáticos?"},
{word:"Siz akademisyen ___?",correct:"misiniz",translation:"¿Sois académicos?"},
{word:"Siz girişimci ___?",correct:"misiniz",translation:"¿Sois emprendedores?"},
{word:"Siz editör ___?",correct:"müsünüz",translation:"¿Sois editores?"},
{word:"Siz tasarımcı ___?",correct:"mısınız",translation:"¿Sois diseñadores?"},
{word:"Siz danışman ___?",correct:"mısınız",translation:"¿Sois consultores?"},
{word:"Siz teknisyen ___?",correct:"misiniz",translation:"¿Sois técnicos?"},
{word:"Siz organize ___?",correct:"misiniz",translation:"¿Sois organizados?"},
{word:"Siz dikkatli ___?",correct:"misiniz",translation:"¿Sois cuidadosos?"},
{word:"Siz enerjik ___?",correct:"misiniz",translation:"¿Sois enérgicos?"},

// ONLAR
{word:"Onlar kaptan ___?",correct:"mı",translation:"¿Son capitanes?"},
{word:"Onlar ressam ___?",correct:"mı",translation:"¿Son pintores?"},
{word:"Onlar müzisyen ___?",correct:"mi",translation:"¿Son músicos?"},
{word:"Onlar pilot ___?",correct:"mu",translation:"¿Son pilotos?"},
{word:"Onlar şoför ___?",correct:"mü",translation:"¿Son conductores?"},
{word:"Onlar çevirmen ___?",correct:"mi",translation:"¿Son traductores?"},
{word:"Onlar atlet ___?",correct:"mi",translation:"¿Son atletas?"},
{word:"Onlar kasap ___?",correct:"mı",translation:"¿Son carniceros?"},
{word:"Onlar rehber ___?",correct:"mi",translation:"¿Son guías?"},
{word:"Onlar marangoz ___?",correct:"mu",translation:"¿Son carpinteros?"}
];


// 2. VARIABLES
let pool = [];
let activeQueue = [];
let current = null;
let lastWord = null;
let locked = false;
let gameMode = 'tr-es';
let currentRoundMode = 'tr-es';

const BLOCK_SIZE = 10;
const MASTERY_THRESHOLD = 3;

let score = 0;
let progress = {};

// 3. INTERFAZ
function showMenu() {
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('start-screen').style.display = '';
}

function setMode(mode, e) {
    gameMode = mode;

    document.querySelectorAll('#mode-selector .primary-btn').forEach(btn => {
        btn.style.opacity = "0.5";
    });

    if (e && e.currentTarget) {
        e.currentTarget.style.opacity = "1";
    }
}

function resetAndStart() {
    score = 0;
    progress = {};
    startGame();
}

function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'flex';
    initBlocks();
    updateUI();
    loadQuestion();
}

// 4. LÓGICA
function initBlocks() {
    activeQueue = [...allWords];
}

function updateUI() {
    let total = allWords.length;
    let percent = Math.round((score / total) * 100);

    document.getElementById("score").textContent = score + " tamamlanan";
    document.getElementById("percent").textContent = "%" + percent;
}

function loadQuestion() {
    locked = false;

    current = activeQueue[Math.floor(Math.random() * activeQueue.length)];

    const wordElement = document.getElementById("word");
    const optionsContainer = document.getElementById("options");

    wordElement.innerHTML = `
        <div>${current.word}</div>
        <div class="translation">${current.translation}</div>
    `;

    let opts = new Set([current.correct]);

    while (opts.size < 4) {
        let randomItem = allWords[Math.floor(Math.random() * allWords.length)];
        opts.add(randomItem.correct);
    }

    optionsContainer.innerHTML = "";

    [...opts].sort(() => Math.random() - 0.5).forEach(opt => {
        let btn = document.createElement("button");
        btn.className = "option";
        btn.textContent = opt;
        btn.onclick = () => handleAnswer(opt, btn);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selected, btn) {
    if (locked) return;
    locked = true;

    document.querySelectorAll(".option").forEach(b => {
        if (b.textContent === current.correct) {
            b.classList.add("correct");
        }
    });

    if (selected === current.correct) {
        score++;
    } else {
        btn.classList.add("wrong");
    }

    updateUI();

    setTimeout(loadQuestion, 700);
}

// INICIO
window.onload = () => {
    const firstBtn = document.querySelector('#mode-selector button');
    if (firstBtn) {
        setMode('tr-es', { currentTarget: firstBtn });
    }
};
