// Generated by purs version 0.12.2
"use strict";
var Control_Alt = require("../Control.Alt/index.js");
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Bind = require("../Control.Bind/index.js");
var Control_Monad_Error_Class = require("../Control.Monad.Error.Class/index.js");
var Control_Monad_Free = require("../Control.Monad.Free/index.js");
var Control_Monad_Rec_Class = require("../Control.Monad.Rec.Class/index.js");
var Control_Monad_State = require("../Control.Monad.State/index.js");
var Control_Monad_State_Class = require("../Control.Monad.State.Class/index.js");
var Control_Monad_State_Trans = require("../Control.Monad.State.Trans/index.js");
var Control_Parallel = require("../Control.Parallel/index.js");
var Control_Parallel_Class = require("../Control.Parallel.Class/index.js");
var Control_Semigroupoid = require("../Control.Semigroupoid/index.js");
var Data_Boolean = require("../Data.Boolean/index.js");
var Data_Either = require("../Data.Either/index.js");
var Data_Foldable = require("../Data.Foldable/index.js");
var Data_Function = require("../Data.Function/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra/index.js");
var Data_Identity = require("../Data.Identity/index.js");
var Data_Int = require("../Data.Int/index.js");
var Data_List = require("../Data.List/index.js");
var Data_List_Types = require("../Data.List.Types/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Semigroup = require("../Data.Semigroup/index.js");
var Data_Semiring = require("../Data.Semiring/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_Time_Duration = require("../Data.Time.Duration/index.js");
var Data_Traversable = require("../Data.Traversable/index.js");
var Data_Tuple = require("../Data.Tuple/index.js");
var Data_Unit = require("../Data.Unit/index.js");
var Effect_Aff = require("../Effect.Aff/index.js");
var Effect_Aff_AVar = require("../Effect.Aff.AVar/index.js");
var Effect_Exception = require("../Effect.Exception/index.js");
var Prelude = require("../Prelude/index.js");
var Skip = function (x) {
    return x;
};
var Only = function (x) {
    return x;
};
var Group = (function () {
    function Group(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    Group.create = function (value0) {
        return function (value1) {
            return new Group(value0, value1);
        };
    };
    return Group;
})();
var TestGroup = (function () {
    function TestGroup(value0, value1, value2, value3) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
    };
    TestGroup.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return new TestGroup(value0, value1, value2, value3);
                };
            };
        };
    };
    return TestGroup;
})();
var TestUnit = (function () {
    function TestUnit(value0, value1, value2, value3, value4) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.value4 = value4;
    };
    TestUnit.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return function (value3) {
                    return function (value4) {
                        return new TestUnit(value0, value1, value2, value3, value4);
                    };
                };
            };
        };
    };
    return TestUnit;
})();
var SkipUnit = (function () {
    function SkipUnit(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    SkipUnit.create = function (value0) {
        return function (value1) {
            return new SkipUnit(value0, value1);
        };
    };
    return SkipUnit;
})();
var testSkip = function (l) {
    return function (t) {
        return Control_Monad_Free.liftF(new TestUnit(l, true, false, t, Data_Unit.unit));
    };
};
var xit = testSkip;
var testOnly = function (l) {
    return function (t) {
        return Control_Monad_Free.liftF(new TestUnit(l, false, true, t, Data_Unit.unit));
    };
};
var test = function (l) {
    return function (t) {
        return Control_Monad_Free.liftF(new TestUnit(l, false, false, t, Data_Unit.unit));
    };
};
var suiteSkip = function (label) {
    return function (tests) {
        return Control_Monad_Free.liftF(new TestGroup(new Group(label, tests), true, false, Data_Unit.unit));
    };
};
var xdescribe = suiteSkip;
var suiteOnly = function (label) {
    return function (tests) {
        return Control_Monad_Free.liftF(new TestGroup(new Group(label, tests), false, true, Data_Unit.unit));
    };
};
var suite = function (label) {
    return function (tests) {
        return Control_Monad_Free.liftF(new TestGroup(new Group(label, tests), false, false, Data_Unit.unit));
    };
};
var success = Control_Applicative.pure(Effect_Aff.applicativeAff)(Data_Unit.unit);
var skipUnit = function (t) {
    return function (a) {
        return Control_Monad_Free.liftF(SkipUnit.create(t)(a));
    };
};
var showOnly = new Data_Show.Show(function (v) {
    return Data_Show.show(Data_Show.showBoolean)(v);
});
var newtypeSkip = new Data_Newtype.Newtype(function (n) {
    return n;
}, Skip);
var newtypeOnly = new Data_Newtype.Newtype(function (n) {
    return n;
}, Only);
var makeTimeout = function (time) {
    return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(Effect_Aff.delay(Data_Time_Duration.Milliseconds(Data_Int.toNumber(time))))(function () {
        return Control_Monad_Error_Class.throwError(Effect_Aff.monadThrowAff)(Effect_Exception.error("test timed out after " + (Data_Show.show(Data_Show.showInt)(time) + "ms")));
    });
};
var timeout = function (time) {
    return function (t) {
        return Control_Bind.bind(Effect_Aff.bindAff)(Control_Parallel_Class.sequential(Effect_Aff.parallelAff)(Control_Alt.alt(Effect_Aff.altParAff)(Control_Parallel_Class.parallel(Effect_Aff.parallelAff)(Effect_Aff.attempt(makeTimeout(time))))(Control_Parallel_Class.parallel(Effect_Aff.parallelAff)(Effect_Aff.attempt(t)))))(function (v) {
            return Data_Either.either(Control_Monad_Error_Class.throwError(Effect_Aff.monadThrowAff))(Data_Function["const"](success))(v);
        });
    };
};
var keepErrors = (function () {
    var run = function (s) {
        return function (v) {
            if (v.value1 instanceof Data_Either.Left) {
                return Data_List.snoc(s)(new Data_Tuple.Tuple(v.value0, v.value1.value0));
            };
            return s;
        };
    };
    return Data_Foldable.foldl(Data_List_Types.foldableList)(run)(Data_List_Types.Nil.value);
})();
var it = test;
var haytingAlgebraOnly = new Data_HeytingAlgebra.HeytingAlgebra(Data_Newtype.over2(newtypeOnly)(newtypeOnly)(Only)(Data_HeytingAlgebra.conj(Data_HeytingAlgebra.heytingAlgebraBoolean)), Data_Newtype.over2(newtypeOnly)(newtypeOnly)(Only)(Data_HeytingAlgebra.disj(Data_HeytingAlgebra.heytingAlgebraBoolean)), false, Data_Newtype.over2(newtypeOnly)(newtypeOnly)(Only)(Data_HeytingAlgebra.implies(Data_HeytingAlgebra.heytingAlgebraBoolean)), Data_Newtype.over(newtypeOnly)(newtypeOnly)(Only)(Data_HeytingAlgebra.not(Data_HeytingAlgebra.heytingAlgebraBoolean)), true);
var hasOnly = function (t) {
    var go = function (v) {
        if (v instanceof TestGroup) {
            return Data_Functor.voidLeft(Control_Monad_State_Trans.functorStateT(Data_Identity.functorIdentity))(Control_Monad_State_Class.modify(Control_Monad_State_Trans.monadStateStateT(Data_Identity.monadIdentity))(function ($169) {
                return Data_HeytingAlgebra.disj(Data_Tuple.heytingAlgebraTuple(haytingAlgebraOnly)(haytingAlgebraOnly))(hasOnly(v.value0.value1))(Data_HeytingAlgebra.disj(Data_Tuple.heytingAlgebraTuple(haytingAlgebraOnly)(haytingAlgebraOnly))(new Data_Tuple.Tuple(v.value2, Data_HeytingAlgebra.ff(haytingAlgebraOnly)))($169));
            }))(v.value3);
        };
        if (v instanceof TestUnit) {
            return Data_Functor.voidLeft(Control_Monad_State_Trans.functorStateT(Data_Identity.functorIdentity))(Control_Monad_State_Class.modify(Control_Monad_State_Trans.monadStateStateT(Data_Identity.monadIdentity))(Data_HeytingAlgebra.disj(Data_Tuple.heytingAlgebraTuple(haytingAlgebraOnly)(haytingAlgebraOnly))(new Data_Tuple.Tuple(Data_HeytingAlgebra.ff(haytingAlgebraOnly), v.value2))))(v.value4);
        };
        if (v instanceof SkipUnit) {
            return Control_Applicative.pure(Control_Monad_State_Trans.applicativeStateT(Data_Identity.monadIdentity))(v.value1);
        };
        throw new Error("Failed pattern match at Test.Unit (line 135, column 5 - line 135, column 43): " + [ v.constructor.name ]);
    };
    return Control_Monad_State.execState(Control_Monad_Free.foldFree(Control_Monad_State_Trans.monadRecStateT(Control_Monad_Rec_Class.monadRecIdentity))(go)(t))(Data_HeytingAlgebra.ff(Data_Tuple.heytingAlgebraTuple(haytingAlgebraOnly)(haytingAlgebraOnly)));
};
var functorTestF = new Data_Functor.Functor(function (f) {
    return function (v) {
        if (v instanceof TestGroup) {
            return new TestGroup(v.value0, v.value1, v.value2, f(v.value3));
        };
        if (v instanceof TestUnit) {
            return new TestUnit(v.value0, v.value1, v.value2, v.value3, f(v.value4));
        };
        if (v instanceof SkipUnit) {
            return new SkipUnit(Data_Functor.map(functorTestF)(f)(v.value0), f(v.value1));
        };
        throw new Error("Failed pattern match at Test.Unit (line 98, column 1 - line 98, column 39): " + [ f.constructor.name, v.constructor.name ]);
    };
});
var walkSuite = function (runItem) {
    return function (tests) {
        return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Aff_AVar["new"](Data_List_Types.Nil.value))(function (v) {
            var walkItem = function (path) {
                return function (v1) {
                    if (v1 instanceof TestGroup) {
                        return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(runItem(path)(new Data_Either.Left(v1.value0.value0)))(function () {
                            return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(Control_Monad_Free.runFreeM(functorTestF)(Effect_Aff.monadRecAff)(walkItem(Data_List.snoc(path)(v1.value0.value0)))(v1.value0.value1))(function () {
                                return Control_Applicative.pure(Effect_Aff.applicativeAff)(v1.value3);
                            });
                        });
                    };
                    if (v1 instanceof TestUnit) {
                        return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Aff.suspendAff(v1.value3))(function (v2) {
                            return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Aff_AVar.take(v))(function (v3) {
                                return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(Effect_Aff_AVar.put(new Data_List_Types.Cons(Data_Tuple.Tuple.create(Data_List.snoc(path)(v1.value0))(Effect_Aff.joinFiber(v2)), v3))(v))(function () {
                                    return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(runItem(path)(Data_Either.Right.create(Data_Tuple.Tuple.create(v1.value0)(Effect_Aff.joinFiber(v2)))))(function () {
                                        return Control_Applicative.pure(Effect_Aff.applicativeAff)(v1.value4);
                                    });
                                });
                            });
                        });
                    };
                    if (v1 instanceof SkipUnit) {
                        return Control_Applicative.pure(Effect_Aff.applicativeAff)(v1.value1);
                    };
                    throw new Error("Failed pattern match at Test.Unit (line 205, column 7 - line 208, column 18): " + [ path.constructor.name, v1.constructor.name ]);
                };
            };
            return Control_Bind.discard(Control_Bind.discardUnit)(Effect_Aff.bindAff)(Control_Monad_Free.runFreeM(functorTestF)(Effect_Aff.monadRecAff)(walkItem(Data_List_Types.Nil.value))(tests))(function () {
                return Control_Bind.bind(Effect_Aff.bindAff)(Effect_Aff_AVar.take(v))(function (v1) {
                    return Control_Applicative.pure(Effect_Aff.applicativeAff)(v1);
                });
            });
        });
    };
};
var fit = testOnly;
var filterEmptyNodes = (function () {
    var isEmpty = function (t) {
        return Control_Monad_State.execState(Control_Monad_Free.foldFree(Control_Monad_State_Trans.monadRecStateT(Control_Monad_Rec_Class.monadRecIdentity))(empty)(t))(true);
    };
    var empty = function (v) {
        if (v instanceof TestGroup) {
            return Data_Functor.voidLeft(Control_Monad_State_Trans.functorStateT(Data_Identity.functorIdentity))(Control_Monad_State_Class.modify(Control_Monad_State_Trans.monadStateStateT(Data_Identity.monadIdentity))(Data_HeytingAlgebra.conj(Data_HeytingAlgebra.heytingAlgebraBoolean)(isEmpty(v.value0.value1))))(v.value3);
        };
        if (v instanceof TestUnit) {
            return Data_Functor.voidLeft(Control_Monad_State_Trans.functorStateT(Data_Identity.functorIdentity))(Control_Monad_State_Class.modify(Control_Monad_State_Trans.monadStateStateT(Data_Identity.monadIdentity))(Data_HeytingAlgebra.conj(Data_HeytingAlgebra.heytingAlgebraBoolean)(false)))(v.value4);
        };
        if (v instanceof SkipUnit) {
            return Control_Applicative.pure(Control_Monad_State_Trans.applicativeStateT(Data_Identity.monadIdentity))(v.value1);
        };
        throw new Error("Failed pattern match at Test.Unit (line 152, column 5 - line 152, column 36): " + [ v.constructor.name ]);
    };
    var go = function (v) {
        if (v instanceof TestGroup) {
            if (isEmpty(v.value0.value1)) {
                return skipUnit(v)(v.value3);
            };
            if (Data_Boolean.otherwise) {
                return Control_Monad_Free.liftF(v);
            };
        };
        return Control_Monad_Free.liftF(v);
    };
    return Control_Monad_Free.substFree(go);
})();
var filterTests = function (t) {
    var v = hasOnly(t);
    var go = function (v1) {
        return function (v2) {
            if (v2 instanceof TestGroup) {
                var $104 = Data_Newtype.un(newtypeSkip)(Skip)(v2.value1);
                if ($104) {
                    return skipUnit(v2)(v2.value3);
                };
                return Control_Monad_Free.liftF(new TestGroup(new Group(v2.value0.value0, Control_Monad_Free.substFree(go(v2.value2))(v2.value0.value1)), v2.value1, v2.value2, v2.value3));
            };
            if (v2 instanceof TestUnit) {
                var v3 = Data_Newtype.un(newtypeOnly)(Only)(Data_HeytingAlgebra.conj(haytingAlgebraOnly)(Data_HeytingAlgebra.implies(haytingAlgebraOnly)(v.value0)(v1))(Data_HeytingAlgebra.implies(haytingAlgebraOnly)(v.value1)(v2.value2))) && !Data_Newtype.un(newtypeSkip)(Skip)(v2.value1);
                if (v3) {
                    return Control_Monad_Free.liftF(v2);
                };
                if (!v3) {
                    return skipUnit(v2)(v2.value4);
                };
                throw new Error("Failed pattern match at Test.Unit (line 187, column 11 - line 189, column 35): " + [ v3.constructor.name ]);
            };
            if (v2 instanceof SkipUnit) {
                return Control_Monad_Free.liftF(v2);
            };
            throw new Error("Failed pattern match at Test.Unit (line 181, column 7 - line 181, column 40): " + [ v1.constructor.name, v2.constructor.name ]);
        };
    };
    return filterEmptyNodes(Control_Monad_Free.substFree(go(false))(t));
};
var fdescribe = suiteOnly;
var failure = function ($170) {
    return Control_Monad_Error_Class.throwError(Effect_Aff.monadThrowAff)(Effect_Exception.error($170));
};
var describe = suite;
var countTests = function (ts) {
    var go = function (v) {
        if (v instanceof SkipUnit) {
            return Control_Applicative.pure(Control_Monad_State_Trans.applicativeStateT(Data_Identity.monadIdentity))(v.value1);
        };
        if (v instanceof TestUnit) {
            return Data_Functor.voidLeft(Control_Monad_State_Trans.functorStateT(Data_Identity.functorIdentity))(Control_Monad_State_Class.modify(Control_Monad_State_Trans.monadStateStateT(Data_Identity.monadIdentity))(Data_Semiring.add(Data_Semiring.semiringInt)(1)))(v.value4);
        };
        if (v instanceof TestGroup) {
            return Data_Functor.voidLeft(Control_Monad_State_Trans.functorStateT(Data_Identity.functorIdentity))(Control_Monad_State_Class.modify(Control_Monad_State_Trans.monadStateStateT(Data_Identity.monadIdentity))(Data_Semiring.add(Data_Semiring.semiringInt)(countTests(v.value0.value1))))(v.value3);
        };
        throw new Error("Failed pattern match at Test.Unit (line 160, column 5 - line 160, column 29): " + [ v.constructor.name ]);
    };
    return Control_Monad_State.execState(Control_Monad_Free.foldFree(Control_Monad_State_Trans.monadRecStateT(Control_Monad_Rec_Class.monadRecIdentity))(go)(ts))(0);
};
var countSkippedTests = function (ts) {
    var go = function (v) {
        if (v instanceof SkipUnit && v.value0 instanceof TestUnit) {
            return Data_Functor.voidLeft(Control_Monad_State_Trans.functorStateT(Data_Identity.functorIdentity))(Control_Monad_State_Class.modify(Control_Monad_State_Trans.monadStateStateT(Data_Identity.monadIdentity))(Data_Semiring.add(Data_Semiring.semiringInt)(1)))(v.value1);
        };
        if (v instanceof SkipUnit && v.value0 instanceof TestGroup) {
            return Data_Functor.voidLeft(Control_Monad_State_Trans.functorStateT(Data_Identity.functorIdentity))(Control_Monad_State_Class.modify(Control_Monad_State_Trans.monadStateStateT(Data_Identity.monadIdentity))(Data_Semiring.add(Data_Semiring.semiringInt)(countTests(v.value0.value0.value1))))(v.value1);
        };
        if (v instanceof SkipUnit && v.value0 instanceof SkipUnit) {
            return Control_Applicative.pure(Control_Monad_State_Trans.applicativeStateT(Data_Identity.monadIdentity))(v.value1);
        };
        if (v instanceof TestUnit) {
            return Control_Applicative.pure(Control_Monad_State_Trans.applicativeStateT(Data_Identity.monadIdentity))(v.value4);
        };
        if (v instanceof TestGroup) {
            return Data_Functor.voidLeft(Control_Monad_State_Trans.functorStateT(Data_Identity.functorIdentity))(Control_Monad_State_Class.modify(Control_Monad_State_Trans.monadStateStateT(Data_Identity.monadIdentity))(Data_Semiring.add(Data_Semiring.semiringInt)(countSkippedTests(v.value0.value1))))(v.value3);
        };
        throw new Error("Failed pattern match at Test.Unit (line 168, column 5 - line 168, column 29): " + [ v.constructor.name ]);
    };
    return Control_Monad_State.execState(Control_Monad_Free.foldFree(Control_Monad_State_Trans.monadRecStateT(Control_Monad_Rec_Class.monadRecIdentity))(go)(ts))(0);
};
var collectTests = function ($171) {
    return Data_Functor.map(Effect_Aff.functorAff)(Data_List.reverse)(walkSuite(function (v) {
        return function (v1) {
            return Control_Applicative.pure(Effect_Aff.applicativeAff)(Data_Unit.unit);
        };
    })($171));
};
var collectResults = function (tests) {
    var run = function (v) {
        return Data_Functor.map(Effect_Aff.functorAff)(Data_Tuple.Tuple.create(v.value0))(Effect_Aff.attempt(v.value1));
    };
    return Data_Traversable["for"](Effect_Aff.applicativeAff)(Data_List_Types.traversableList)(tests)(run);
};
module.exports = {
    TestGroup: TestGroup,
    TestUnit: TestUnit,
    SkipUnit: SkipUnit,
    Group: Group,
    Skip: Skip,
    Only: Only,
    success: success,
    failure: failure,
    timeout: timeout,
    test: test,
    testOnly: testOnly,
    testSkip: testSkip,
    suite: suite,
    suiteOnly: suiteOnly,
    suiteSkip: suiteSkip,
    walkSuite: walkSuite,
    filterTests: filterTests,
    collectTests: collectTests,
    collectResults: collectResults,
    countSkippedTests: countSkippedTests,
    keepErrors: keepErrors,
    describe: describe,
    it: it,
    newtypeSkip: newtypeSkip,
    newtypeOnly: newtypeOnly,
    showOnly: showOnly,
    haytingAlgebraOnly: haytingAlgebraOnly,
    functorTestF: functorTestF
};
