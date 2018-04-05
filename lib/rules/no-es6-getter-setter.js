"use strict";

module.exports = {
    meta: {
        docs: {
            description: "disallow es6/javascript getter/setter",
            category: "ECMAScript 6"
        },
        schema: []
    },
    create(context) {
        return {
            ObjectExpression(node) {
                node.properties
                    .filter(p => p.kind === "get")
                    .forEach(p => context.report(node, "Getters not allowed."));

                node.properties
                    .filter(p => p.kind === "set")
                    .forEach(p => context.report(node, "Setters not allowed."))
            },

            ClassBody(node) {
                node.body
                    .filter(b => b.kind === "get")
                    .forEach(b => context.report(node, "Getters not allowed."));

                node.body
                    .filter(b => b.kind === "set")
                    .forEach(b => context.report(node, "Setters not allowed."))
            }
        };
    }
};
