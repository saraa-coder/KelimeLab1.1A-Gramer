/**
 * MOTOR DE GRAMÁTICA TURCA PROFESIONAL
 */
const TR = {
    vowels: "aeıioöuü",
    sordas: "fstkçşhp",
    mutations: { 'k': 'ğ', 't': 'd', 'ç': 'c', 'p': 'b' },

    getH4: (w) => {
        const matches = w.match(/[aeıioöuü]/g);
        const v = matches ? matches.pop() : 'a';
        if ("aı".includes(v)) return "ı";
        if ("ei".includes(v)) return "i";
        if ("ou".includes(v)) return "u";
        return "ü";
    },

    getH2: (w) => {
        const matches = w.match(/[aeıioöuü]/g);
        const v = matches ? matches.pop() : 'a';
        return "aıou".includes(v) ? "a" : "e";
    },

    applyKetcap: (w) => {
        if (w.toLowerCase() === "su") return "su";
        const last = w.slice(-1).toLowerCase();
        return TR.mutations[last] ? w.slice(0, -1) + TR.mutations[last] : w;
    },

    conjugateVerb: (root, person) => {
        const h4 = TR.getH4(root);
        const pSuf = { ben: "um", sen: "sun", o: "", biz: "uz", siz: "sunuz" };
        let base = root;
        if (root === "git") base = "gid";
        if ("aeıioöuü".includes(root.slice(-1))) base = root.slice(0, -1);
        
        const connector = (root === "ye") ? "i" : h4;
        return base + connector + "yor" + pSuf[person];
    }
};

const game = {
    score: 0,
    curr: null,

    nouns: {
        objects: [
            { w: "elma", m: "la manzana" }, { w: "ekmek", m: "el pan" },
            { w: "kitap", m: "el libro" }, { w: "kapı", m: "la puerta" },
            { w: "su", m: "el agua" }, { w: "gazete", m: "el periódico" }
        ],
        places: [
            { w: "okul", m: "la escuela" }, { w: "ev", m: "la casa" },
            { w: "iş", m: "el trabajo" }, { w: "park", m: "el parque" },
            { w: "sokak", m: "la calle" }, { w: "hastane", m: "el hospital" }
        ],
        people: [
            { w: "doktor", m: "médico/a" }, { w: "öğretmen", m: "profesor/a" },
            { w: "mutlu", m: "feliz" }, { w: "yorgun", m: "cansado/a" }
        ]
    },

    verbs: [
        { w: "ye", m: "comiendo", case: "acusativo", cat: "objects" },
        { w: "oku", m: "leyendo", case: "acusativo", cat: "objects" },
        { w: "git", m: "yendo", case: "dativo", cat: "places" },
        { w: "gel", m: "viniendo", case: "ablativo", cat: "places" },
        { w: "otur", m: "viviendo/sentado", case: "locativo", cat: "places" }
    ],

    generate() {
        const isNominal = Math.random() > 0.5;
        const p = ["ben", "sen", "o", "biz", "siz"][Math.floor(Math.random() * 5)];

        if (isNominal) {
            const n = this.nouns.people[Math.floor(Math.random() * this.nouns.people.length)];
            const type = ["olumlu", "olumsuz", "soru"][Math.floor(Math.random() * 3)];
            return { noun: n, person: p, mode: "nominal", type: type };
        } else {
            const v = this.verbs[Math.floor(Math.random() * this.verbs.length)];
            const n = this.nouns[v.cat][Math.floor(Math.random() * this.nouns[v.cat].length)];
            return { noun: n, verb: v, person: p, mode: "verb", case: v.case };
        }
    },

    init() {
        this.curr = this.generate();
        this.render();
    },

    render() {
        const c = this.curr;
        const grid = document.getElementById("options-grid");
        const display = document.getElementById("sentence-display");
        grid.innerHTML = "";

        let correct = "";
        let opts = [];
        let sentenceText = "";

        if (c.mode === "verb") {
            const h2 = TR.getH2(c.noun.w);
            const h4 = TR.getH4(c.noun.w);
            const isV = TR.vowels.includes(c.noun.w.slice(-1));
            const isS = TR.sordas.includes(c.noun.w.slice(-1));

            if (c.case === "acusativo") {
                correct = (c.noun.w === "su" ? "yu" : (isV ? "y" : "") + h4);
                opts = ["ı", "i", "u", "ü", "yı", "yi", "yu"];
            } else if (c.case === "dativo") {
                correct = (isV ? "y" : "") + h2;
                opts = ["a", "e", "ya", "ye"];
            } else if (c.case === "locativo") {
                correct = (isS ? "t" : "d") + h2;
                opts = ["da", "de", "ta", "te"];
            } else if (c.case === "ablativo") {
                correct = (isS ? "t" : "d") + h2 + "n";
                opts = ["dan", "den", "tan", "ten"];
            }
            const root = (c.case === "acusativo" || c.case === "dativo") ? TR.applyKetcap(c.noun.w) : c.noun.w;
            sentenceText = `${root}<span class="gap">___</span> ${TR.conjugateVerb(c.verb.w, c.person)}.`;
        } else {
            // NOMINAL
            const h4 = TR.getH4(c.noun.w);
            const isV = TR.vowels.includes(c.noun.w.slice(-1));
            if (c.type === "olumlu") {
                const pSuf = { ben: "y?m", sen: "s?n", o: "", biz: "y?z", siz: "s?n?z" };
                correct = pSuf[c.person].replace("?", h4);
                if ((c.person === "ben" || c.person === "biz") && isV) correct = "y" + correct.slice(1);
                if (c.person === "o") correct = ""; 
                opts = ["um", "im", "sun", "sin", "uz", "iz", "yum", "yim", ""];
                sentenceText = `${c.noun.w}<span class="gap">___</span>.`;
            } else if (c.type === "olumsuz") {
                const pSuf = { ben: "im", sen: "sin", o: "", biz: "iz", siz: "siniz" };
                correct = "değil" + (c.person === "o" ? "" : " " + pSuf[c.person]);
                opts = ["değilim", "değilsin", "değil", "değiliz", "değilsiniz"];
                sentenceText = `${c.noun.w} <span class="gap">_______</span>.`;
            } else {
                const m = "m" + h4;
                const pSuf = { ben: "y?m", sen: "s?n", o: "", biz: "y?z", siz: "s?n?z" };
                correct = m + (c.person === "o" ? "" : " " + pSuf[c.person].replace("?", h4));
                opts = ["mıyım", "misin", "mi", "muyum", "mısınız", "miyiz"];
                sentenceText = `${c.noun.w} <span class="gap">_______</span>?`;
            }
        }

        display.innerHTML = sentenceText;

        // Asegurar que la correcta esté y mezclar
        let finalOptions = [...new Set(opts)].filter(o => o !== correct).sort(() => 0.5 - Math.random()).slice(0, 3);
        finalOptions.push(correct);
        finalOptions.sort(() => 0.5 - Math.random());

        finalOptions.forEach(suf => {
            const btn = document.createElement("button");
            btn.className = "opt";
            btn.innerText = (suf === "" ? "(sin sufijo)" : (c.mode === "verb" || c.type === "olumlu" ? "-" + suf : suf));
            btn.onclick = () => {
                if (suf === correct) {
                    this.score += 10;
                    document.getElementById("score").innerText = `Puntos: ${this.score}`;
                    this.init();
                } else {
                    btn.style.borderColor = "red";
                    setTimeout(() => btn.style.borderColor = "#eee", 400);
                }
            };
            grid.appendChild(btn);
        });
    },

    showHint(type) {
        const c = this.curr;
        const prons = { ben: "Yo", sen: "Tú", o: "Él/Ella", biz: "Nosotros/as", siz: "Vosotros/as" };
        if (type === 't') {
            let msg = "";
            if (c.mode === "verb") {
                msg = `${prons[c.person]} estoy ${c.verb.m} ${c.noun.m}.`;
            } else {
                if (c.type === "olumlu") msg = `${prons[c.person]} soy/estoy ${c.noun.m}.`;
                else if (c.type === "olumsuz") msg = `${prons[c.person]} no soy/estoy ${c.noun.m}.`;
                else msg = `¿${prons[c.person]} soy/estoy ${c.noun.m}?`;
            }
            document.getElementById("hint-display").innerText = msg;
        } else {
            document.getElementById("rule-display").innerText = c.mode === "verb" ? `Caso ${c.case.toUpperCase()}` : "Oración Nominal";
        }
    }
};

game.init();
