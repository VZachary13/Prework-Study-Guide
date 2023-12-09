// variable assignments
var topics = ['HTML','CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

//list topic function displays entire topics array
function listTopics() {
    for (x = 0; x < topics.length; x++) {
        console.log(topics[x])
    }
}

//select topic function uses Math object randomizer variable to select a random topic
function selectTopic() {
    if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
    } else {
    console.log('Please try again!');
    } 
}

//called functions
console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();