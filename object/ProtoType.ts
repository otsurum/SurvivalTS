// class base
class Button {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const buttonA = new Button("aaa");

class Counter {
    count: number;
    constructor() {
        this.count = 0;
    }

    countUp() {
        this.count++;
    }
}

class ResetButton extends Counter {
    reset() {
        this.count = 0;
    }    
}

const resetButton = new ResetButton();
resetButton.countUp();
resetButton.reset();


// ProtoType
const counter = {
    count: 0,
    countUp() {
        this.count++;
    },
}

const resettableCounter = Object.create(counter);
resettableCounter.reset = function() {
    this.count = 0;
}