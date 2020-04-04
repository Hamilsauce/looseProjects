import {
    koroks
} from "./koroks.js";

const korokCount = koroks.length;

const slimTheSeeds = () => {
    const keepList = [
        'lat',
        'lng',
        'markerName',
        'markerSlug',
        'wikiPage'
    ]

    const slimSeeds = koroks
        .map(korok => {
            let slimSeed = Object.entries(korok)
                .filter(([prop, val]) => {
                    if (keepList.includes(prop) === true) {
                        return [prop, val];
                    }
                })
                .reduce((obj, item, id) => {
                    obj.id = id;
                    obj[item[0]] = item[1];

                    return obj;
                }, {});
            return slimSeed;
        });
    return slimSeeds
}

let cleanedKoroks = slimTheSeeds();
console.log(cleanedKoroks);





