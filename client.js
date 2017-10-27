var myApp = angular.module('myApp', []);

myApp.controller('guessWhoController', function(){
var guess = this;   

guess.message = 'Who am I?';

guess.submit = function () { //submit inputs
    var newPerson = { //object constructor for new data
        name: guess.name,
        github: guess.github,
    }
    console.log(newPerson); //logging data just sent
    people.push(newPerson); //sending objects to people array
    console.log(people);
}

var people = [{ name: 'Chris', github: 'christopher-black' },
                  { name: 'Marta', github: 'martajopp' },
                { name: 'Ally', github: 'lysautumn'}];

console.log(people);

guess.people = people; //makes people available to html

guess.game = function (person) {
    console.log('image clicked');
    console.log(person);
guess.message = person;
}
})