
// =====================
// 🧠 STATE
// =====================
let score = 0;
let muted = false;
let currentQuestion = null;
let history = [];

// =====================
// 📦 VOCABULARIO
// =====================
const places = ["ev", "okul", "banka", "park", "ofis", "market", "oda"];
const objects = ["kitap", "telefon", "süt", "su", "kalem", "bilgisayar", "peynir"];
const adjectives = ["güzel", "büyük", "küçük", "yeni"];

// =====================
// 🔁 UTIL SEGURO
// =====================
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function unique(arr) {
  return [...new Set(arr)];
}

// =====================
// 🧠 ARMONÍA VOCÁLICA
// =====================
function lastVowel(word) {
  return word.match(/[aeıioöuü]/gi)?.pop();
}

// =====================
// 📌 CASOS
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
// 🧱 VAR / YOK (FIX TOTAL)
// =====================
function genVarYok() {
  const place = random(places);
  const object = random(objects);
  const answer = Math.random() > 0.5 ? "var" : "yok";

  const options = unique(["var", "yok", "evet", "tamam"]);

  return {
    type: "var",
    sentence: `${place} ${object} ___.`,
    answer,
    options,
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
  if (["ö", "ü"].includes(v)) particle = "mü";

  const options = unique(["mi", "mı", "mu", "mü"]);

  return {
    type: "soru",
    sentence: `Bu ${adj} ___.?`,
    answer: particle,
    options,
    full: `Bu ${adj} ${particle}?`
  };
}

// =====================
// 🧱 CASOS
// =====================
function consonantFix(word) {
  const map = { p: "b", ç: "c", t: "d", k: "ğ" };
  const last = word[word.length - 1];
  return map[last] ? word.slice(0, -1) + map[last] : word;
}

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

  const options = unique(["a", "e", "ı", "i", "da", "de", "dan", "den"]);

  return {
    type: "case",
    sentence,
    answer: suffix,
    options,
    full: sentence.replace("__", suffix)
  };
}

// =====================
// 🎲 GENERADOR PRINCIPAL
// =====================
function generateQuestion() {
  const type = random(["var", "soru", "case"]);

  let q;

  if (type === "var") q = genVarYok();
  if (type === "soru") q = genSoru();
  if (type === "case") q = genCase();

  // 🔒 anti repetición
  if (history.includes(q.sentence)) {
    return generateQuestion();
  }

  history.push(q.sentence);
  if (history.length > 25) history.shift();

  // 🔒 SIEMPRE 4 OPCIONES EXACTAS
  q.options = shuffle(unique(q.options)).slice(0, 4);

  return q;
}

// =====================
// 🎮 LOAD QUESTION
// =====================
function loadQuestion() {
  currentQuestion = generateQuestion();

  const box = document.getElementById("options");
  box.innerHTML = "";

  const q = currentQuestion;

  document.getElementById("questionBox").innerText = q.sentence;

  const options = shuffle(unique(q.options)).slice(0, 4);

  options.forEach(opt => {
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
// 🔊 AUDIO
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
// 🟢 BOTONES PORTADA
// =====================
document.getElementById("startBtn").onclick = () => {
  score = 0;
  history = [];
  showGame();
  loadQuestion();
};

document.getElementById("continueBtn").onclick = () => {
  showGame();
  loadQuestion();
};

// =====================
// 🏠 MENU
// =====================
document.getElementById("menuBtn").onclick = () => {
  showHome();
};

// =====================
// 🔇 AUDIO TOGGLE
// =====================
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
