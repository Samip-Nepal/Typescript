"use strict";
let age = 25;
let first_name = "samip";
let ishero = true;
function hi_there(document) {
    console.log(document);
}
let number = [1, 2, 3, 4];
number.forEach((num) => (console.log(num)));
let user = [1, "a"];
let arr = [1, 2];
var size;
(function (size) {
    size[size["small"] = 1] = "small";
    size[size["medium"] = 2] = "medium";
    size[size["large"] = 3] = "large";
})(size || (size = {}));
let sizecal = size.medium;
console.log(sizecal);
function addtwonumber(num) {
    return num + 2;
}
addtwonumber(3);
let touppercase = (val) => {
    return val.toUpperCase;
};
touppercase("samip");
let signupuser = (name, id, islogin = false) => (console.log(name));
signupuser("samip", 123);
function addtwonumbers(num) {
    return num + 2;
}
addtwonumbers(3);
const hero = ["samip", "nepal"];
hero.map((heros) => {
    return `hero is ${hero}`;
});
function fail(msg) {
    throw new Error(msg);
}
//# sourceMappingURL=index.js.map