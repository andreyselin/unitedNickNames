"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ru_1 = require("./ru");
[ru_1.ru].forEach(function (language) {
    [language.adjectives, language.nouns, language.details].forEach(function (dictionary) {
        [dictionary.male, dictionary.female].forEach(function (list) {
            var duplicates = list.filter(function (item, index) { return list.indexOf(item) != index; });
            if (duplicates.length) {
                console.log(duplicates);
                throw new Error('DUPLICATES!');
            }
        });
    });
});
console.log("Test successfully passed!");
