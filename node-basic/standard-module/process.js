// 07/31

// 노드 정보 제공 객체
// console.log(process);
console.log(process.version);
console.log(process.arch);
console.log(process.platform);
console.log(process.uptime());

if (true) {
    process.exit(0);
}

console.log(process.execPath);
console.log(process.cwd());
console.log(__dirname);
console.log(process.cpuUsage);
// os 환경변수 정보
console.log(process.env);
