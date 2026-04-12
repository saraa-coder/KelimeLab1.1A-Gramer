// =====================
// 🧠 STATE GLOBAL
// =====================
let quiz = [];
let currentIndex = 0;
let score = 0;
let muted = false;

// =====================
// 📦 POOL MULTI-NIVEL (A1 MIX)
// =====================
const baseQuiz = [
  // 📦 VAR / YOK
  {
    sentence: "Buzdolabında süt ___.",
    answer: "var",
    options: ["var", "evet", "tamam", "şimdi"],
    fullCorrect: "Buzdolabında süt var."
  },
  {
    sentence: "Valizde telefon ___.",
    answer: "yok",
    options: ["yok", "evet", "tamam", "şimdi"],
    fullCorrect: "Valizde telefon yok."
  },

  // ❓ SORU EKİ
  {
    sentence: "Hava güzel ___.?",
    answer: "mi",
    options: ["mi", "mı", "mu", "mü"],
    fullCorrect: "Hava güzel mi?"
  },
  {
    sentence: "Sen mutlu ___.?",
    answer: "musun",
    options: ["musun", "müsün", "misin", "mısın"],
    fullCorrect: "Sen mutlu musun?"
  },

  // 📍 CASO (dativo / acusativo básico)
  {
    sentence: "Okul__ gidiyorum.",
    answer: "a",
    options: ["a", "e", "da", "den"],
    fullCorrect: "Okula gidiyorum."
  },
  {
    sentence: "Kitab__ okuyorum.",
    answer: "ı",
    options: ["ı", "i", "u", "ü"],
    fullCorrect: "Kitabı okuyorum."
  },

  // 📍 LOCATIVO / ABLATIVO
  {
    sentence: "Ev__yim.",
    answer: "de",
    options: ["de", "da", "te", "ta"],
    fullCorrect: "Evdeyim."
  },
  {
    sentence: "Okul__ geliyorum.",
    answer: "dan",
    options: ["dan", "den", "tan", "ten"],
    fullCorrect: "Okuldan geliyorum."
  }
];

// =====================
// 🚀 START
// =====================
document.getElementById("startBtn").onclick = () => {
  quiz = shuffle([...baseQuiz]);
  currentIndex = 0;
  score = 0;

  saveProgress();
  showGame();
  loadQuestion();
};

// =====================
// 🔁 CONTINUE
// =====================
document.getElementById("continueBtn").onclick = () => {
  const saved = JSON.parse(localStorage.getItem("kelimer_lab"));

  if (saved && saved.quiz) {
    quiz = saved.quiz;
    currentIndex = saved.index;
    score = saved.score;
  } else {
    quiz = shuffle([...baseQuiz]);
    currentIndex = 0;
    score = 0;
  }

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
  updateMuteUI();
};

function updateMuteUI() {
  const text = muted ? "🔇 Audio OFF" : "🔊 Audio ON";
  document.getElementById("muteBtn").innerText = text;
  document.getElementById("muteBtnGame").innerText = muted ? "🔇" : "🔊";
}

// =====================
// 🎮 LOAD QUESTION
// =====================
function loadQuestion() {
  const q = quiz[currentIndex];

  if (!q) return;

  document.getElementById("questionBox").innerText = q.sentence;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  shuffle(q.options).forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;

    btn.onclick = () => checkAnswer(opt, q);

    optionsDiv.appendChild(btn);
  });
}

// =====================
// 🎯 CHECK ANSWER (INFINITO + VISUAL)
// =====================
function checkAnswer(selected, q) {
  const buttons = document.querySelectorAll("#options button");

  const correct = q.answer;
  const isCorrect = selected === correct;

  buttons.forEach(btn => {
    btn.disabled = true;

    const value = btn.innerText;

    // 🟢 correcta
    if (value === correct) {
      btn.style.background = "#22c55e";
    }

    // 🔴 incorrecta seleccionada
    if (value === selected && !isCorrect) {
      btn.style.background = "#ef4444";
    }
  });

  if (isCorrect) score++;

  const correctSentence =
    q.fullCorrect || q.sentence.replace("___", correct);

  speak(correctSentence);

  currentIndex++;
  saveProgress();

  setTimeout(() => {
    // 🔁 INFINITO REAL
    if (currentIndex >= quiz.length) {
      quiz = shuffle([...baseQuiz]);
      currentIndex = 0;
    }

    loadQuestion();
  }, 900);
}

// =====================
// 💾 SAVE PROGRESS
// =====================
function saveProgress() {
  localStorage.setItem("kelimer_lab", JSON.stringify({
    quiz,
    index: currentIndex,
    score
  }));
}

// =====================
// 🔊 TEXT TO SPEECH
// =====================
function speak(text) {
  if (muted) return;

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "tr-TR";
  utter.rate = 0.75;

  const voices = speechSynthesis.getVoices();
  const emel = voices.find(v => v.name.includes("Emel"));

  if (emel) utter.voice = emel;

  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

// =====================
// 🎲 UTIL
// =====================
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

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
  document.getElementById("feedback").innerText = "";
}
