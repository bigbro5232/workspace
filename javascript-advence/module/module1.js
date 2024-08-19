// 07/24


let title = "모듈 사용하기";

// 변수를 생성과 동시에 내보내기(moudule.exports.변수명)
// 생성과 동시에 모듈을 내보냈기 때문에 변수가 안만들어짐
// 사용x
// module.exports.title = "모듈 사용하기"; 

const MAX_VOLUME = 100;

const sum = function (x, y) {
    return x + y;
}

const user = {
    id: "asd",
    name: "조하영",
    toString() {
        return `${this.name},${this.id}`;
    }
}

// 모듈 내보내기

// 모든 변수를 내보내기(module.exports)

module.exports = {
    title,
    MAX_VOLUME,
    sum,
    user
}

// 각각의 변수를 하나씩 내보내기

// exports.title = title;
// exports.MAX_VOLUME = MAX_VOLUME;
// exports.sum = sum;
// exports.user = user;
