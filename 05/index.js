function foo(name) {
    return name.length;
}
var foo2 = function (name) {
    return name.length;
};
var foo3 = function (name) {
    return name.length;
};
var foo4 = function (name) {
    return name.length;
};
var foo5 = function (name) {
    return name.length;
};
var foo6 = function (name) {
    return name.length;
};
function foo7() { }
function foo8() {
    return;
}
function foo9(arg1) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
}
foo9('brad', 1, 2, 3, 4);
function foo10(arg1) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
}
foo10('brad', 100, true);
function func(foo, bar) {
    if (bar) {
        return foo.toString();
    }
    else {
        return foo * 599;
    }
}
console.log(func(1));
console.log(func(1, false));
console.log(func(1, true));
