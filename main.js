const fs = require('fs');
const pug = require('pug');

// let pugCode = 'p Мой абзац';

// let compileFunc = pug.compileFile('layout.pug');

// for (let i = 0; i < 3; i++) {

//     let data = {
//         // pContent: 'Helloooo',
//         // sum(a, b) {
//             //     return a+b;
//             // }
//             // obj: {b: 'hehe'}
//             i: i
//         };
//         // let html = pug.renderFile('layout.pug', data);
//         let html = compileFunc(data);
//         console.log(html);
//     }

// let html = pug.renderFile('layout.pug');
// fs.writeFileSync('index.html', pug.renderFile('layout/pages/layout.pug', { basedir: 'layout' }));
fs.writeFileSync('index.html', pug.renderFile('layout/pages/layout.pug'));