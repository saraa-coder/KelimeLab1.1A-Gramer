// =====================
// 🧠 STATE
// =====================
let currentQuestion = null;
let score = 0;
let muted = false;
let history = [];

// =====================
// 📦 VOCABULARIO BASE
// =====================
const places = ["ev", "okul", "banka", "park", "ofis", "market", "oda"];
const objects = ["kitap", "telefon", "süt", "su", "kalem", "bilgisayar", "peynir"];

// =====================
// 🔁 UTILIDADES
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

function getSuffix(type, word) {
  const v = lastVowel(word);

  const back = ["a", "ı", "o", "u"];
  const front = ["e", "i", "ö", "ü"];

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
  const last = word[word.length - 1];

  const map = {
    "p": "b",
    "ç": "c",
    "t": "d",
    "k": "ğ"
  };

  if (map[last]) {
    return word.slice(0, -1) + map[last];
  }

  return word;
}

// =====================
// 🧩 GENERADOR VAR / YOK
// =====================
function genVarYok() {
  const place = random(places);
  const object = random(objects);

  const answer = Math.random() > 0.5 ? "var" : "yok";

  return {
    type: "varYok",
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
  const adj = random(["güzel", "büyük", "küçük", "yeni"]);

  const particle = (() => {
    const v = lastVowel(adj);
    if (["e", "i"].includes(v)) return "mi";
    if (["a", "ı"].includes(v)) return "mı";
    if (["o", "u"].includes(v)) return "mu";
    return "mü";
  })();

  return {
    type: "soru",
    sentence: `Bu ${adj} ___.?`,
    answer: particle,
    options: shuffle(["mi", "mı", "mu", "mü"]),
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

  switch (type) {
    case "dative":
      sentence = `${place}__ gidiyorum.`;
      break;
    case "accusative":
      sentence = `${object}__ görüyorum.`;
      break;
    case "locative":
      sentence = `${place}__yim.`;
      break;
    case "ablative":
      sentence = `${place}__ geliyorum.`;
      break;
  }

  return {
    type: "case",
    sentence,
    answer: suffix,
    options: shuffle(["a", "e", "ı", "i", "da", "de", "dan", "den"]),
    full:
      type === "dative" ? `${place}${suffix}` :
      type === "accusative" ? `${object}${suffix}` :
      type === "locative" ? `${place}${suffix}` :
      `${place}${suffix}`
  };
}

// =====================
// 🎲 GENERADOR PRINCIPAL
// =====================
function generateQuestion() {
  const types = ["varYok", "soru", "case"];
  const type = random(types);

  let q;

  if (type === "varYok") q = genVarYok();
  if (type === "soru") q = genSoru();
  if (type === "case") q = genCase();

  // anti repetición simple
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
// 🟢 START
// =====================
window.onload = () => {
  loadQuestion();
};
