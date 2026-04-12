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
{word:"Onlar mutlu ___",correct:"değil",translation:"No son felices"}
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
