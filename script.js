/**
 * TURKCE MASTER - MOTOR CON CONCORDANCIA PLURAL EN ESPAÑOL
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
        if (w.length <= 2) return w; 
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
            { w: "ekmek", m: "el pan" }, { w: "elma", m: "la manzana" },
            { w: "kitap", m: "el libro" }, { w: "kapı", m: "la puerta" },
            { w: "su", m: "el agua" }, { w: "gazete", m: "el periódico" }
        ],
        places: [
            { w: "ev", m: "la casa" }, { w: "okul", m: "la escuela" },
            { w: "park", m: "el parque" }, { w: "iş", m: "el trabajo" },
            { w: "sokak", m: "la calle" }, { w: "market", m: "el mercado" }
        ],
        people: [
            { w: "doktor", m: "médico/a", pl: "médicos/as", vEsp: "ser" },
            { w: "öğretmen", m: "profesor/a", pl: "profesores/as", vEsp: "ser" },
            { w: "avukat", m: "abogado/a", pl: "abogados/as", vEsp: "ser" },
            { w: "mutlu", m: "feliz", pl: "felices", vEsp: "estar" },
            { w: "yorgun", m: "cansado/a", pl: "cansados/as", vEsp: "estar" },
            { w: "hasta", m: "enfermo/a", pl: "enfermos/as", vEsp: "estar" }
        ]
    },

    verbs: [
        { w: "ye", m: "comiendo", case: "acusativo", cat: "objects" },
        { w: "oku", m: "leyendo", case: "acusativo", cat: "objects" },
        { w: "git", m: "yendo", case: "dativo", cat: "places" },
        { w: "gel", m: "viniendo", case: "ablativo", cat: "places" }
    ],

    generate() {
        const mode = Math.random() > 0.4 ? "nominal" : "verb";
        const p = ["ben", "sen", "o", "biz", "siz"][Math.floor(Math.random() * 5)];

        if (mode === "nominal") {
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
                opts = ["ı", "i", "u", "ü", "yı", "yi", "yu", "yü"];
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
            const h4 = TR.getH4(c.noun.w);
            const isV = TR.vowels.includes(c.noun.w.slice(-1));
            if (c.type === "olumlu") {
                const pSuf = { ben: "y?m", sen: "s?n", o: "", biz: "y?z", siz: "s?n?z" };
                correct = pSuf[c.person].replace("?", h4);
                if ((c.person === "ben" || c.person === "biz") && isV) correct = "y" + correct.slice(1);
                opts = ["um", "im", "sun", "sin", "uz", "iz", "yum", "yim", "sunuz", "siniz", ""];
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
                opts = ["mıyım", "misin", "mi", "muyum", "mısınız", "miyiz", "mı"];
                sentenceText = `${c.noun.w} <span class="gap">_______</span>?`;
            }
        }

        display.innerHTML = sentenceText;

        let pool = [...new Set(opts)].filter(o => o !== correct).sort(() => 0.5 - Math.random()).slice(0, 3);
        pool.push(correct);
        pool.sort(() => 0.5 - Math.random());

        pool.forEach(suf => {
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
        const prons = { ben: "Yo", sen: "Tú", o: "Él/Ella", biz: "Nosotros", siz: "Vosotros" };
        const conj = {
            ser: { ben: "soy", sen: "eres", o: "es", biz: "somos", siz: "sois" },
            estar: { ben: "estoy", sen: "estás", o: "está", biz: "estamos", siz: "estáis" }
        };

        if (type === 't') {
            let msg = "";
            if (c.mode === "verb") {
                const vProns = { ben: "estoy", sen: "estás", o: "está", biz: "estamos", siz: "estáis" };
                msg = `${prons[c.person]} ${vProns[c.person]} ${c.verb.m} ${c.noun.m}.`;
            } else {
                const v = conj[c.noun.vEsp][c.person];
                // Concordancia plural: Si es biz/siz, usa n.pl, si no n.m
                const adjective = (c.person === "biz" || c.person === "siz") ? c.noun.pl : c.noun.m;
                
                if (c.type === "olumlu") msg = `${prons[c.person]} ${v} ${adjective}.`;
                else if (c.type === "olumsuz") msg = `${prons[c.person]} no ${v} ${adjective}.`;
                else msg = `¿${prons[c.person]} ${v} ${adjective}?`;
            }
            document.getElementById("hint-display").innerText = msg;
        } else {
            const rule = c.mode === "verb" ? `Caso ${c.case.toUpperCase()}` : `Estructura: ${c.type}`;
            document.getElementById("rule-display").innerText = rule;
        }
    }
};

window.onload = () => game.init();
