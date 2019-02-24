// Generated by purs version 0.12.2
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Alternative = require("../Control.Alternative/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Category = require("../Control.Category/index.js");
var Control_Comonad = require("../Control.Comonad/index.js");
var Control_Extend = require("../Control.Extend/index.js");
var Control_Lazy = require("../Control.Lazy/index.js");
var Control_Monad = require("../Control.Monad/index.js");
var Control_MonadPlus = require("../Control.MonadPlus/index.js");
var Control_MonadZero = require("../Control.MonadZero/index.js");
var Control_Plus = require("../Control.Plus/index.js");
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Data_Eq = require("../Data.Eq/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_FoldableWithIndex = require("../Data.FoldableWithIndex/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_FunctorWithIndex = require("../Data.FunctorWithIndex/index.js");
var Data_Lazy = require("../Data.Lazy/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var Data_Monoid = require("../Data.Monoid/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_NonEmpty = require("../Data.NonEmpty/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Ordering = require("../Data.Ordering/index.js");
var Data_Ring = require("../Data.Ring/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_TraversableWithIndex = require("../Data.TraversableWithIndex/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unfoldable = require("../Data.Unfoldable/index.js");
var Data_Unfoldable1 = require("../Data.Unfoldable1/index.js");
var Prelude = require("../Prelude/index.js");
var List = function (x) {
    return x;
};
var Nil = (function () {
    function Nil() {

    };
    Nil.value = new Nil();
    return Nil;
})();
var Cons = (function () {
    function Cons(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Cons.create = function (value0) {
        return function (value1) {
            return new Cons(value0, value1);
        };
    };
    return Cons;
})();
var NonEmptyList = function (x) {
    return x;
};
var nil = List(Data_Lazy.defer(function (v) {
    return Nil.value;
}));
var newtypeNonEmptyList = new Data_Newtype.Newtype(function (n) {
    return n;
}, NonEmptyList);
var newtypeList = new Data_Newtype.Newtype(function (n) {
    return n;
}, List);
var step = function ($215) {
    return Data_Lazy.force(Data_Newtype.unwrap(newtypeList)($215));
};
var semigroupList = new Data_Semigroup.Semigroup(function (xs) {
    return function (ys) {
        var go = function (v) {
            if (v instanceof Nil) {
                return step(ys);
            };
            if (v instanceof Cons) {
                return new Cons(v.value0, Data_Semigroup.append(semigroupList)(v.value1)(ys));
            };
            throw new Error("Failed pattern match at Data.List.Lazy.Types (line 98, column 5 - line 98, column 21): " + [ v.constructor.name ]);
        };
        return Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(newtypeList)(xs));
    };
});
var showList = function (dictShow) {
    return new Data_Show.Show(function (xs) {
        var go = function (v) {
            if (v instanceof Nil) {
                return "Nil";
            };
            if (v instanceof Cons) {
                return "(Cons " + (Data_Show.show(dictShow)(v.value0) + (" " + (go(step(v.value1)) + ")")));
            };
            throw new Error("Failed pattern match at Data.List.Lazy.Types (line 64, column 5 - line 65, column 5): " + [ v.constructor.name ]);
        };
        return "fromStrict (" + (go(step(xs)) + ")");
    });
};
var showNonEmptyList = function (dictShow) {
    return new Data_Show.Show(function (v) {
        return "(NonEmptyList " + (Data_Show.show(Data_Lazy.showLazy(Data_NonEmpty.showNonEmpty(dictShow)(showList(dictShow))))(v) + ")");
    });
};
var monoidList = new Data_Monoid.Monoid(function () {
    return semigroupList;
}, nil);
var lazyList = new Control_Lazy.Lazy(function (f) {
    return List(Data_Lazy.defer(function ($216) {
        return step(f($216));
    }));
});
var functorList = new Data_Functor.Functor(function (f) {
    return function (xs) {
        var go = function (v) {
            if (v instanceof Nil) {
                return Nil.value;
            };
            if (v instanceof Cons) {
                return new Cons(f(v.value0), Data_Functor.map(functorList)(f)(v.value1));
            };
            throw new Error("Failed pattern match at Data.List.Lazy.Types (line 107, column 5 - line 107, column 17): " + [ v.constructor.name ]);
        };
        return Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(newtypeList)(xs));
    };
});
var functorNonEmptyList = new Data_Functor.Functor(function (f) {
    return function (v) {
        return Data_Functor.map(Data_Lazy.functorLazy)(Data_Functor.map(Data_NonEmpty.functorNonEmpty(functorList))(f))(v);
    };
});
var eq1List = new Data_Eq.Eq1(function (dictEq) {
    return function (xs) {
        return function (ys) {
            var go = function ($copy_v) {
                return function ($copy_v1) {
                    var $tco_var_v = $copy_v;
                    var $tco_done = false;
                    var $tco_result;
                    function $tco_loop(v, v1) {
                        if (v instanceof Nil && v1 instanceof Nil) {
                            $tco_done = true;
                            return true;
                        };
                        if (v instanceof Cons && (v1 instanceof Cons && Data_Eq.eq(dictEq)(v.value0)(v1.value0))) {
                            $tco_var_v = step(v.value1);
                            $copy_v1 = step(v1.value1);
                            return;
                        };
                        $tco_done = true;
                        return false;
                    };
                    while (!$tco_done) {
                        $tco_result = $tco_loop($tco_var_v, $copy_v1);
                    };
                    return $tco_result;
                };
            };
            return go(step(xs))(step(ys));
        };
    };
});
var eqList = function (dictEq) {
    return new Data_Eq.Eq(Data_Eq.eq1(eq1List)(dictEq));
};
var eqNonEmptyList = function (dictEq) {
    return Data_Lazy.eqLazy(Data_NonEmpty.eqNonEmpty(eq1List)(dictEq));
};
var ord1List = new Data_Ord.Ord1(function () {
    return eq1List;
}, function (dictOrd) {
    return function (xs) {
        return function (ys) {
            var go = function ($copy_v) {
                return function ($copy_v1) {
                    var $tco_var_v = $copy_v;
                    var $tco_done = false;
                    var $tco_result;
                    function $tco_loop(v, v1) {
                        if (v instanceof Nil && v1 instanceof Nil) {
                            $tco_done = true;
                            return Data_Ordering.EQ.value;
                        };
                        if (v instanceof Nil) {
                            $tco_done = true;
                            return Data_Ordering.LT.value;
                        };
                        if (v1 instanceof Nil) {
                            $tco_done = true;
                            return Data_Ordering.GT.value;
                        };
                        if (v instanceof Cons && v1 instanceof Cons) {
                            var v2 = Data_Ord.compare(dictOrd)(v.value0)(v1.value0);
                            if (v2 instanceof Data_Ordering.EQ) {
                                $tco_var_v = step(v.value1);
                                $copy_v1 = step(v1.value1);
                                return;
                            };
                            $tco_done = true;
                            return v2;
                        };
                        throw new Error("Failed pattern match at Data.List.Lazy.Types (line 84, column 5 - line 84, column 20): " + [ v.constructor.name, v1.constructor.name ]);
                    };
                    while (!$tco_done) {
                        $tco_result = $tco_loop($tco_var_v, $copy_v1);
                    };
                    return $tco_result;
                };
            };
            return go(step(xs))(step(ys));
        };
    };
});
var ordList = function (dictOrd) {
    return new Data_Ord.Ord(function () {
        return eqList(dictOrd.Eq0());
    }, Data_Ord.compare1(ord1List)(dictOrd));
};
var ordNonEmptyList = function (dictOrd) {
    return Data_Lazy.ordLazy(Data_NonEmpty.ordNonEmpty(ord1List)(dictOrd));
};
var cons = function (x) {
    return function (xs) {
        return List(Data_Lazy.defer(function (v) {
            return new Cons(x, xs);
        }));
    };
};
var foldableList = new Data_Foldable.Foldable(function (dictMonoid) {
    return function (f) {
        return Data_Foldable.foldl(foldableList)(function (b) {
            return function (a) {
                return Data_Semigroup.append(dictMonoid.Semigroup0())(b)(f(a));
            };
        })(Data_Monoid.mempty(dictMonoid));
    };
}, function (op) {
    var go = function ($copy_b) {
        return function ($copy_xs) {
            var $tco_var_b = $copy_b;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(b, xs) {
                var v = step(xs);
                if (v instanceof Nil) {
                    $tco_done = true;
                    return b;
                };
                if (v instanceof Cons) {
                    $tco_var_b = op(b)(v.value0);
                    $copy_xs = v.value1;
                    return;
                };
                throw new Error("Failed pattern match at Data.List.Lazy.Types (line 122, column 7 - line 124, column 40): " + [ v.constructor.name ]);
            };
            while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_b, $copy_xs);
            };
            return $tco_result;
        };
    };
    return go;
}, function (op) {
    return function (z) {
        return function (xs) {
            var rev = Data_Foldable.foldl(foldableList)(Data_Function.flip(cons))(nil);
            return Data_Foldable.foldl(foldableList)(Data_Function.flip(op))(z)(rev(xs));
        };
    };
});
var extendList = new Control_Extend.Extend(function () {
    return functorList;
}, function (f) {
    return function (l) {
        var go = function (a) {
            return function (v) {
                var acc$prime = cons(a)(v.acc);
                return {
                    val: cons(f(acc$prime))(v.val),
                    acc: acc$prime
                };
            };
        };
        var v = step(l);
        if (v instanceof Nil) {
            return nil;
        };
        if (v instanceof Cons) {
            return cons(f(l))((Data_Foldable.foldr(foldableList)(go)({
                val: nil,
                acc: nil
            })(v.value1)).val);
        };
        throw new Error("Failed pattern match at Data.List.Lazy.Types (line 194, column 5 - line 197, column 55): " + [ v.constructor.name ]);
    };
});
var extendNonEmptyList = new Control_Extend.Extend(function () {
    return functorNonEmptyList;
}, function (f) {
    return function (v) {
        var go = function (a) {
            return function (v1) {
                return {
                    val: cons(f(Data_Lazy.defer(function (v2) {
                        return new Data_NonEmpty.NonEmpty(a, v1.acc);
                    })))(v1.val),
                    acc: cons(a)(v1.acc)
                };
            };
        };
        var v1 = Data_Lazy.force(v);
        return NonEmptyList(Data_Lazy.defer(function (v2) {
            return new Data_NonEmpty.NonEmpty(f(v), (Data_Foldable.foldr(foldableList)(go)({
                val: nil,
                acc: nil
            })(v1.value1)).val);
        }));
    };
});
var foldableNonEmptyList = new Data_Foldable.Foldable(function (dictMonoid) {
    return function (f) {
        return function (v) {
            return Data_Foldable.foldMap(Data_NonEmpty.foldableNonEmpty(foldableList))(dictMonoid)(f)(Data_Lazy.force(v));
        };
    };
}, function (f) {
    return function (b) {
        return function (v) {
            return Data_Foldable.foldl(Data_NonEmpty.foldableNonEmpty(foldableList))(f)(b)(Data_Lazy.force(v));
        };
    };
}, function (f) {
    return function (b) {
        return function (v) {
            return Data_Foldable.foldr(Data_NonEmpty.foldableNonEmpty(foldableList))(f)(b)(Data_Lazy.force(v));
        };
    };
});
var foldableWithIndexList = new Data_FoldableWithIndex.FoldableWithIndex(function () {
    return foldableList;
}, function (dictMonoid) {
    return function (f) {
        return Data_FoldableWithIndex.foldlWithIndex(foldableWithIndexList)(function (i) {
            return function (acc) {
                return function ($217) {
                    return Data_Semigroup.append(dictMonoid.Semigroup0())(acc)(f(i)($217));
                };
            };
        })(Data_Monoid.mempty(dictMonoid));
    };
}, function (f) {
    return function (acc) {
        return function ($218) {
            return Data_Tuple.snd(Data_Foldable.foldl(foldableList)(function (v) {
                return function (a) {
                    return new Data_Tuple.Tuple(v.value0 + 1 | 0, f(v.value0)(v.value1)(a));
                };
            })(new Data_Tuple.Tuple(0, acc))($218));
        };
    };
}, function (f) {
    return function (b) {
        return function (xs) {
            var v = (function () {
                var rev = Data_Foldable.foldl(foldableList)(function (v1) {
                    return function (a) {
                        return new Data_Tuple.Tuple(v1.value0 + 1 | 0, cons(a)(v1.value1));
                    };
                });
                return rev(new Data_Tuple.Tuple(0, nil))(xs);
            })();
            return Data_Tuple.snd(Data_Foldable.foldl(foldableList)(function (v1) {
                return function (a) {
                    return new Data_Tuple.Tuple(v1.value0 - 1 | 0, f(v1.value0 - 1 | 0)(a)(v1.value1));
                };
            })(new Data_Tuple.Tuple(v.value0, b))(v.value1));
        };
    };
});
var foldableWithIndexNonEmptyList = new Data_FoldableWithIndex.FoldableWithIndex(function () {
    return foldableNonEmptyList;
}, function (dictMonoid) {
    return function (f) {
        return function (v) {
            return Data_FoldableWithIndex.foldMapWithIndex(Data_NonEmpty.foldableWithIndexNonEmpty(foldableWithIndexList))(dictMonoid)(function ($219) {
                return f(Data_Maybe.maybe(0)(Data_Semiring.add(Data_Semiring.semiringInt)(1))($219));
            })(Data_Lazy.force(v));
        };
    };
}, function (f) {
    return function (b) {
        return function (v) {
            return Data_FoldableWithIndex.foldlWithIndex(Data_NonEmpty.foldableWithIndexNonEmpty(foldableWithIndexList))(function ($220) {
                return f(Data_Maybe.maybe(0)(Data_Semiring.add(Data_Semiring.semiringInt)(1))($220));
            })(b)(Data_Lazy.force(v));
        };
    };
}, function (f) {
    return function (b) {
        return function (v) {
            return Data_FoldableWithIndex.foldrWithIndex(Data_NonEmpty.foldableWithIndexNonEmpty(foldableWithIndexList))(function ($221) {
                return f(Data_Maybe.maybe(0)(Data_Semiring.add(Data_Semiring.semiringInt)(1))($221));
            })(b)(Data_Lazy.force(v));
        };
    };
});
var functorWithIndexList = new Data_FunctorWithIndex.FunctorWithIndex(function () {
    return functorList;
}, function (f) {
    return Data_FoldableWithIndex.foldrWithIndex(foldableWithIndexList)(function (i) {
        return function (x) {
            return function (acc) {
                return cons(f(i)(x))(acc);
            };
        };
    })(nil);
});
var functorWithIndexNonEmptyList = new Data_FunctorWithIndex.FunctorWithIndex(function () {
    return functorNonEmptyList;
}, function (f) {
    return function (v) {
        return NonEmptyList(Data_Lazy.defer(function (v1) {
            return Data_FunctorWithIndex.mapWithIndex(Data_NonEmpty.functorWithIndex(functorWithIndexList))(function ($222) {
                return f(Data_Maybe.maybe(0)(Data_Semiring.add(Data_Semiring.semiringInt)(1))($222));
            })(Data_Lazy.force(v));
        }));
    };
});
var toList = function (v) {
    return Control_Lazy.defer(lazyList)(function (v1) {
        var v2 = Data_Lazy.force(v);
        return cons(v2.value0)(v2.value1);
    });
};
var semigroupNonEmptyList = new Data_Semigroup.Semigroup(function (v) {
    return function (as$prime) {
        var v1 = Data_Lazy.force(v);
        return Data_Lazy.defer(function (v2) {
            return new Data_NonEmpty.NonEmpty(v1.value0, Data_Semigroup.append(semigroupList)(v1.value1)(toList(as$prime)));
        });
    };
});
var traversableList = new Data_Traversable.Traversable(function () {
    return foldableList;
}, function () {
    return functorList;
}, function (dictApplicative) {
    return Data_Traversable.traverse(traversableList)(dictApplicative)(Control_Category.identity(Control_Category.categoryFn));
}, function (dictApplicative) {
    return function (f) {
        return Data_Foldable.foldr(foldableList)(function (a) {
            return function (b) {
                return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(cons)(f(a)))(b);
            };
        })(Control_Applicative.pure(dictApplicative)(nil));
    };
});
var traversableNonEmptyList = new Data_Traversable.Traversable(function () {
    return foldableNonEmptyList;
}, function () {
    return functorNonEmptyList;
}, function (dictApplicative) {
    return function (v) {
        return Data_Functor.map((dictApplicative.Apply0()).Functor0())(function (xxs) {
            return NonEmptyList(Data_Lazy.defer(function (v1) {
                return xxs;
            }));
        })(Data_Traversable.sequence(Data_NonEmpty.traversableNonEmpty(traversableList))(dictApplicative)(Data_Lazy.force(v)));
    };
}, function (dictApplicative) {
    return function (f) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(function (xxs) {
                return NonEmptyList(Data_Lazy.defer(function (v1) {
                    return xxs;
                }));
            })(Data_Traversable.traverse(Data_NonEmpty.traversableNonEmpty(traversableList))(dictApplicative)(f)(Data_Lazy.force(v)));
        };
    };
});
var traversableWithIndexList = new Data_TraversableWithIndex.TraversableWithIndex(function () {
    return foldableWithIndexList;
}, function () {
    return functorWithIndexList;
}, function () {
    return traversableList;
}, function (dictApplicative) {
    return function (f) {
        return Data_FoldableWithIndex.foldrWithIndex(foldableWithIndexList)(function (i) {
            return function (a) {
                return function (b) {
                    return Control_Apply.apply(dictApplicative.Apply0())(Data_Functor.map((dictApplicative.Apply0()).Functor0())(cons)(f(i)(a)))(b);
                };
            };
        })(Control_Applicative.pure(dictApplicative)(nil));
    };
});
var traversableWithIndexNonEmptyList = new Data_TraversableWithIndex.TraversableWithIndex(function () {
    return foldableWithIndexNonEmptyList;
}, function () {
    return functorWithIndexNonEmptyList;
}, function () {
    return traversableNonEmptyList;
}, function (dictApplicative) {
    return function (f) {
        return function (v) {
            return Data_Functor.map((dictApplicative.Apply0()).Functor0())(function (xxs) {
                return NonEmptyList(Data_Lazy.defer(function (v1) {
                    return xxs;
                }));
            })(Data_TraversableWithIndex.traverseWithIndex(Data_NonEmpty.traversableWithIndexNonEmpty(traversableWithIndexList))(dictApplicative)(function ($223) {
                return f(Data_Maybe.maybe(0)(Data_Semiring.add(Data_Semiring.semiringInt)(1))($223));
            })(Data_Lazy.force(v)));
        };
    };
});
var unfoldable1List = new Data_Unfoldable1.Unfoldable1((function () {
    var go = function (f) {
        return function (b) {
            return Control_Lazy.defer(lazyList)(function (v) {
                var v1 = f(b);
                if (v1.value1 instanceof Data_Maybe.Just) {
                    return cons(v1.value0)(go(f)(v1.value1.value0));
                };
                if (v1.value1 instanceof Data_Maybe.Nothing) {
                    return cons(v1.value0)(nil);
                };
                throw new Error("Failed pattern match at Data.List.Lazy.Types (line 146, column 28 - line 148, column 33): " + [ v1.constructor.name ]);
            });
        };
    };
    return go;
})());
var unfoldableList = new Data_Unfoldable.Unfoldable(function () {
    return unfoldable1List;
}, (function () {
    var go = function (f) {
        return function (b) {
            return Control_Lazy.defer(lazyList)(function (v) {
                var v1 = f(b);
                if (v1 instanceof Data_Maybe.Nothing) {
                    return nil;
                };
                if (v1 instanceof Data_Maybe.Just) {
                    return cons(v1.value0.value0)(go(f)(v1.value0.value1));
                };
                throw new Error("Failed pattern match at Data.List.Lazy.Types (line 152, column 28 - line 154, column 39): " + [ v1.constructor.name ]);
            });
        };
    };
    return go;
})());
var unfoldable1NonEmptyList = new Data_Unfoldable1.Unfoldable1(function (f) {
    return function (b) {
        return NonEmptyList(Data_Lazy.defer(function (v) {
            return Data_Unfoldable1.unfoldr1(Data_NonEmpty.unfoldable1NonEmpty(unfoldableList))(f)(b);
        }));
    };
});
var comonadNonEmptyList = new Control_Comonad.Comonad(function () {
    return extendNonEmptyList;
}, function (v) {
    return Data_NonEmpty.head(Data_Lazy.force(v));
});
var monadList = new Control_Monad.Monad(function () {
    return applicativeList;
}, function () {
    return bindList;
});
var bindList = new Control_Bind.Bind(function () {
    return applyList;
}, function (xs) {
    return function (f) {
        var go = function (v) {
            if (v instanceof Nil) {
                return Nil.value;
            };
            if (v instanceof Cons) {
                return step(Data_Semigroup.append(semigroupList)(f(v.value0))(Control_Bind.bind(bindList)(v.value1)(f)));
            };
            throw new Error("Failed pattern match at Data.List.Lazy.Types (line 175, column 5 - line 175, column 17): " + [ v.constructor.name ]);
        };
        return Data_Functor.map(Data_Lazy.functorLazy)(go)(Data_Newtype.unwrap(newtypeList)(xs));
    };
});
var applyList = new Control_Apply.Apply(function () {
    return functorList;
}, Control_Monad.ap(monadList));
var applicativeList = new Control_Applicative.Applicative(function () {
    return applyList;
}, function (a) {
    return cons(a)(nil);
});
var applyNonEmptyList = new Control_Apply.Apply(function () {
    return functorNonEmptyList;
}, function (v) {
    return function (v1) {
        var v2 = Data_Lazy.force(v1);
        var v3 = Data_Lazy.force(v);
        return Data_Lazy.defer(function (v4) {
            return new Data_NonEmpty.NonEmpty(v3.value0(v2.value0), Data_Semigroup.append(semigroupList)(Control_Apply.apply(applyList)(v3.value1)(cons(v2.value0)(nil)))(Control_Apply.apply(applyList)(cons(v3.value0)(v3.value1))(v2.value1)));
        });
    };
});
var bindNonEmptyList = new Control_Bind.Bind(function () {
    return applyNonEmptyList;
}, function (v) {
    return function (f) {
        var v1 = Data_Lazy.force(v);
        var v2 = Data_Lazy.force(Data_Newtype.unwrap(newtypeNonEmptyList)(f(v1.value0)));
        return Data_Lazy.defer(function (v3) {
            return new Data_NonEmpty.NonEmpty(v2.value0, Data_Semigroup.append(semigroupList)(v2.value1)(Control_Bind.bind(bindList)(v1.value1)(function ($224) {
                return toList(f($224));
            })));
        });
    };
});
var altNonEmptyList = new Control_Alt.Alt(function () {
    return functorNonEmptyList;
}, Data_Semigroup.append(semigroupNonEmptyList));
var altList = new Control_Alt.Alt(function () {
    return functorList;
}, Data_Semigroup.append(semigroupList));
var plusList = new Control_Plus.Plus(function () {
    return altList;
}, nil);
var alternativeList = new Control_Alternative.Alternative(function () {
    return applicativeList;
}, function () {
    return plusList;
});
var monadZeroList = new Control_MonadZero.MonadZero(function () {
    return alternativeList;
}, function () {
    return monadList;
});
var monadPlusList = new Control_MonadPlus.MonadPlus(function () {
    return monadZeroList;
});
var applicativeNonEmptyList = new Control_Applicative.Applicative(function () {
    return applyNonEmptyList;
}, function (a) {
    return Data_Lazy.defer(function (v) {
        return Data_NonEmpty.singleton(plusList)(a);
    });
});
var monadNonEmptyList = new Control_Monad.Monad(function () {
    return applicativeNonEmptyList;
}, function () {
    return bindNonEmptyList;
});
module.exports = {
    List: List,
    Nil: Nil,
    Cons: Cons,
    step: step,
    nil: nil,
    cons: cons,
    NonEmptyList: NonEmptyList,
    toList: toList,
    newtypeList: newtypeList,
    showList: showList,
    eqList: eqList,
    eq1List: eq1List,
    ordList: ordList,
    ord1List: ord1List,
    lazyList: lazyList,
    semigroupList: semigroupList,
    monoidList: monoidList,
    functorList: functorList,
    functorWithIndexList: functorWithIndexList,
    foldableList: foldableList,
    foldableWithIndexList: foldableWithIndexList,
    unfoldable1List: unfoldable1List,
    unfoldableList: unfoldableList,
    traversableList: traversableList,
    traversableWithIndexList: traversableWithIndexList,
    applyList: applyList,
    applicativeList: applicativeList,
    bindList: bindList,
    monadList: monadList,
    altList: altList,
    plusList: plusList,
    alternativeList: alternativeList,
    monadZeroList: monadZeroList,
    monadPlusList: monadPlusList,
    extendList: extendList,
    newtypeNonEmptyList: newtypeNonEmptyList,
    eqNonEmptyList: eqNonEmptyList,
    ordNonEmptyList: ordNonEmptyList,
    showNonEmptyList: showNonEmptyList,
    functorNonEmptyList: functorNonEmptyList,
    applyNonEmptyList: applyNonEmptyList,
    applicativeNonEmptyList: applicativeNonEmptyList,
    bindNonEmptyList: bindNonEmptyList,
    monadNonEmptyList: monadNonEmptyList,
    altNonEmptyList: altNonEmptyList,
    extendNonEmptyList: extendNonEmptyList,
    comonadNonEmptyList: comonadNonEmptyList,
    semigroupNonEmptyList: semigroupNonEmptyList,
    foldableNonEmptyList: foldableNonEmptyList,
    traversableNonEmptyList: traversableNonEmptyList,
    unfoldable1NonEmptyList: unfoldable1NonEmptyList,
    functorWithIndexNonEmptyList: functorWithIndexNonEmptyList,
    foldableWithIndexNonEmptyList: foldableWithIndexNonEmptyList,
    traversableWithIndexNonEmptyList: traversableWithIndexNonEmptyList
};
