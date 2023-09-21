var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomtopic = topics[Math.floor(Math.random() * topics.length)];
function listTopics() {
    for (var x = 0; x < topics.length; x++){
console.log (topics[x]);
    }
}
function selectTopic(){
if (randomtopic === 'HTML'){
    console.log("let's study HTML!");
} else if (randomtopic === 'CSS') {
    console.log ("let's study CSS!");
} else if (randomtopic === 'Git') {
    console.log("let's study Git!");
} else if (randomtopic === 'Javascript'){
    console.log("let's study Java script!");
} else {
    console.log("please try again!")
}
}
console.log("Here are the topics we learned through prework:")
listTopics()
console.log("Which topic should we study first?")
selectTopic()