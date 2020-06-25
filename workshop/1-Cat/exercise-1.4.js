// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);


class Cat {
    constructor(name, breed) {
    this.species = 'cat';
    this.breed = breed;
    this.name = name;
    this.tiredness = 100;
    this.hunger = 100;
    this.loneliness = 100;
    this.happiness = 50;
    }

    sleep = (hours) => {
        this.tiredness -= hours * 5;
        this.happiness += hours * 4;
        };

        eat = (kibbles) => {
            this.hunger -= (kibbles * 0.2);
            this.happiness += (kibbles * 0.05);
        };
        
        play = (min) => {
            this.loneliness -= min * 3;
            this.happiness += min * 4;
        };

        wait = (minutes) => {
            this.tiredness += minutes * 0.5;
            this.hunger += minutes * 0.5;
            this.loneliness += minutes * 2;
            this.happiness -= minutes * 4;
        };
    }

const boots = new Cat('Boots', 'Siamese');

boots.wait(20);

console.log(boots);