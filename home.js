// class Mesa {
//     constructor(baltymai, spalva) {
//         this.baltymai = baltymai;
//         this.spalva = spalva;
//     }
//     maistingumas() {
//         if (this.baltymai > 30) {
//             console.log('daug baltymu');
//         } else {
//             console.log('mazokai baltymu');
//         }

//     }
// }

// class Jautiena extends Mesa {
//     constructor(pavadinimas) {
//         super(40, 'raudona');
//         this.pavadinimas = pavadinimas;
//     }
//     pakuote() {
//         console.log(this.pavadinimas + " turi " + this.baltymai + " baltymu ir yra " + this.spalva);
//     }
// }

// const jautiena = new Jautiena("jautis");

// jautiena.pakuote();
// jautiena.maistingumas();
// console.log(jautiena)






// const fs = require("fs");

// const executor = function (callback) {
//     console.log('programuoju');
//     if (Math.random() < 0.3) {
//         callback("uzstrigau");
//     } else {
//         callback(null, "mano programa");
//     }
// };

// const alius = function () {

//     function labas() {
//         fs.readFile("./1.txt");
//         ate()
//     }
//     function ate() {
//         fs.readFile("./2.txt");
//     }
//     function kaipgyveni() {
//         fs.readFile("./3.txt");
//         labas()
//     }
//     kaipgyveni()
// }

// // executor(alius);
// alius()
// // fs.readFile("./1.txt");
// // fs.readFile("./2.txt");
// // fs.readFile("./3.txt");

// console.log("pabaiga");

const fs = require("fs");
const readFile = fileName => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
};
const writeFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
};
let data = "";
let finalData = readFile("./1.txt")
    .then(data1 => {
        data += data1;
        return readFile("./2.txt");
    })
    .then(data1 => {
        data = data1 + data;
        return readFile("./3.txt");
    })
    // .then(data1 => {​​​​​
    // data += data1;
    // console.log(typeof data);
    // return data;
    // }​​​​​)
    // .then(d => {​​​​​
    // return "Labas " + d + " pasauli";
    // }​​​​​)
    .then(data1 => {
        data += data1;
        return writeFile("./knyga.txt", data);
    })
    .then(() => {
        console.log("Knyga parasyta");
    })
    // .then(
    // null,
    // err => {​​​​​
    // console.error(err);
    // }​​​​​
    // )
    .catch(err => {
        console.error(err);
    });
finalData.then(d => {
    console.log("final");
    console.log(d);
})