// Generated by purs version 0.12.2
"use strict";
var Data_Symbol = require("../Data.Symbol/index.js");
var Type_Data_Boolean = require("../Type.Data.Boolean/index.js");
var Type_Data_Ordering = require("../Type.Data.Ordering/index.js");
var Equals = {};
var uncons = function (dictCons) {
    return function (v) {
        return {
            head: Data_Symbol.SProxy.value,
            tail: Data_Symbol.SProxy.value
        };
    };
};
var equalsSymbol = function (dictCompare) {
    return function (dictEquals) {
        return Equals;
    };
};
var equals = function (dictEquals) {
    return function (v) {
        return function (v1) {
            return Type_Data_Boolean.BProxy.value;
        };
    };
};
var compare = function (dictCompare) {
    return function (v) {
        return function (v1) {
            return Type_Data_Ordering.OProxy.value;
        };
    };
};
var append = function (dictAppend) {
    return function (v) {
        return function (v1) {
            return Data_Symbol.SProxy.value;
        };
    };
};
module.exports = {
    append: append,
    compare: compare,
    uncons: uncons,
    Equals: Equals,
    equals: equals,
    equalsSymbol: equalsSymbol
};
