// class Korona {
//     constructor(salis, atvejai, mirtys) {
//         this.salis = salis;
//         this.atvejai = atvejai;
//         this.mirtys = mirtys;
//     }

//     statistika(ate) {
//         const procentai = this.atvejai / this.mirtys;
//         console.table([this.salis, this.atvejai, this.mirtys, procentai, ate])
//     }
// }

// const pirma = new Korona('lietuva', 1000, 6);
// const antra = new Korona('amerika', 140000, 10000);
// const trecia = new Korona('svedija', 90000, 2000);
// const ketvirta = new Korona('kinija', 100000, 5000);
// const penkta = new Korona('latvija', 800, 4);

// const ate = 'ate';

// pirma.statistika();
// antra.statistika(ate);
// trecia.statistika();
// ketvirta.statistika();
// penkta.statistika();



















// pamokos kodai



// function Puodukas(turis, spalva) {
//     this.turis = turis;
//     this.kiekis = 0;
//     this._spalva = spalva ? spalva : "baltas"
//     Object.defineProperty(this, "spalva", {
//         configurable: false,
//         enumerable: true,
//         get: function () {
//             return this._spalva;
//         },
//         set: function (spalva) {
//             if (spalva === "juodas") {
//                 return;
//             }
//             this._spalva = spalva;
//         }
//     });
// }

// Puodukas.prototype.ipilk = function (kiek) {
//     if (kiek < 0) {
//         return;
//     }
//     this.kiekis += kiek;
//     if (this.kiekis > this.turis) {
//         this.kiekis = this.turis;
//     }
// };

// Puodukas.prototype.isgerk = function (kiek) {
//     if (kiek < 0) {
//         return;
//     }
//     this.kiekis -= kiek;
//     if (this.kiekis < 0) {
//         this.kiekis = 0;
//     }
// };

// function Termosas() {
//     Puodukas.apply(this, arguments);
//     this.temp = 20;
// }

// // console.log(Termosas.prototype.constructor === Termosas);

// Termosas.prototype = Object.create(Puodukas.prototype);
// Termosas.prototype.constructor = Termosas;
// Termosas.prototype.ipilk = function (kiek) {
//     if (kiek < 0) {
//         return;
//     }
//     this.kiekis += kiek;
//     if (this.kiekis > this.turis) {
//         this.kiekis = this.turis;
//     }
//     if (this.temp > 20) {
//         this.temp -= 5;
//     }
// };

// class Termosas extends Puodukas {

//     constructor(turis, spalva) {
//         super(turis, spalva);
//         this.temp = 20;
//     }

//     ipilk(kiek) {
//         if (kiek < 0) {
//             return;
//         }
//         this.kiekis += kiek;
//         if (this.kiekis > this.turis) {
//             this.kiekis = this.turis;
//         }
//         if (this.temp > 20) {
//             this.temp -= 5;
//         }
//     }
// }

// const t = new Termosas(1000, "raudonas");
// t.temp = 50
// console.log(t);

// t.ipilk(100);
// console.log(t);

// const p = new Puodukas(350, "Zalias");
// console.log(p);
// p.ipilk(150);
// console.log(p.kiekis);
// console.log(p.spalva);
// p.kiekis = 30;
// console.log(p.kiekis);
// p.spalva = "juodas";
// console.log(p.spalva);
// p.spalva = "rudas";
// console.log(p.spalva);
// p._spalva = "juodas";
// console.log(p.spalva);


// p.ipilk(500);
// console.log(p);

// // delete p.turis;
// delete p["turis123"];

// // for (const key in p) {
// //     if (p.hasOwnProperty(key)) {
// //         delete p[key];
// //     }
// // }

// console.log(p.spalva);
// console.log(p);















// sukurti klase gyvunas, kuris turi tipa, moka judeti ir kalbeti
// sukurti suni, zuvi, kurie turi savo varda
// visi turi pajudeti ir pakalbeti
// function Gyvunas(tipas, spalva, kailis) {
//     this.tipas = tipas;
//     this.spalva = spalva;
//     this.kailis = kailis;
// }
// Gyvunas.prototype.judu = function () {
//     console.log("abstrktus gyvunas juda");
// };
// Gyvunas.prototype.kalbu = function () {
//     if (this.tipas === "fish") {
//         console.log("...");
//     } else {
//         console.log("Mano vardas: " + this.vardas);
//     }
// }
// function Suo(vardas) {
//     Gyvunas.apply(this, ["zinduolis", undefined, "Vidutinis"]);
//     // this.tipas = "Keturkojis";
//     this.vardas = vardas;
// }
// Suo.prototype = Object.create(Gyvunas.prototype);
// Suo.prototype.constructor = Suo;
// Suo.prototype.judu = function () {
//     console.log(this.vardas + " bega");
// }
// function Zuvis(vardas) {
//     Gyvunas.apply(this, ["fish"]);
//     this.vardas = vardas;
// }
// Zuvis.prototype = Object.create(Gyvunas.prototype);
// Zuvis.prototype.constructor = Zuvis;
// Zuvis.prototype.judu = function () {
//     console.log(this.vardas + " plaukia");
// }

//antras variantas su klase
class Gyvunas {
    constructor(tipas) {
        this.tipas = tipas;
    }
    judu() {
        console.log("abstrktus gyvunas juda");
    }
    kalbu() {
        if (this.tipas === "fish") {
            console.log("...");
        } else {
            console.log("Mano vardas: " + this.vardas);
        }
    }
}
class Suo extends Gyvunas {
    constructor(vardas) {
        super("zinduolis");
        this.vardas = vardas;
    }
    judu() {
        console.log(this.vardas + " bega");
    }
}
class Zuvis extends Gyvunas {
    constructor(vardas) {
        super("fish");
        this.vardas = vardas;
    }
    judu() {
        console.log(this.vardas + " plaukia");
    }
}
const suo = new Suo("Lordis");
console.log(suo);
suo.judu();
suo.kalbu();
const zuvis = new Zuvis("auksine");
console.log(zuvis);
zuvis.judu();
zuvis.kalbu();


















// class Metai {
//     constructor(data, salis, ivykis) {
//         this.data = data;
//         this.salis = salis;
//         this.ivykis = ivykis;
//     }

//     viskas(kazkas) {
//         console.log(this.data, this.salis, this.ivykis, kazkas)
//     }
//     lietuva() {
//         console.log('hi ' + this.ivykis)
//     }
// }

// const pirmas = new Metai(1410, 'LDK', 'Zalgirio musis');
// const antras = new Metai(2020, 'Kinija', 'Korona');
// const trecias = new Metai(1964, 'Belgija', 'pirma Eurovizija');

// const istorija = 'istorija'

// pirmas.viskas(istorija)
// antras.viskas(istorija)
// trecias.lietuva()













