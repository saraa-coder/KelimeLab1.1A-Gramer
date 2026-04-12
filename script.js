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

{word:"Evde süt ___?",correct:"Var mı",translation:"¿Hay leche en casa?"},
{word:"Buzdolabında ekmek ___?",correct:"Var mı",translation:"¿Hay pan en el frigorífico?"},
{word:"Masada kitap ___?",correct:"Var mı",translation:"¿Hay un libro en la mesa?"},
{word:"Çantada kalem ___?",correct:"Var mı",translation:"¿Hay un bolígrafo en la mochila?"},
{word:"Arabada benzin ___?",correct:"Var mı",translation:"¿Hay gasolina en el coche?"},
{word:"Evde kimse ___?",correct:"Var mı",translation:"¿Hay alguien en casa?"},
{word:"Odada kimse ___?",correct:"Var mı",translation:"¿Hay alguien en la habitación?"},
{word:"Cebinde para ___?",correct:"Var mı",translation:"¿Tienes dinero en el bolsillo?"},
{word:"Bugün ders ___?",correct:"Var mı",translation:"¿Hay clase hoy?"},
{word:"Yarın okul ___?",correct:"Var mı",translation:"¿Hay colegio mañana?"},
{word:"Şimdi zaman ___?",correct:"Var mı",translation:"¿Hay tiempo ahora?"},
{word:"Evde internet ___?",correct:"Var mı",translation:"¿Hay internet en casa?"},
{word:"Telefonunda sorun ___?",correct:"Var mı",translation:"¿Hay un problema en el teléfono?"},
{word:"Sınıfta öğretmen ___?",correct:"Var mı",translation:"¿Hay profesor en clase?"},
{word:"Bahçede köpek ___?",correct:"Var mı",translation:"¿Hay un perro en el jardín?"},
{word:"Parkta çocuklar ___?",correct:"Var mı",translation:"¿Hay niños en el parque?"},
{word:"Bu şehirde metro ___?",correct:"Var mı",translation:"¿Hay metro en esta ciudad?"},
{word:"Sokakta trafik ___?",correct:"Var mı",translation:"¿Hay tráfico en la calle?"},
{word:"Buzdolabında su ___?",correct:"Var mı",translation:"¿Hay agua en la nevera?"},
{word:"Masada defter ___?",correct:"Var mı",translation:"¿Hay un cuaderno en la mesa?"},
{word:"Evde yemek ___?",correct:"Var mı",translation:"¿Hay comida en casa?"},
{word:"Şimdi sessizlik ___?",correct:"Var mı",translation:"¿Hay silencio ahora?"},
{word:"Odada ışık ___?",correct:"Var mı",translation:"¿Hay luz en la habitación?"},
{word:"Kapıda anahtar ___?",correct:"Var mı",translation:"¿Hay una llave en la puerta?"},
{word:"Cebinde telefon ___?",correct:"Var mı",translation:"¿Hay un teléfono en el bolsillo?"},
{word:"Bugün toplantı ___?",correct:"Var mı",translation:"¿Hay reunión hoy?"},
{word:"Evde televizyon ___?",correct:"Var mı",translation:"¿Hay televisión en casa?"},
{word:"Sokakta insanlar ___?",correct:"Var mı",translation:"¿Hay gente en la calle?"},
{word:"Okulda sınav ___?",correct:"Var mı",translation:"¿Hay examen en la escuela?"},
{word:"Şehirde sorun ___?",correct:"Var mı",translation:"¿Hay problemas en la ciudad?"},
{word:"Burada otobüs ___?",correct:"Var mı",translation:"¿Hay autobús aquí?"},
{word:"Burada tren ___?",correct:"Yok mu",translation:"¿No hay tren aquí?"},
{word:"Evde kedin ___?",correct:"Var mı",translation:"¿Tienes gato en casa?"},
{word:"Evde köpeğin ___?",correct:"Yok mu",translation:"¿No tienes perro en casa?"},
{word:"Buzdolabında yumurta ___?",correct:"Var mı",translation:"¿Hay huevos en la nevera?"},
{word:"Çantada kitaplar ___?",correct:"Var mı",translation:"¿Hay libros en la mochila?"},
{word:"Masada bilgisayar ___?",correct:"Var mı",translation:"¿Hay un ordenador en la mesa?"},
{word:"Odada klima ___?",correct:"Var mı",translation:"¿Hay aire acondicionado en la habitación?"},
{word:"Bugün iş ___?",correct:"Var mı",translation:"¿Hay trabajo hoy?"},
{word:"Yarın tatil ___?",correct:"Yok mu",translation:"¿No hay vacaciones mañana?"},
{word:"Bu odada pencere ___?",correct:"Var mı",translation:"¿Hay ventana en esta habitación?"},
{word:"Kapı açık ___?",correct:"Var mı",translation:"¿Está la puerta abierta?"},
{word:"Kapı kapalı ___?",correct:"Var mı",translation:"¿Está la puerta cerrada?"},
{word:"Cüzdanda para ___?",correct:"Var mı",translation:"¿Hay dinero en la cartera?"},
{word:"Cüzdanda kart ___?",correct:"Var mı",translation:"¿Hay tarjeta en la cartera?"},
{word:"Evde yemek pişmiş ___?",correct:"Var mı",translation:"¿Hay comida cocinada en casa?"},
{word:"Şehirde park ___?",correct:"Var mı",translation:"¿Hay parque en la ciudad?"},
{word:"Okulda kütüphane ___?",correct:"Var mı",translation:"¿Hay biblioteca en la escuela?"},
{word:"Sokakta kaza ___?",correct:"Yok mu",translation:"¿No hay accidente en la calle?"},
{word:"Bugün enerji ___?",correct:"Var mı",translation:"¿Hay energía hoy?"},
{word:"Evde su ___?",correct:"Var mı",translation:"¿Hay agua en casa?"},
{word:"Buzdolabında süt ___?",correct:"Yok mu",translation:"¿No hay leche en la nevera?"}
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
