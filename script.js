const TR = {
    vowels: "aeıioöuü",
    sordas: "fstkçşhp",
    mutations: { 'k': 'ğ', 't': 'd', 'ç': 'c', 'p': 'b' },
    getH4: (w) => {
        const v = w.match(/[aeıioöuü]/g).pop();
        if ("aı".includes(v)) return "ı"; if ("ei".includes(v)) return "i";
        if ("ou".includes(v)) return "u"; return "ü";
    },
    getH2: (w) => "aıou".includes(w.match(/[aeıioöuü]/g).pop()) ? "a" : "e",
    applyKetcap: (w) => {
        const last = w.slice(-1).toLowerCase();
        return TR.mutations[last] ? w.slice(0,-1) + TR.mutations[last] : w;
    },
    conjugateVerb: (root, person) => {
        const h4 = TR.getH4(root);
        const pSuf = { ben: "um", sen: "sun", o: "", biz: "uz", siz: "sunuz" };
        let base = root;
        // Regla especial para verbos como 'git' (Ketçap en verbos)
        if(root === "git") base = "gid";
        return base + "iyor" + pSuf[person];
    }
};

const game = {
    score: 0,
    nouns: [
        { w: "kapı", m: "puerta", type: "obj" },
        { w: "kitap", m: "libro", type: "obj" },
        { w: "ekmek", m: "pan", type: "obj" },
        { w: "elma", m: "manzana", type: "obj" },
        { w: "okul", m: "escuela", type: "place" },
        { w: "ev", m: "casa", type: "place" },
        { w: "bahçe", m: "jardín", type: "place" }
    ],
    verbs: [
        { w: "aç", m: "abrir" },
        { w: "bak", m: "mirar" },
        { w: "al", m: "tomar/comprar" },
        { w: "git", m: "ir" },
        { w: "gel", m: "venir" },
        { w: "ye", m: "comer" }
    ],

    generate() {
        const n = this.nouns[Math.floor(Math.random() * this.nouns.length)];
        const v = this.verbs[Math.floor(Math.random() * this.verbs.length)];
        const p = ["ben", "sen", "o", "biz"][Math.floor(Math.random() * 4)];
        
        // Decidir caso según el verbo
        let selectedCase = "acusativo"; 
        if (v.w === "bak") selectedCase = "dativo";
        if (v.w === "git") selectedCase = "dativo";
        if (v.w === "gel") selectedCase = "ablativo";

        return { noun: n, verb: v, person: p, case: selectedCase };
    },

    init() { this.curr = this.generate(); this.render(); },

    render() {
        const c = this.curr;
        const grid = document.getElementById("options-grid");
        grid.innerHTML = "";
        
        const h2 = TR.getH2(c.noun.w);
        const h4 = TR.getH4(c.noun.w);
        const isVocal = TR.vowels.includes(c.noun.w.slice(-1));
        const isSorda = TR.sordas.includes(c.noun.w.slice(-1));

        let correctSuf = "";
        let opts = [];

        if (c.case === "acusativo") {
            correctSuf = (isVocal ? "y" : "") + h4;
            opts = ["ı", "i", "u", "ü", "yı", "yi"];
        } else if (c.case === "dativo") {
            correctSuf = (isVocal ? "y" : "") + h2;
            opts = ["a", "e", "ya", "ye"];
        } else if (c.case === "ablativo") {
            correctSuf = (isSorda ? "t" : "d") + h2 + "n";
            opts = ["dan", "den", "tan", "ten"];
        }

        const verbConj = TR.conjugateVerb(c.verb.w, c.person);
        const rootMod = (c.case === "acusativo" || c.case === "dativo") ? TR.applyKetcap(c.noun.w) : c.noun.w;
        
        document.getElementById("sentence-display").innerHTML = 
            `${rootMod}<span class="gap">___</span> ${verbConj}.`;

        opts.slice(0, 4).forEach(suf => {
            const btn = document.createElement("button");
            btn.className = "opt";
            btn.innerText = "-" + suf;
            btn.onclick = () => {
                if (suf === correctSuf) {
                    this.score += 10;
                    document.getElementById("score").innerText = `Puntos: ${this.score}`;
                    this.init();
                } else { alert("¡Hata!"); }
            };
            grid.appendChild(btn);
        });
    },

    showHint(type) {
        const c = this.curr;
        if (type === 't') {
            const prons = {ben:"Yo", sen:"Tú", o:"Él/Ella", biz:"Nosotros"};
            document.getElementById("hint-display").innerText = `${prons[c.person]} estoy ${c.verb.m} el/la ${c.noun.m}`;
        }
        if (type === 'r') {
            document.getElementById("rule-display").innerText = `Caso ${c.case.toUpperCase()} requerido por el verbo.`;
        }
    }
};

game.init();
