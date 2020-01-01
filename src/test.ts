import { ru } from "./ru";

[ ru ].forEach(language => {
    [ language.adjectives, language.nouns, language.details ].forEach(dictionary => {
        [ dictionary.male, dictionary.female ].forEach(list => {
            const duplicates = list.filter((item, index) => list.indexOf(item) != index);
            if (duplicates.length) {
                console.log(duplicates);
                throw new Error('DUPLICATES!');
            }
        })
    })
});

console.log("Test successfully passed!");