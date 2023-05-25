"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Justice",
    email: "hsjn@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Justicce", isPaid: false });
//function name, parameter, type and definition
function createCourse() {
    return { name: "react js", price: 485 };
}
function createUser1(user) {
    return { name: "fani", email: "jbajd@gmail", isActive: true };
}
createUser1({ name: "fani", email: "jbajd@gmail", isActive: true });
// creditcarddetails is optional, reason for the ?
var myUser1 = {
    _id: "1234556",
    name: "h",
    email: "h@h.com",
    isActive: false
};
//you can modify each user
myUser1.email = "Jsu@togo";
myUser1._id = "45923";
