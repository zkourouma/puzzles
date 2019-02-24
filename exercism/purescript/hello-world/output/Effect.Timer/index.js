// Generated by purs version 0.12.2
"use strict";
var $foreign = require("./foreign.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Effect = require("../Effect/index.js");
var Prelude = require("../Prelude/index.js");
var TimeoutId = function (x) {
    return x;
};
var IntervalId = function (x) {
    return x;
};
var eqTimeoutId = new Data_Eq.Eq(function (x) {
    return function (y) {
        return x === y;
    };
});
var ordTimeoutId = new Data_Ord.Ord(function () {
    return eqTimeoutId;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(Data_Ord.ordInt)(x)(y);
    };
});
var eqIntervalId = new Data_Eq.Eq(function (x) {
    return function (y) {
        return x === y;
    };
});
var ordIntervalId = new Data_Ord.Ord(function () {
    return eqIntervalId;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(Data_Ord.ordInt)(x)(y);
    };
});
module.exports = {
    eqTimeoutId: eqTimeoutId,
    ordTimeoutId: ordTimeoutId,
    eqIntervalId: eqIntervalId,
    ordIntervalId: ordIntervalId,
    setTimeout: $foreign.setTimeout,
    clearTimeout: $foreign.clearTimeout,
    setInterval: $foreign.setInterval,
    clearInterval: $foreign.clearInterval
};
