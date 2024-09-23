"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
let signupuser = (name, _id, _islogin = false) => (console.log(name));
signupuser("samip", 123);
function addtwonumbers(num) {
    return num + 2;
}
addtwonumbers(3);
const hero = ["samip", "nepal"];
hero.map((_heros) => {
    return `hero is ${hero}`;
});
function fail(msg) {
    throw new Error(msg);
}
let userids = {
    readonly_id: "2334",
    name: "samip",
    email: "samipnepal555@gmail.com",
    isactv: true
};
let samip = { name: "samip", id: 3554 };
samip = { username: "hc", id: 345 };
detabaseid(3);
detabaseid("3");
function detabaseid(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
}
let array = [1, 2, 3, "3", true];
let seatallocation;
let newarr1 = ["samip", 123];
newarr1[0] = "samipdon";
let userinfo = {
    role: "start",
    iddata: 344, email: "samipnepal@", userid: 123,
    githubtoken: "1234",
    starttrails: () => {
        return "samip";
    },
    gets: (_hello = "samip") => {
        return 10;
    }
};
userinfo.email = "samipnepal222";
class users {
    constructor(email, names) {
        this.email = email;
        this.names = names;
        this._courseCount = 1;
        this.readonly_cast = "nepal";
    }
    deletetoken() {
        console.log(this.email);
    }
    getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum >= 0) {
            this._courseCount = courseNum;
        }
        else {
            console.error("Course count cannot be negative.");
        }
    }
}
const samips = new users("samip", "samipnepal333");
//# sourceMappingURL=index.js.map