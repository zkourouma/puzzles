// Generated by purs version 0.12.2
"use strict";
var Control_Apply = require("../Control.Apply/index.js");
var Control_Monad_Gen = require("../Control.Monad.Gen/index.js");
var Data_Date = require("../Data.Date/index.js");
var Data_Date_Component_Gen = require("../Data.Date.Component.Gen/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Prelude = require("../Prelude/index.js");
var genDate = function (dictMonadGen) {
    return Control_Apply.apply(((dictMonadGen.Monad0()).Bind1()).Apply0())(Control_Apply.apply(((dictMonadGen.Monad0()).Bind1()).Apply0())(Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_Date.canonicalDate)(Data_Date_Component_Gen.genYear(dictMonadGen)))(Data_Date_Component_Gen.genMonth(dictMonadGen)))(Data_Date_Component_Gen.genDay(dictMonadGen));
};
module.exports = {
    genDate: genDate
};
