// function createCircle(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log('draw');
//         }
//     };

// }

// const circle = createCircle(1);



// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// }
// const another = new Circle(1);


// let one = [];
// for (let i = 0; i <= 4; i++) {
//     one.push(i);
// }
// console.log(one);

// let two = [];
// for (let i = 1; i <= 4; i++) {
//     two.push(i);
// }
// two.unshift(1)
// console.log(two);

// let three = [];
// for (let i = 2; i <= 8; i += 2) {
//     three.push(i);
// }
// three.unshift(2)
// console.log(three);

// let four = [];
// for (let i = 3; i <= 12; i += 3) {
//     four.push(i);
// }
// four.unshift(3)
// console.log(four);

// let five = [];
// for (let i = 4; i <= 16; i += 4) {
//     five.push(i);
// }
// five.unshift(4)
// console.log(five);

// const from = 2;
// const to = 6;
// for (var i = from; i <= to; i++) {
//     for (var j = from; j < to; j++) {
//         let result = i * j;
//         console.log(result);
//     }
// }

// var x = 2;
// var y = 6;
// let sum = '';
// for (let i = x; i <= y; i++) {

//     for (let j = x; j <= y; j++) {
//         sum += (i * j) + '\t';
//     }
//     sum += '\n'
// }
// console.log(sum);

// const x = [1, 2, 3, 4, 5]
// let y = '';
// let index = 0;
// let index2 = 0;

// for (let i = 1; i <= x.length; i++) {
//     index2++;
//     for (let j = 1; j <= x.length; j++) {
//         index++;
//         if (index2 > 1) {
//             let z = j + index2 - 1;
//             if (z > 5) {
//                 z -= 5;
//             }
//             y += z + '\t'
//         } else {
//             y += j + '\t';
//         }
//         if (index % 5 === 0) {
//             y += '\n'
//         }

//     }
// }
// console.log(y);


// const x = [1, 2, 3, 4, 5]
// let y = '';
// let index = 0;
// let index2 = 7;

// for (let i = 1; i <= x.length; i++) {
//     index2--;
//     for (let j = 1; j <= x.length; j++) {
//         index++;
//         if (index2 > 1) {
//             let z = j + index2 - 1;
//             if (z > 5) {
//                 z -= 5;
//             }
//             y += z + '\t'
//         } else {
//             y += j + '\t';
//         }
//         if (index % 5 === 0) {
//             y += '\n'
//         }
//     }
// }
// console.log(y);







// const x = [0, 0, 0, 0, 0, 0];
// const to = 1000;
// for (let i = 1; i <= to; i++) {
//     let random = Math.floor(Math.random() * 6)
//     x[random]++
// }
// console.log(x);


// let field = [
// [".", ".", ".", ".", "."],
// [".", "X", ".", "X", "."],
// [".", "X", "X", ".", "."],
// [".", ".", ".", ".", "."]
// ];
// const size = 10;
// let field = [];
// for (let i = 0; i < size; i++) {
//     const line = [];
//     for (let j = 0; j < size; j++) {
//         if (Math.random() < 0.25) {
//             line.push("X");
//         } else {
//             line.push(".");
//         }
//     }
//     field.push(line);
// }

// for (let i = 0; i < size; i++) {
//     const line = [];
//     let index = 0;
//     for (let j = 0; j < size; j++) {

//         if (field[i][j] === ".") {
//             if ((i > 0 && j > 0)) {
//                 if (field[(i - 1)][j] === ".") {
//                     index++;
//                 } if (field[(i + 1)][j] === ".") {
//                     index++;
//                 } if (field[i][(j + 1)] === ".") {
//                     index++;
//                 } if (field[i][(j - 1)] === ".") {
//                     index++;
//                 } if (field[(i - 1)][(j - 1)] === ".") {
//                     index++;
//                 } if (field[(i - 1)][(j + 1)] === ".") {
//                     index++;
//                 } if (field[(i + 1)][(j + 1)] === ".") {
//                     index++;
//                 } if (field[(i + 1)][(j - 1)] === ".") {
//                     index++;
//                 } if (index >= 3) {
//                     field[i][j] == 'X';
//                 } if (index !== 3 || index !== 4 || index !== 5 || index !== 6 || index !== 7) {
//                     field[i][j] == '.';
//                 }
//             }
//         } if (field[i][j] === "X") {
//             if ((i > 0 && j > 0)) {
//                 if (field[(i - 1)][j] === ".") {
//                     index++;
//                 } if (field[(i + 1)][j] === ".") {
//                     index++;
//                 } if (field[i][(j + 1)] === ".") {
//                     index++;
//                 } if (field[i][(j - 1)] === ".") {
//                     index++;
//                 } if (field[(i - 1)][(j - 1)] === ".") {
//                     index++;
//                 } if (field[(i - 1)][(j + 1)] === ".") {
//                     index++;
//                 } if (field[(i + 1)][(j + 1)] === ".") {
//                     index++;
//                 } if (field[(i + 1)][(j - 1)] === ".") {
//                     index++;
//                 } 

//                 if (index == 2 || index == 3) {
//                     field[i][j] == 'X';
//                 } if (index !== 2 || index !== 3) {
//                     field[i][j] == '.';
//                 }
//             }
//         }
//     }
//     field.push(line);
// }


// for (let i = 0; i < field.length; i++) {
//     let line = i + ": ";
//     for (let j = 0; j < field[i].length; j++) {
//         line += field[i][j];
//     }
//     console.log(line);
// }
// console.log("--------------");




// let masinos = [
//     {
//         nr: 1,
//         speed: 0,
//         km: 0,
//         max: 200,
//     },
//     {
//         nr: 2,
//         speed: 0,
//         km: 0,
//         max: 200,
//     },
//     {
//         nr: 3,
//         speed: 0,
//         km: 0,
//         max: 200,
//     },
//     {
//         nr: 4,
//         speed: 0,
//         km: 0,
//         max: 200,
//     },
//     {
//         nr: 5,
//         speed: 0,
//         km: 0,
//         max: 200,
//     },
//     {
//         nr: 6,
//         speed: 0,
//         km: 0,
//         max: 300,
//     },
//     {
//         nr: 7,
//         speed: 0,
//         km: 0,
//         max: 300,
//     },
//     {
//         nr: 8,
//         speed: 0,
//         km: 0,
//         max: 200,
//     },
// ];
// let finish = true;
// let race = [0, 0, 0, 0, 0, 0, 0, 0];
// let distance = [0, 0, 0, 0, 0, 0, 0, 0];

// while (finish) {
//     for (let i = 0; i < masinos.length; i++) {
//         let random = Math.floor(Math.random() * 10) + 1;
//         if (masinos[i].km >= 1000) {
//             finish = false;
//             console.log('winner is ' + (i + 1))
//         } else {
//             if (race[i] < 0) {
//                 race[i] == 0;
//             } if (random == 1) {
//                 race[i] -= Math.ceil(random / 2);
//             }
//         } if (random > 6) {
//             race[i] += Math.ceil(Math.random() * 9) + 1;
//         }
//         masinos[i].speed = race[i];
//         if (masinos[i].speed > masinos[i].max) {
//             masinos[i].speed === masinos[i].max
//         }
//         distance[i] += masinos[i].speed;
//         masinos[i].km = distance[i];

//     }
// }
// console.log(masinos)

// function faktorialas(sk) {
//     if (typeof sk !== "number") {
//         return undefined;
//     }
//     if (sk < 0) {
//         return 1;
//     }
//     if (sk === 0) {
//         return 1;
//     }
//     return sk * faktorialas(sk - 1);
// }
// console.log(faktorialas(5));

// let array = [12, 56, 47, 21, 98];
// let x = [];
// for (let i = 0; i < array.length; i++) {

//     for (let j = 0; j < array.length; j++) {
//         if (array[i] > array[j]) {
//             let z = array[i];
//             array[i] = array[j];
//             array[j] = z;
//             x.push(z)
//         }
//     }
// }
// console.log(x);


