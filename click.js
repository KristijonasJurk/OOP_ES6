// let heads = 3;
// let tails = 3;
// for (let i = 0; i < 100; i++) {
//     let random1 = Math.floor(Math.random() * 2);
//     let random2 = Math.floor(Math.random() * 2);

//     if (random1 == 2 || random1 == 1) {
//         heads++;
//     } if (random2 == 2) {
//         heads -= 2;
//     }
//     console.log(heads, tails);
// }
// const x = [4, 7, 3, 6, 9]
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