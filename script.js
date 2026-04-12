/**
 * MOTOR DE GRAMÁTICA TURCA
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
        const last = w.slice(-1).toLowerCase();
        if (w.toLowerCase() === "su") return "su"; // Excepción
        return TR.mutations[last] ? w.slice(0, -1) + TR.mutations[last] : w;
    },

    conjugateVerb: (root, person) => {
        const h4 = TR.getH4(root);
        const pSuf = { ben: "um", sen: "sun", o: "", biz: "uz", siz: "sunuz" };
        let base = root;
        if (root === "git") base = "gid";
        if (root === "ye") base = "y"; // ye + iyor -> yiyor
        
        const connector = (root === "ye") ? "i" : h4;
        return base + connector + "yor" + pSuf[person];
    }
};

/**
 * LÓGICA DEL JUEGO
 */
const game = {
    score: 0,
    curr: null,

    // Vocabulario organizado por categorías semánticas
    nouns: {
        objects: [
            { w: "elma", m: "la manzana" }, { w: "ekmek", m: "el pan" },
            { w: "kitap", m: "el libro" }, { w: "kapı", m: "la puerta" },
            { w: "su", m: "el agua" }, { w: "gazete", m: "el periódico" },
            { w: "çay", m: "el té" }, { w: "kahve", m: "el café" },
            { w: "defter", m: "el cuaderno" }, { w: "çanta", m: "el bolso" },
            { w: "çiçek", m: "la flor" }, { w: "bardak", m: "el vaso" }
        ],
        places: [
            { w: "okul", m: "la escuela" }, { w: "ev", m: "la casa" },
            { w: "iş", m: "el trabajo" }, { w: "fırın", m: "la panadería" },
            { w: "park", m: "el parque" }, { w: "sokak", m: "la calle" },
            { w: "market", m: "el mercado" }, { w: "hastane", m: "el hospital" },
            { w: "eczane", m: "la farmacia" }, { w: "restoran", m: "el restaurante" },
            { w: "bahçe", m: "el jardín" }, { w: "ofis", m: "la oficina" }
        ],
        people: [
            { w: "öğretmen", m: "profesor/a" }, { w: "öğrenci", m: "estudiante" },
            { w: "doktor", m: "médico/a" }, { w: "avukat", m: "abogado/a" },
            { w: "mutlu", m: "feliz" }, { w: "yorgun", m: "cansado/a" },
            { w: "çalışkan", m: "trabajador/a" }, { w: "hasta", m: "enfermo/a" },
            { w: "evli", m: "casado/a" }, { w: "bekâr", m: "soltero/a" }
        ]
    },

    verbs: [
        { w: "ye", m: "comiendo", case: "acusativo", cat: "objects" },
        { w: "oku", m: "leyendo", case: "acusativo", cat: "objects" },
        { w: "al", m: "comprando/tomando", case: "acusativo", cat: "objects" },
        { w: "bak", m: "mirando", case: "dativo", cat: "objects" },
        { w: "git", m: "yendo", case: "dativo", cat: "places" },
        { w: "gel", m: "viniendo", case: "ablativo", cat: "places" },
        { w: "otur", m: "viviendo/sentado", case: "locativo", cat: "places" },
        { w: "bak", m: "mirando (hacia)", case: "dativo", cat: "places" }
    ],

    generate() {
        const isNominal = Math.random() > 0.4; // 60% nominal, 40% verbos
        const p = ["ben", "sen", "o", "biz", "siz"][Math.floor(Math.random() * 5)];

        if (isNominal) {
            const n = this.nouns.people[Math.floor(Math.random() * this.nouns.people.length)];
            const type = ["olumlu", "olumsuz", "olumlu_soru"][Math.floor(Math.random() * 3)];
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
        document.getElementById("hint-display").innerText = "";
        document.getElementById("rule-display").innerText = "";

        let correct = "";
        let opts = [];
        let sentenceText = "";

        if (c.mode === "verb") {
            const h2 = TR.getH2(c.noun.w);
            const h4 = TR.getH4(c.noun.w);
            const isV = TR.vowels.includes(c.noun.w.slice(-1));
            const isS = TR.sordas.includes(c.noun.w.slice(-1));

            if (c.case === "acusativo") {
                if (c.noun.w === "su") correct = "yu";
                else correct = (isV ? "y" : "") + h4;
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
            // LÓGICA NOMINAL
            const h4 = TR.getH4(c.noun.w);
            const isV = TR.vowels.includes(c.noun.w.slice(-1));
            const pSuf = { ben: "y?m", sen: "s?n", o: "", biz: "y?z", siz: "s?n?z" };

            if (c.type === "olumlu") {
                let suf = pSuf[c.person].replace("?", h4);
                if ((c.person === "ben" || c.person === "biz") && isV) suf = "y" + suf.slice(1);
                correct = suf;
                opts = ["um", "im", "sun", "sin", "uz", "iz", "yum", "yim", "sunuz", "siniz"];
                sentenceText = `${c.noun.w}<span class="gap">___</span>.`;
            } else if (c.type === "olumsuz") {
                correct = "değil" + (c.person === "sen" ? "sin" : c.person === "ben" ? "im" : c.person === "biz" ? "iz" : "");
                opts = ["değilim", "değilsin", "değil", "değiliz"];
                sentenceText = `${c.noun.w} <span class="gap">_______</span>.`;
            } else {
                // Soru
                const m = "m" + h4;
                const pS = { ben: "y?m", sen: "s?n", o: "", biz: "y?z", siz: "s?n?z" };
                correct = m + (c.person === "o" ? "" : " " + pS[c.person].replace("?", h4));
                opts = ["muyum", "misin", "miyim", "musun", "mısın", "mi"];
                sentenceText = `${c.noun.w} <span class="gap">_______</span>?`;
            }
        }

        display.innerHTML = sentenceText;

        // Limpiar y mezclar opciones
        const filteredOpts = [...new Set(opts)].filter(o => o !== "");
        filteredOpts.sort(() => Math.random() - 0.5).slice(0, 4).forEach(suf => {
            const btn = document.createElement("button");
            btn.className = "opt";
            btn.innerText = (c.mode === "nominal" && c.type !== "olumlu") ? suf : "-" + suf;
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
        
        // Si la respuesta correcta no está entre las 4, la forzamos
        if (![...grid.children].some(b => b.innerText.replace("-", "") === correct)) {
            grid.children[Math.floor(Math.random() * 4)].innerText = (c.mode === "nominal" && c.type !== "olumlu") ? correct : "-" + correct;
        }
    },

    showHint(type) {
        const c = this.curr;
        if (type === 't') {
            const prons = { ben: "Yo", sen: "Tú", o: "Él/Ella", biz: "Nosotros/as", siz: "Vosotros/as" };
            if (c.mode === "verb") {
                document.getElementById("hint-display").innerText = `${prons[c.person]} estoy ${c.verb.m} ${c.noun.m}.`;
            } else {
                const action = c.type === "olumlu" ? "soy/estoy" : "no soy/estoy";
                document.getElementById("hint-display").innerText = `${prons[c.person]} ${action} ${c.noun.m}.`;
            }
        }
        if (type === 'r') {
            const ruleText = c.mode === "verb" ? `Verbo rige Caso ${c.case.toUpperCase()}` : `Gramática: ${c.type.replace("_", " ")}`;
            document.getElementById("rule-display").innerText = ruleText;
        }
    }
};

// Iniciar
game.init();
