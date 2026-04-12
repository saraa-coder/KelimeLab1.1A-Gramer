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

// VAR / YOK
{word:"Evde süt ___?",correct:"var mı",translation:"¿Hay leche en casa?"},
{word:"Buzdolabında ekmek ___?",correct:"var mı",translation:"¿Hay pan en el frigorífico?"},

// CASOS
{word:"Kitabı masa___ koyuyorum",correct:"ya",translation:"Pongo el libro en la mesa"},
{word:"Suyu bardak___ koyuyorum",correct:"a",translation:"Pongo el agua en el vaso"},

// EK-FIIL OLUMSUZ
{word:"Ben doktor değil ___",correct:"im",translation:"No soy médico"},
{word:"Sen öğrenci değil ___",correct:"sin",translation:"No eres estudiante"},
{word:"O doktor ___",correct:"değil",translation:"No es médico"},
{word:"Biz doktor değil ___",correct:"iz",translation:"No somos médicos"},
{word:"Siz doktor değil ___",correct:"siniz",translation:"No sois médicos"},
{word:"Onlar doktor ___",correct:"değil",translation:"No son médicos"},

// EK-FIIL OLUMLU SORU
{word:"Ben mühendis ___?",correct:"miyim",translation:"¿Soy ingeniero?"},
{word:"Sen pilot ___?",correct:"musun",translation:"¿Eres piloto?"},
{word:"O kaptan ___?",correct:"mı",translation:"¿Es capitán?"},
{word:"Biz doktor ___?",correct:"muyuz",translation:"¿Somos médicos?"},
{word:"Siz diplomat ___?",correct:"mısınız",translation:"¿Sois diplomáticos?"},
{word:"Onlar ressam ___?",correct:"mı",translation:"¿Son pintores?"},

// ==============================
// EK-FIIL OLUMSUZ SORU (CORRECTO)
// ==============================

// BEN
{word:"Ben doktor değil ___?",correct:"miyim",translation:"¿No soy médico?"},
{word:"Ben öğretmen değil ___?",correct:"miyim",translation:"¿No soy profesor?"},
{word:"Ben mutlu değil ___?",correct:"miyim",translation:"¿No soy feliz?"},

// SEN
{word:"Sen öğrenci değil ___?",correct:"misin",translation:"¿No eres estudiante?"},
{word:"Sen yorgun değil ___?",correct:"misin",translation:"¿No estás cansado?"},
{word:"Sen hazır değil ___?",correct:"misin",translation:"¿No estás listo?"},

// O
{word:"O doktor değil ___?",correct:"mi",translation:"¿No es médico?"},
{word:"O mutlu değil ___?",correct:"mi",translation:"¿No está feliz?"},
{word:"O açık değil ___?",correct:"mi",translation:"¿No está abierto?"},

// BİZ
{word:"Biz öğrenci değil ___?",correct:"miyiz",translation:"¿No somos estudiantes?"},
{word:"Biz hazır değil ___?",correct:"miyiz",translation:"¿No estamos listos?"},
{word:"Biz mutlu değil ___?",correct:"miyiz",translation:"¿No estamos felices?"},

// SİZ
{word:"Siz doktor değil ___?",correct:"misiniz",translation:"¿No sois médicos?"},
{word:"Siz yorgun değil ___?",correct:"misiniz",translation:"¿No estáis cansados?"},
{word:"Siz hazır değil ___?",correct:"misiniz",translation:"¿No estáis listos?"},

// ONLAR
{word:"Onlar doktor değil ___?",correct:"mi",translation:"¿No son médicos?"},
{word:"Onlar mutlu değil ___?",correct:"mi",translation:"¿No están felices?"},
{word:"Onlar açık değil ___?",correct:"mi",translation:"¿No están abiertos?"}
];


// 2. VARIABLES
let activeQueue = [];
let current = null;
let locked = false;

let score = 0;

// 3. START
function startGame() {
    activeQueue = [...allWords];
    loadQuestion();
}

// 4. LOGICA
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

    setTimeout(loadQuestion, 700);
}

window.onload = startGame;
