This is complete library set for generating nicknames basing on Russian memes of different times.

We have three dictionaries: `adjectives`, `nouns` and `details`.
We recommend that you use two of them for one nickname since using three renders nicknames very big — up to seven words, which is not always suitable.

Usage example:

```
import { UNN_RU } from 'unitedNickNames';
// or const { UNN_RU } = require('unitedNickNames');

// Now you have UNN_RU object with following content,
// you can generate nicknames from:
// {
//   adjectives: { male: string[], female: string[] }
//   nouns: ...,
//   details: ...
// }

```

You're welcome to participate with adding new words, phrases or languages!