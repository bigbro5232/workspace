// 07/30

const user = {
    id: "ABC",
    name: "조하영",
    age: 25,
    foo: function () {
        console.log(this.id);
    }
}
console.log(typeof user);

const json = JSON.stringify(user, (key, value) => {
    if (key === "age") {
        return undefined;
    }
    return value;
});
console.log(typeof json);
console.log(json);

const parseUser = JSON.parse(json);
console.log(parseUser.id, parseUser["name"]);

const array = {
    name: "A",
    name: "B",
    name: "C",
}

console.log(JSON.stringify(array, null, 2));