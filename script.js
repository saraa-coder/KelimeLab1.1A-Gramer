// BASE DE DATOS
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
{word:"Türkçe öğreniyor ___?",correct:"musun",translation:"¿Estás aprendiendo turco?"}
];

// VARIABLES
let pool=[],activeQueue=[],current=null,locked=false;
let gameMode='tr-es',currentRoundMode='tr-es';
const BLOCK_SIZE=10,MASTERY_THRESHOLD=3;
let score=0,progress={};

// FUNCIONES
function startGame(){
document.getElementById('start-screen').style.display='none';
document.getElementById('game-container').style.display='flex';
activeQueue=[...allWords];
loadQuestion();
}

function loadQuestion(){
locked=false;
current=activeQueue[Math.floor(Math.random()*activeQueue.length)];

const wordElement=document.getElementById("word");
const optionsContainer=document.getElementById("options");

wordElement.innerHTML=`
<div>${current.word}</div>
<div class="translation">${current.translation}</div>
`;

let opts=new Set([current.correct]);
while(opts.size<4){
let r=allWords[Math.floor(Math.random()*allWords.length)].correct;
opts.add(r);
}

optionsContainer.innerHTML="";
[...opts].sort(()=>Math.random()-0.5).forEach(opt=>{
let btn=document.createElement("button");
btn.className="option";
btn.textContent=opt;
btn.onclick=()=>handleAnswer(opt,btn);
optionsContainer.appendChild(btn);
});
}

function handleAnswer(selected,btn){
if(locked)return;
locked=true;

document.querySelectorAll(".option").forEach(b=>{
if(b.textContent===current.correct)b.classList.add("correct");
});

if(selected!==current.correct){
btn.classList.add("wrong");
}

setTimeout(loadQuestion,700);
}

function showMenu(){
document.getElementById('game-container').style.display='none';
document.getElementById('start-screen').style.display='';
}
