// Generated by purs version 0.12.2
"use strict";
var TypeEquals = function (from, to) {
    this.from = from;
    this.to = to;
};
var to = function (dict) {
    return dict.to;
};
var refl = new TypeEquals(function (a) {
    return a;
}, function (a) {
    return a;
});
var from = function (dict) {
    return dict.from;
};
module.exports = {
    TypeEquals: TypeEquals,
    to: to,
    from: from,
    refl: refl
};
