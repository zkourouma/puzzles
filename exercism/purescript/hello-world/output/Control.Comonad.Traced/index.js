// Generated by purs version 0.12.2
"use strict";
var Control_Comonad_Traced_Class = require("../Control.Comonad.Traced.Class/index.js");
var Control_Comonad_Traced_Trans = require("../Control.Comonad.Traced.Trans/index.js");
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Data_Identity = require("../Data.Identity/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Prelude = require("../Prelude/index.js");
var traced = function ($2) {
    return Control_Comonad_Traced_Trans.TracedT(Data_Identity.Identity($2));
};
var runTraced = function (v) {
    return Data_Newtype.unwrap(Data_Identity.newtypeIdentity)(v);
};
module.exports = {
    runTraced: runTraced,
    traced: traced
};
