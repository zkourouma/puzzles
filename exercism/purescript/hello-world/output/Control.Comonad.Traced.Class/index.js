// Generated by purs version 0.12.2
"use strict";
var Control_Comonad = require("../Control.Comonad/index.js");
var Control_Comonad_Traced_Trans = require("../Control.Comonad.Traced.Trans/index.js");
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Prelude = require("../Prelude/index.js");
var ComonadTraced = function (Comonad0, track) {
    this.Comonad0 = Comonad0;
    this.track = track;
};
var track = function (dict) {
    return dict.track;
};
var tracks = function (dictComonadTraced) {
    return function (f) {
        return function (w) {
            return track(dictComonadTraced)(f(Control_Comonad.extract(dictComonadTraced.Comonad0())(w)))(w);
        };
    };
};
var listens = function (dictFunctor) {
    return function (f) {
        return function (v) {
            return Data_Functor.map(dictFunctor)(function (g) {
                return function (t) {
                    return new Data_Tuple.Tuple(g(t), f(t));
                };
            })(v);
        };
    };
};
var listen = function (dictFunctor) {
    return function (v) {
        return Data_Functor.map(dictFunctor)(function (f) {
            return function (t) {
                return new Data_Tuple.Tuple(f(t), t);
            };
        })(v);
    };
};
var comonadTracedTracedT = function (dictComonad) {
    return function (dictMonoid) {
        return new ComonadTraced(function () {
            return Control_Comonad_Traced_Trans.comonadTracedT(dictComonad)(dictMonoid);
        }, function (t) {
            return function (v) {
                return Control_Comonad.extract(dictComonad)(v)(t);
            };
        });
    };
};
var censor = function (dictFunctor) {
    return function (f) {
        return function (v) {
            return Data_Functor.map(dictFunctor)(function (v1) {
                return function ($18) {
                    return v1(f($18));
                };
            })(v);
        };
    };
};
module.exports = {
    track: track,
    ComonadTraced: ComonadTraced,
    tracks: tracks,
    listen: listen,
    listens: listens,
    censor: censor,
    comonadTracedTracedT: comonadTracedTracedT
};
