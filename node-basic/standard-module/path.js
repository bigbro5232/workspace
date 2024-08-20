// 07/31

const path = require("path");

const string = __filename
const myPath = "C:\\a\\b\\xxx.jpg";
const myPath1 = "C:\/\a\\///b\\xxx.jpg";

console.log(path.sep);
console.log(path.delimiter);
console.log(path.dirname(string));
console.log(path.dirname(myPath));
console.log(path.extname(string));
console.log(path.extname(myPath));
console.log(path.basename(string));
console.log(path.basename(myPath));

const pathObject1 = path.parse(string);
console.log(pathObject1);
const pathObject2 = path.format({
    root: 'c:\\',
    dir: 'c:\\full-stack\\workspace\\node-basic\\standard-module',
    base: 'path.js',
    ext: '.js',
    name: 'path'
});

console.log(pathObject2);
console.log(path.normalize(myPath1));
const fullpath = path.join("c:", "a", "/b", "c", "xxx.jpg");
console.log(fullpath);
const fullpath1 = path.resolve("c:", "a", "/b", "c", "xxx.jpg");
console.log(fullpath1);
const fullpath2 = path.resolve("x", "a", "b", "c", "xxx.jpg");
console.log(fullpath2);
