const axios = require('axios');

axios.get('https://ozarktechwebdev.com/api/jokes.json').then((response) => {
    //console.log(response.data);

    const jokes = response.data.jokes;
    const chosenIndex = getRandomInt(0, jokes.length - 1);
    const chosenJoke = jokes[chosenIndex];

    console.log("Here's a developer joke for today:");
    console.log("Q: " + chosenJoke.question);
    console.log("A: " + chosenJoke.answer);


}).catch(error => {
    console.error("Couldn't fetch a joke. Try again later");
});


function getRandomInt(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
}