// =====================
// 🧠 STATE
// =====================
let quiz = [];
let currentIndex = 0;
let score = 0;
let muted = false;

// =====================
// 📦 BASE QUIZ
// =====================
const baseQuiz = [
  {
    sentence: "Buzdolabında süt ___.",
    answer: "var",
    options: ["var", "yok", "evet", "hayır"]
  },
  {
    sentence: "Valizde telefon ___.",
    answer: "yok",
    options: ["var", "yok", "tamam", "şimdi"]
  },
  {
    sentence: "Evde internet ___.",
    answer: "yok",
    options: ["var", "yok", "iyi", "burada"]
  },
  {
    sentence: "Hava güzel ___.",
    answer: "mi",
    options: ["mi", "mı", "mu", "mü"]
  },
  {
    sentence: "Sen mutlu ___.",
    answer: "musun",
    options: ["misin", "mısın", "musun", "müsün"]
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

  if (saved) {
    quiz = saved.quiz;
    currentIndex = saved.index;
    score = saved.score;
  } else {
    quiz = shuffle([...baseQuiz]);
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
// 🎮 GAME LOGIC
// =====================
function loadQuestion() {
  const q = quiz[currentIndex];

  document.getElementById("questionBox").innerText = q.sentence;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  shuffle(q.options).forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;

    btn.onclick = () => checkAnswer(opt, q.answer);

    optionsDiv.appendChild(btn);
  });

  speak(q.sentence);
}

function checkAnswer(selected, correct) {
  const feedback = document.getElementById("feedback");

  if (selected === correct) {
    score++;
    feedback.innerText = "✔ Doğru!";
  } else {
    feedback.innerText = `✖ Yanlış. Doğru: ${correct}`;
  }

  currentIndex++;

  saveProgress();

  setTimeout(() => {
    if (currentIndex < quiz.length) {
      loadQuestion();
    } else {
      feedback.innerText = `🎉 Bitti! Score: ${score}/${quiz.length}`;
      localStorage.removeItem("kelimer_lab");
    }
  }, 900);
}

// =====================
// 💾 SAVE
// =====================
function saveProgress() {
  localStorage.setItem("kelimer_lab", JSON.stringify({
    quiz,
    index: currentIndex,
    score
  }));
}

// =====================
// 🔊 TTS
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
