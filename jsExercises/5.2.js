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

// Function that takes as argument the data structure you defined 
// in the previous exercise and return a list of the same cast but in a random order.
function randomizeCast(tvSerie) {
    let randomizedCastMembers = [];
    for (let i = tvSerie.castMembers.length; i > 0; i--){
        let index = Math.floor(Math.random()*i);
        console.log(index);
        randomizedCastMembers.push(tvSerie.castMembers[index]);
        tvSerie.castMembers.splice(index,1);
    }
    return randomizedCastMembers;
}

console.log(randomizeCast(askTvSerie()));