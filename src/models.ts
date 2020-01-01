export interface IDictionary {
    male: string[],
    female: string[];
}

export interface IPack {
    nouns:      IDictionary,
    adjectives: IDictionary,
    details:    IDictionary,
}