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
fs.writeFileSync('index.html', pug.renderFile('layout/pages/index.pug', { title: 'ИП Лагутенкова' }));
fs.writeFileSync('about.html', pug.renderFile('layout/pages/about.pug', { title: 'Обо мне' }));
fs.writeFileSync('blog.html', pug.renderFile('layout/pages/blog.pug', { title: 'Блог' }));
fs.writeFileSync('news.html', pug.renderFile('layout/pages/news.pug', { title: 'Новости' }));
// fs.writeFileSync('index.html', pug.renderFile('layout/pages/index.pug'));
// fs.writeFileSync('about.html', pug.renderFile('layout/pages/about.pug'));