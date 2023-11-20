'use app';
const fs = require('fs');

const text = fs.readFileSync('app.js','utf8');
console.log(text);