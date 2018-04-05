"use strict";

const rule = require("../../../lib/rules/no-es6-getter-setter");
const RuleTester = require("eslint/lib/testers/rule-tester");

const ruleTester = new RuleTester();

ruleTester.run("no-es6-getter-setter", rule, {
    valid: [
        "var o = {a: 1};",

    ],
    invalid: [
        {
            code: "var o = {get a() { return 1; }}",
            errors: [{
                message: "Getters not allowed."
            }]
        },
        {
            code: "var o = {set a(v) { this._a = v; }}",
            errors: [{
                message: "Setters not allowed."
            }]
        },
        {
            code: "class MyClass { get a() { return 1; } }",
            parserOptions: {ecmaVersion: 6},
            errors: [{
                message: "Getters not allowed."
            }]
        },
        {
            code: "class MyClass { set a(val) { this._a = val; } }",
            parserOptions: {ecmaVersion: 6},
            errors: [{
                message: "Setters not allowed."
            }]
        },
    ]
});
