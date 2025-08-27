"use strict";

opa = "opa"; // ReferenceError: opa is not defined

const underfined = "undefined"; // SyntaxError: Identifier 'undefined' has already been declared

delete [].length; // TypeError: Cannot delete property 'length' of [object Array]

// o modo estrito ajuda a evitar erros comuns no JavaScript, tornando o código mais seguro e robusto.
