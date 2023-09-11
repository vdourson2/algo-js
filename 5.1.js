// Function that asks the user for the following data about its favorite TV serie:
//     - Name
//     - Production year
//     - Names of the cast members (as much as the user want)
// That function return all the data in a single object.

function askTvSerie() {
    let favoriteSerie = {};
    favoriteSerie.name = prompt("What is the name of your favorite TV serie ?");
    favoriteSerie.productionYear = prompt("What is the year of production?");
    let numberCastMembers = prompt("How many cast members are there?");
    favoriteSerie.castMembers = [];
    for (let i=0; i<numberCastMembers; i++) {
        favoriteSerie.castMembers.push(prompt("What is the castMember number " + (i+1) + "?"));
    }
    return favoriteSerie;
}

let serie = JSON.stringify(askTvSerie())

console.log(serie);