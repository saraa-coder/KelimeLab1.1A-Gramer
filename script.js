/**
 * JUEGO DE VOCABULARIO TURCO-ESPAÑOL 
 * Kelime Lab 1.1A
 */

// 1. BASE DE DATOS DE PALABRAS
const allWords = [
 {word: "Bu sen ___?", correct: "misin"},
  {word: "O öğrenci ___?", correct: "mi"},
  {word: "Bu kitap ___?", correct: "mı"},
  {word: "Ev büyük ___?", correct: "mü"},
  {word: "Hava soğuk ___?", correct: "mu"},
  {word: "Sen mutlu ___?", correct: "musun"},
  {word: "O hasta ___?", correct: "mı"},
  {word: "Burası güzel ___?", correct: "mi"},
  {word: "Onlar hazır ___?", correct: "mı"},
  {word: "Bu doğru ___?", correct: "mu"},
  {word: "Geliyor ___?", correct: "musun"},
  {word: "Gidiyor ___?", correct: "musun"},
  {word: "Yemek yiyor ___?", correct: "musun"},
  {word: "Beni anlıyor ___?", correct: "musun"},
  {word: "Türkçe öğreniyor ___?", correct: "musun"},
  {word: "Film izliyor ___?", correct: "musun"},
  {word: "Çalışıyor ___?", correct: "musun"},
  {word: "Uyuyor ___?", correct: "musun"},
  {word: "Dinliyor ___?", correct: "musun"},
  {word: "Koşuyor ___?", correct: "musun"},
  {word: "Ben hazır ___?", correct: "mıyım"},
  {word: "Sen geliyor ___?", correct: "musun"},
  {word: "O biliyor ___?", correct: "mu"},
  {word: "Biz gidiyor ___?", correct: "muyuz"},
  {word: "Siz Türk ___?", correct: "müsünüz"},
  {word: "Onlar geliyor ___?", correct: "mu"},
  {word: "Sen öğrenci ___?", correct: "misin"},
  {word: "Siz iyi ___?", correct: "misiniz"},
  {word: "Biz mutlu ___?", correct: "muyuz"},
  {word: "Onlar hasta ___?", correct: "mı"},
  {word: "Bu senin ___?", correct: "mi"},
  {word: "Araba yeni ___?", correct: "mi"},
  {word: "Saat kaç ___?", correct: "mı"},
  {word: "Okula gidiyor ___?", correct: "musun"},
  {word: "Kahve içiyor ___?", correct: "musun"},
  {word: "Beni seviyor ___?", correct: "musun"},
  {word: "Yarın geliyor ___?", correct: "musun"},
  {word: "Burada ___ yaşıyorsun?", correct: "mı"},
  {word: "İstanbul büyük ___?", correct: "mü"},
  {word: "Hazır ___?", correct: "mısın"},
  {word: "Burada ___?", correct: "mısın"},
  {word: "Dışarıda ___?", correct: "mısın"},
  {word: "Evde değil ___?", correct: "misin"},
  {word: "Bugün okul var ___?", correct: "mı"},
  {word: "Ders var ___?", correct: "mı"},
  {word: "Toplantı var ___?", correct: "mı"},
  {word: "Planın var ___?", correct: "mı"},
  {word: "Vaktin var ___?", correct: "mı"},
  {word: "Sorun var ___?", correct: "mı"},
  {word: "Başka soru var ___?", correct: "mı"},
  {word: "Bu senin kitabın ___?", correct: "mı"},
  {word: "Bu senin çantan ___?", correct: "mı"},
  {word: "Bu senin telefonun ___?", correct: "mu"},
  {word: "Kapı kapalı ___?", correct: "mı"},
  {word: "Lamba açık ___?", correct: "mı"},
  {word: "Yazıyor ___?", correct: "musun"},
  {word: "Arıyor ___?", correct: "musun"},
  {word: "Mesaj atıyor ___?", correct: "musun"},
  {word: "Alışveriş yapıyor ___?", correct: "musun"},
  {word: "Spor yapıyor ___?", correct: "musun"},
  {word: "Koşuyor ___?", correct: "musun"},
  {word: "Yüzüyor ___?", correct: "musun"},
  {word: "Bisiklet sürüyor ___?", correct: "musun"},
  {word: "Eve gidiyor ___?", correct: "musun"},
  {word: "Şehirde ___ kalıyorsun?", correct: "mi"},
  {word: "O evli ___?", correct: "mi"},
  {word: "O bekar ___?", correct: "mı"},
  {word: "O hasta ___?", correct: "mıydı"},
  {word: "Çocuklar okulda ___?", correct: "mı"},
  {word: "Öğretmen burada ___?", correct: "mı"},
  {word: "Patron toplantıda ___?", correct: "mı"},
  {word: "Arkadaşın meşgul ___?", correct: "mü"},
  {word: "Ailen burada ___?", correct: "mı"},
  {word: "Siz şimdi serbest ___?", correct: "misiniz"},
  {word: "Hava yağmurlu ___?", correct: "mu"},
  {word: "Yol kapalı ___?", correct: "mı"},
  {word: "Mağaza açık ___?", correct: "mı"},
  {word: "Bilet var ___?", correct: "mı"},
  {word: "İnternet var ___?", correct: "mı"},
  {word: "Telefon çalışıyor ___?", correct: "mu"},
  {word: "Arabada benzin var ___?", correct: "mı"},
  {word: "Para lazım ___?", correct: "mı"},
  {word: "Bu önemli ___?", correct: "mi"},
  {word: "Sorun çözüldü ___?", correct: "mü"},
  {word: "Bu kim? Öğretmen ___?", correct: "mi"},
  {word: "O doktor ___?", correct: "mu"},
  {word: "Bu senin kardeşin ___?", correct: "mi"},
  {word: "Bu yeni ___?", correct: "mi"},
  {word: "Bu eski ___?", correct: "mi"},
  {word: "O Türk ___?", correct: "mü"},
  {word: "O yabancı ___?", correct: "mı"},
  {word: "O genç ___?", correct: "mi"},
  {word: "O yaşlı ___?", correct: "mı"},
  {word: "Bu pahalı ___?", correct: "mı"},
  {word: "Şehirde ___?", correct: "misin"},
  {word: "Evde ___ yoksa dışarıda ___?", correct: "misin / mı"},
  {word: "İçeride ___?", correct: "misin"},
  {word: "Dışarı çıkıyor ___?", correct: "musun"},
  {word: "Okula gidiyor ___?", correct: "musun"},
  {word: "İşe gidiyor ___?", correct: "musun"},
  {word: "Buraya geliyor ___?", correct: "musun"},
  {word: "Orada ___ kalıyorsun?", correct: "mı"},
  {word: "Tatilde ___?", correct: "misin"},
  {word: "Yolda ___?", correct: "mısın"},
  {word: "Her gün spor yapıyor ___?", correct: "musun"},
  {word: "Sabah erken kalkıyor ___?", correct: "musun"},
  {word: "Geç ___ yatıyorsun?", correct: "mi"},
  {word: "Kahvaltı yapıyor ___?", correct: "musun"},
  {word: "Evde yemek pişiriyor ___?", correct: "musun"},
  {word: "Dışarıda yemek yiyor ___?", correct: "musun"},
  {word: "Çalışıyor ___ bugün?", correct: "musun"},
  {word: "Dinleniyor ___?", correct: "musun"},
  {word: "Uyku düzenin iyi ___?", correct: "mi"},
  {word: "Günlük planın var ___?", correct: "mı"},
  {word: "Beni görüyor ___?", correct: "musun"},
  {word: "Beni duyabiliyor ___?", correct: "musun"},
  {word: "Mesajımı aldın ___?", correct: "mı"},
  {word: "Cevap veriyor ___?", correct: "musun"},
  {word: "Telefonun açık ___?", correct: "mı"},
  {word: "Beni hatırlıyor ___?", correct: "musun"},
  {word: "Beni bekliyor ___?", correct: "musun"},
  {word: "Ne söylüyorsun? Doğru ___?", correct: "mu"},
  {word: "Bunu anladın ___?", correct: "mı"},
  {word: "Bir şey istiyor ___?", correct: "musun"},
  {word: "Su istiyor ___?", correct: "musun"},
  {word: "Çay içiyor ___?", correct: "musun"},
  {word: "Bira içiyor ___?", correct: "musun"},
  {word: "Hediye aldın ___?", correct: "mı"},
  {word: "Liste hazır ___?", correct: "mı"},
  {word: "Bu uygun ___?", correct: "mu"},
  {word: "Bunu kullanıyor ___?", correct: "musun"},
  {word: "Yeni telefon aldın ___?", correct: "mı"},
  {word: "Kartın var ___?", correct: "mı"},
  {word: "Bugün çalışıyor ___?", correct: "musun"},
  {word: "Yarın geliyor ___?", correct: "musun"},
  {word: "Hafta sonu boş ___?", correct: "musun"},
  {word: "Sık sık buraya geliyor ___?", correct: "musun"},
  {word: "Hiç İstanbul’a gittin ___?", correct: "mi"},
  {word: "Şimdi uygun ___?", correct: "musun"},
  {word: "Geç ___ kaldın?", correct: "mi"},
  {word: "Erken ___ geldin?", correct: "mi"},
  {word: "Hızlı ___ konuşuyorsun?", correct: "mı"},
  {word: "Yavaş ___ yürüyorsun?", correct: "mu"},
  {word: "Işık açık ___?", correct: "mı"},
  {word: "Kapı kilitli ___?", correct: "mı"},
  {word: "Cam açık ___?", correct: "mı"},
  {word: "Oda sıcak ___?", correct: "mı"},
  {word: "Burası sessiz ___?", correct: "mi"},
  {word: "Televizyon açık ___?", correct: "mı"},
  {word: "Telefon şarjda ___?", correct: "mı"},
  {word: "Buzdolabı dolu ___?", correct: "mu"},
  {word: "Araba çalışıyor ___?", correct: "mu"},
  {word: "Anahtar nerede? Sende ___?", correct: "mi"},
  {word: "Mutlu ___ bugün?", correct: "musun"},
  {word: "Üzgün ___?", correct: "müsün"},
  {word: "Sinirli ___?", correct: "misin"},
  {word: "Stresli ___?", correct: "misin"},
  {word: "Yorgun ___ biraz?", correct: "musun"},
  {word: "Rahat ___?", correct: "mısın"},
  {word: "İyi hissediyor ___?", correct: "musun"},
  {word: "Hasta gibi ___?", correct: "misin"},
  {word: "Uyanık ___?", correct: "mısın"},
  {word: "Hazır hissetiyor ___?", correct: "musun"}
];

// 2. VARIABLES DE ESTADO
let pool = []; 
let activeQueue = []; 
let current = null;
let lastWord = null; // Memoria para evitar repeticiones seguidas
let locked = false;
let gameMode = 'tr-es'; 
let currentRoundMode = 'tr-es'; 

const BLOCK_SIZE = 25; 
const MASTERY_THRESHOLD = 5;
let score = 0;
let progress = {};

// 3. GENERADOR DE NÚMEROS (Corregido con altı)
function getRandomNumberWord() {
    const units = ["", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"];
    const tens = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];
    const specials = [{ n: 100, tr: "yüz" }, { n: 1000, tr: "bin" }, { n: 1000000, tr: "bir milyon" }];
    
    if (Math.random() < 0.2) {
        let s = specials[Math.floor(Math.random() * specials.length)];
        return { word: s.tr, correct: s.n.toLocaleString() };
    }
    
    let n = Math.floor(Math.random() * 100);
    if (n === 0) return { word: "sıfır", correct: "0" };
    
    let ten = Math.floor(n / 10);
    let unit = n % 10;
    let tr = (tens[ten] + " " + units[unit]).trim();
    return { word: tr, correct: n.toString() };
}

// 4. FUNCIONES DE INTERFAZ
function showMenu() {
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('start-screen').style.display = '';
}

function setMode(mode, e) {
    gameMode = mode;
    document.querySelectorAll('#mode-selector .primary-btn').forEach(btn => {
        btn.style.opacity = "0.5";
        btn.style.transform = "scale(0.95)";
        btn.style.border = "none";
    });

    if (e && e.currentTarget) {
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.border = "2px solid white";
    }

    score = parseInt(localStorage.getItem(`turco_score_${mode}`)) || 0;
    progress = JSON.parse(localStorage.getItem(`turco_progress_${mode}`)) || {};
    
    const resumeBtn = document.getElementById('resume-button');
    if (resumeBtn) {
        resumeBtn.style.display = (score > 0 || Object.keys(progress).length > 0) ? 'block' : 'none';
    }
}

function resetAndStart() {
    localStorage.removeItem(`turco_score_${gameMode}`);
    localStorage.removeItem(`turco_progress_${gameMode}`);
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

// 5. LÓGICA DE JUEGO
function initBlocks() {
    let available = allWords.filter(item => (progress[item.word] || 0) < MASTERY_THRESHOLD);
    available.sort(() => Math.random() - 0.5);
    activeQueue = available.slice(0, BLOCK_SIZE);
    pool = available.slice(BLOCK_SIZE);
}

function updateUI() {
    let total = allWords.length;
    let percent = Math.round((score / total) * 100);
    const scoreEl = document.getElementById("score");
    const percentEl = document.getElementById("percent");
    if(scoreEl) scoreEl.textContent = score + " tamamlanan";
    if(percentEl) percentEl.textContent = "%" + percent;
}

function loadQuestion() {
    if (activeQueue.length === 0 && pool.length === 0) {
        document.getElementById("word").textContent = "TEBRİKLER! 🎉";
        document.getElementById("options").innerHTML = "";
        return;
    }
    
    locked = false;
    let isNumber = Math.random() < 0.10;
    
    // LÓGICA ANTI-REPETICIÓN
    let selectedItem;
    if (isNumber) {
        selectedItem = getRandomNumberWord();
    } else {
        if (activeQueue.length > 1) {
            do {
                selectedItem = activeQueue[Math.floor(Math.random() * activeQueue.length)];
            } while (selectedItem.word === lastWord);
        } else {
            selectedItem = activeQueue[0];
        }
    }
    
    current = selectedItem;
    lastWord = isNumber ? null : current.word;
    
    if (gameMode === 'mixed') { 
        currentRoundMode = Math.random() > 0.5 ? 'tr-es' : 'es-tr'; 
    } else { 
        currentRoundMode = gameMode; 
    }

    const wordElement = document.getElementById("word");
    const optionsContainer = document.getElementById("options");
    const dotsContainer = document.getElementById("dots");

    let correctText = (currentRoundMode === 'tr-es') ? current.correct : current.word;
    wordElement.textContent = (currentRoundMode === 'tr-es') ? current.word : current.correct;
    
    wordElement.classList.remove("word-mastered"); 
    optionsContainer.classList.remove("has-mastered");

    if (isNumber) { 
        dotsContainer.style.visibility = "hidden"; 
    } else { 
        dotsContainer.style.visibility = "visible"; 
        renderDots(current.word); 
    }

    let opts = new Set([correctText]);
    while(opts.size < 4) {
        let randomItem = allWords[Math.floor(Math.random() * allWords.length)];
        let randomOpt = (currentRoundMode === 'tr-es') ? randomItem.correct : randomItem.word;
        opts.add(randomOpt);
    }

    optionsContainer.innerHTML = "";
    [...opts].sort(() => Math.random() - 0.5).forEach(opt => {
        let btn = document.createElement("button");
        btn.className = "option";
        btn.textContent = opt;
        btn.onclick = (e) => handleAnswer(opt, correctText, e.target, isNumber);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selected, correct, btn, isNumber) {
    if (locked) return;
    locked = true;
    const optionsContainer = document.getElementById("options");
    let masteredThisTurn = false;

    document.querySelectorAll(".option").forEach(b => { 
        if (b.textContent === correct) b.classList.add("correct"); 
    });

    if (selected === correct) {
        if (!isNumber) {
            const wordKey = current.word;
            progress[wordKey] = (progress[wordKey] || 0) + 1;
            if (progress[wordKey] >= MASTERY_THRESHOLD) {
                masteredThisTurn = true;
                score++;
                document.getElementById("word").classList.add("word-mastered");
                optionsContainer.classList.add("has-mastered");
            }
        }
    } else {
        btn.classList.add("wrong");
        if (!isNumber) {
            const wordKey = current.word;
            if(progress[wordKey] > 0) progress[wordKey] -= 1;
        }
    }

    localStorage.setItem(`turco_score_${gameMode}`, score);
    localStorage.setItem(`turco_progress_${gameMode}`, JSON.stringify(progress));
    updateUI();

    if (!isNumber) renderDots(current.word, masteredThisTurn);

    setTimeout(() => {
        if (masteredThisTurn) {
            activeQueue = activeQueue.filter(x => x.word !== current.word);
            if (pool.length > 0) activeQueue.push(pool.shift());
        }
        loadQuestion();
    }, masteredThisTurn ? 1200 : 700);
}

function renderDots(wordKey, mastered = false) {
    let container = document.getElementById("dots");
    if (!container) return;
    container.innerHTML = "";
    let val = progress[wordKey] || 0;
    for (let i = 0; i < MASTERY_THRESHOLD; i++) {
        let d = document.createElement("div");
        d.className = "dot" + (i < val ? " active" : "") + (mastered ? " mastered" : "");
        container.appendChild(d);
    }
}

window.onload = () => {
    const firstBtn = document.querySelector('#mode-selector button');
    if(firstBtn) {
        setMode('tr-es', { currentTarget: firstBtn });
    }
}
