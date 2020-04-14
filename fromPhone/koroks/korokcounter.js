// import {
//   koroks
// } from "./koroks.js";
import {
  koroks
} from "./shortList.js";

const korokCount = koroks.length;
const slimTheSeeds = () => {
    const keepList = [
    'lat',
    'id',
    'lng',
    'markerName',
    'markerSlug',
    'wikiPage'
  ];
    const slimSeeds = koroks
      .map(korok => {
        let id = koroks.indexOf(korok);
        korok.id = id;

        let slimSeed = Object.entries(korok)
          .filter(([prop, val]) => {
            if (keepList.includes(prop) === true) {
              return [prop, val];
            }
          }).reduce((obj, item) => {
              obj[item[0]] = item[1];
              return obj;
          }, {});
        return slimSeed;
      });
    return slimSeeds
}

let cleanedKoroks = slimTheSeeds();
console.log(cleanedKoroks)



j