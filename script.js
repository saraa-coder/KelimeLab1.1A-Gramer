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
{word:"Evde kedin ___?",correct:"var mı",translation:"¿Tienes gato en casa?"},
{word:"Evde köpeğin ___?",correct:"yok mu",translation:"¿No tienes perro en casa?"},
{word:"Buzdolabında yumurta ___?",correct:"var mı",translation:"¿Hay huevos en la nevera?"},
{word:"Çantada kitaplar ___?",correct:"var mı",translation:"¿Hay libros en la mochila?"},
{word:"Masada bilgisayar ___?",correct:"var mı",translation:"¿Hay un ordenador en la mesa?"},
{word:"Odada klima ___?",correct:"var mı",translation:"¿Hay aire acondicionado en la habitación?"},
{word:"Bugün iş ___?",correct:"var mı",translation:"¿Hay trabajo hoy?"},
{word:"Yarın tatil ___?",correct:"yok mu",translation:"¿No hay vacaciones mañana?"},
{word:"Bu odada pencere ___?",correct:"var mı",translation:"¿Hay ventana en esta habitación?"},
{word:"Kapı açık ___?",correct:"var mı",translation:"¿Está la puerta abierta?"},
{word:"Kapı kapalı ___?",correct:"var mı",translation:"¿Está la puerta cerrada?"},
{word:"Cüzdanda para ___?",correct:"var mı",translation:"¿Hay dinero en la cartera?"},
{word:"Cüzdanda kart ___?",correct:"var mı",translation:"¿Hay tarjeta en la cartera?"},
{word:"Evde yemek pişmiş ___?",correct:"var mı",translation:"¿Hay comida cocinada en casa?"},
{word:"Şehirde park ___?",correct:"var mı",translation:"¿Hay parque en la ciudad?"},
{word:"Okulda kütüphane ___?",correct:"var mı",translation:"¿Hay biblioteca en la escuela?"},
{word:"Sokakta kaza ___?",correct:"yok mu",translation:"¿No hay accidente en la calle?"},
{word:"Bugün enerji ___?",correct:"var mı",translation:"¿Hay energía hoy?"},
{word:"Evde su ___?",correct:"var mı",translation:"¿Hay agua en casa?"},
{word:"Buzdolabında süt ___?",correct:"yok mu",translation:"¿No hay leche en la nevera?"},

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

{word:"Elma___ yiyorum",correct:"yı",translation:"Como la manzana"},
{word:"Mektup___ yazıyorum",correct:"u",translation:"Escribo la carta"},
{word:"Kitap___ okuyorum",correct:"ı",translation:"Leo el libro"},
{word:"Bardak___ su içiyorum",correct:"tan",translation:"Bebo agua del vaso"},
{word:"Çanta___ para alıyorum",correct:"dan",translation:"Cojo dinero de la mochila"},

{word:"Otobüs___ biniyorum",correct:"e",translation:"Subo al autobús"},
{word:"Tren___ iniyorum",correct:"den",translation:"Bajo del tren"},
{word:"Eve giriyorum kapı___",correct:"dan",translation:"Entro por la puerta"},
{word:"Bahçe___ çıkıyorum",correct:"den",translation:"Salgo del jardín"},
{word:"Telefon___ bakıyorum",correct:"a",translation:"Miro el teléfono"},

{word:"Su___ içiyorum",correct:"yu",translation:"Bebo agua"},
{word:"Kahve___ içiyorum",correct:"yi",translation:"Bebo café"},
{word:"Çay___ içiyorum",correct:"ı",translation:"Bebo té"},
{word:"Meyve___ yiyorum",correct:"yi",translation:"Como fruta"},
{word:"Ekmek___ yiyorum",correct:"i",translation:"Como pan"},

{word:"Araba___ kullanıyorum",correct:"yı",translation:"Conduzco el coche"},
{word:"Bisiklet___ sürüyorum",correct:"i",translation:"Monto en bici"},
{word:"Müzik___ dinliyorum",correct:"i",translation:"Escucho música"},
{word:"Film___ izliyorum",correct:"i",translation:"Veo una película"},
{word:"Televizyon___ açıyorum",correct:"u",translation:"Enciendo la tele"},

{word:"Kapı___ kapatıyorum",correct:"yı",translation:"Cierro la puerta"},
{word:"Pencere___ açıyorum",correct:"yi",translation:"Abro la ventana"},
{word:"Işık___ açıyorum",correct:"ı",translation:"Enciendo la luz"},
{word:"Işık___ kapatıyorum",correct:"ı",translation:"Apago la luz"},
{word:"Telefon___ kullanıyorum",correct:"u",translation:"Uso el teléfono"},

{word:"Mesaj___ yazıyorum",correct:"ı",translation:"Escribo un mensaje"},
{word:"Arkadaş___ arıyorum",correct:"ı",translation:"Llamo al amigo"},
{word:"E-posta___ gönderiyorum",correct:"yı",translation:"Envio un email"},
{word:"Para___ harcıyorum",correct:"yı",translation:"Gasto dinero"},
{word:"Alışveriş___ yapıyorum",correct:"yı",translation:"Hago compras"},

{word:"Ev___ giriyorum",correct:"e",translation:"Entro en casa"},
{word:"Dışarı___ çıkıyorum",correct:"ya",translation:"Salgo fuera"},
{word:"Okul___ koşuyorum",correct:"a",translation:"Corro a la escuela"},
{word:"Park___ gidiyorum",correct:"a",translation:"Voy al parque"},
{word:"Deniz___ yüzüyorum",correct:"de",translation:"Nado en el mar"},

{word:"Su___ dolduruyorum",correct:"yu",translation:"Lleno agua"},
{word:"Çanta___ açıyorum",correct:"yı",translation:"Abro la mochila"},
{word:"Defter___ kapatıyorum",correct:"i",translation:"Cierro el cuaderno"},
{word:"Kapı___ kilitliyorum",correct:"yı",translation:"Cierro con llave la puerta"},
{word:"Arabayı park___ ediyorum",correct:"a",translation:"Aparco el coche"}
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
