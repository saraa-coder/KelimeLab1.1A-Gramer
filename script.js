
// =====================
// 🧠 ESTADO GLOBAL
// =====================
let score = 0;
let muted = false;
let currentQuestion = null;
let history = [];

// =====================
// 📦 VOCABULARIO BASE
// =====================
const places = ["ev", "okul", "banka", "park", "ofis", "market", "oda"];
const objects = ["kitap", "telefon", "süt", "su", "kalem", "bilgisayar", "peynir"];
const adjectives = ["güzel", "büyük", "küçük", "yeni"];

// =====================
// 🔁 UTIL
// =====================
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// =====================
// 🧠 ARMONÍA VOCÁLICA
// =====================
function lastVowel(word) {
  return word.match(/[aeıioöuü]/gi)?.pop();
}

// =====================
// 📌 SUFIJOS CASOS
// =====================
function getSuffix(type, word) {
  const v = lastVowel(word);

  const back = ["a", "ı", "o", "u"];

  const isBack = back.includes(v);

  switch (type) {
    case "dative": return isBack ? "a" : "e";
    case "locative": return isBack ? "da" : "de";
    case "ablative": return isBack ? "dan" : "den";
    case "accusative": return isBack ? "ı" : "i";
  }
}

// =====================
// 🧱 MUTACIÓN CONSONÁNTICA
// =====================
function consonantFix(word) {
  const map = { p: "b", ç: "c", t: "d", k: "ğ" };
  const last = word[word.length - 1];

  return map[last] ? word.slice(0, -1) + map[last] : word;
}

// =====================
// 🧩 VAR / YOK
// =====================
function genVarYok() {
  const place = random(places);
  const object = random(objects);
  const answer = Math.random() > 0.5 ? "var" : "yok";

  return {
    sentence: `${place} ${object} ___.`,
    answer,
    options: shuffle(["var", "yok", "evet", "tamam"]),
    full: `${place} ${object} ${answer}.`
  };
}

// =====================
// ❓ SORU EKİ
// =====================
function genSoru() {
  const adj = random(adjectives);

  const v = lastVowel(adj);
  let particle = "mi";

  if (["a", "ı"].includes(v)) particle = "mı";
  if (["o", "u"].includes(v)) particle = "mu";
  if (["e", "i"].includes(v)) particle = "mi";
  if (["ö", "ü"].includes(v)) particle = "mü";

  return {
    sentence: `Bu ${adj} ___.?`,
    answer: particle,
    options: ["mi", "mı", "mu", "mü"],
    full: `Bu ${adj} ${particle}?`
  };
}

// =====================
// 📍 CASOS
// =====================
function genCase() {
  const place = random(places);
  const object = consonantFix(random(objects));

  const types = ["dative", "accusative", "locative", "ablative"];
  const type = random(types);

  const suffix = getSuffix(type, place);

  let sentence = "";

  if (type === "dative") sentence = `${place}__ gidiyorum.`;
  if (type === "accusative") sentence = `${object}__ görüyorum.`;
  if (type === "locative") sentence = `${place}__yim.`;
  if (type === "ablative") sentence = `${place}__ geliyorum.`;

  return {
    sentence,
    answer: suffix,
    options: shuffle(["a", "e", "ı", "i", "da", "de", "dan", "den"]),
    full: sentence.replace("__", suffix)
  };
}

// =====================
// 🎲 GENERADOR PRINCIPAL
// =====================
function generateQuestion() {
  const types = ["var", "soru", "case"];
  const type = random(types);

  let q;

  if (type === "var") q = genVarYok();
  if (type === "soru") q = genSoru();
  if (type === "case") q = genCase();

  if (history.includes(q.sentence)) {
    return generateQuestion();
  }

  history.push(q.sentence);
  if (history.length > 20) history.shift();

  return q;
}

// =====================
// 🎮 LOAD QUESTION
// =====================
function loadQuestion() {
  currentQuestion = generateQuestion();

  document.getElementById("questionBox").innerText =
    currentQuestion.sentence;

  const box = document.getElementById("options");
  box.innerHTML = "";

  currentQuestion.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;

    btn.onclick = () => checkAnswer(opt);

    box.appendChild(btn);
  });
}

// =====================
// 🎯 CHECK ANSWER
// =====================
function checkAnswer(selected) {
  const q = currentQuestion;
  const buttons = document.querySelectorAll("#options button");

  const isCorrect = selected === q.answer;

  buttons.forEach(btn => {
    btn.disabled = true;

    if (btn.innerText === q.answer) {
      btn.style.background = "#22c55e";
    }

    if (btn.innerText === selected && !isCorrect) {
      btn.style.background = "#ef4444";
    }
  });

  if (isCorrect) score++;

  speak(q.full);

  setTimeout(() => {
    loadQuestion();
  }, 900);
}

// =====================
// 🔊 TTS
// =====================
function speak(text) {
  if (muted) return;

  const u = new SpeechSynthesisUtterance(text);
  u.lang = "tr-TR";
  u.rate = 0.75;

  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

// =====================
// 🟢 PORTADA BOTONES
// =====================

// BAŞLA
document.getElementById("startBtn").onclick = () => {
  score = 0;
  history = [];
  showGame();
  loadQuestion();
};

// DEVAM ET
document.getElementById("continueBtn").onclick = () => {
  showGame();
  loadQuestion();
};

// MENÜ
document.getElementById("menuBtn").onclick = () => {
  showHome();
};

// AUDIO
document.getElementById("muteBtn").onclick =
document.getElementById("muteBtnGame").onclick = () => {
  muted = !muted;

  document.getElementById("muteBtn").innerText =
    muted ? "🔇 Audio OFF" : "🔊 Audio ON";

  document.getElementById("muteBtnGame").innerText =
    muted ? "🔇" : "🔊";
};

// =====================
// 🖥️ SCREENS
// =====================
function showGame() {
  document.getElementById("home").classList.remove("active");
  document.getElementById("game").classList.add("active");
}

function showHome() {
  document.getElementById("game").classList.remove("active");
  document.getElementById("home").classList.add("active");
}
