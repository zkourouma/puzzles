// Generated by purs version 0.12.2
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Effect = require("../Effect/index.js");
var Effect_AVar = require("../Effect.AVar/index.js");
var Effect_Aff = require("../Effect.Aff/index.js");
var Effect_Class = require("../Effect.Class/index.js");
var Effect_Exception = require("../Effect.Exception/index.js");
var Prelude = require("../Prelude/index.js");
var tryTake = function ($6) {
    return Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_AVar.tryTake($6));
};
var tryRead = function ($7) {
    return Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_AVar.tryRead($7));
};
var tryPut = function (value) {
    return function ($8) {
        return Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_AVar.tryPut(value)($8));
    };
};
var take = function (avar) {
    return Effect_Aff.makeAff(function (k) {
        return function __do() {
            var v = Effect_AVar.take(avar)(k)();
            return Effect_Aff.effectCanceler(v);
        };
    });
};
var status = function ($9) {
    return Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_AVar.status($9));
};
var read = function (avar) {
    return Effect_Aff.makeAff(function (k) {
        return function __do() {
            var v = Effect_AVar.read(avar)(k)();
            return Effect_Aff.effectCanceler(v);
        };
    });
};
var put = function (value) {
    return function (avar) {
        return Effect_Aff.makeAff(function (k) {
            return function __do() {
                var v = Effect_AVar.put(value)(avar)(k)();
                return Effect_Aff.effectCanceler(v);
            };
        });
    };
};
var $$new = function ($10) {
    return Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_AVar["new"]($10));
};
var kill = function (error) {
    return function ($11) {
        return Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_AVar.kill(error)($11));
    };
};
var empty = Effect_Class.liftEffect(Effect_Aff.monadEffectAff)(Effect_AVar.empty);
module.exports = {
    "new": $$new,
    empty: empty,
    status: status,
    take: take,
    tryTake: tryTake,
    put: put,
    tryPut: tryPut,
    read: read,
    tryRead: tryRead,
    kill: kill
};
