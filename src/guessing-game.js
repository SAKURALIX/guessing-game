class GuessingGame {
    constructor() {}

    class Node {
    	constructor(value) {
    		this.value = value;
    		this.left = null;
    		this.right = null;
    	}
    }

class GuessingGame {
    constructor() {
    	this.root = null;
    	this.range = 0;
    }
    
    

    setRange(min, max) {
    	let minimum = min;
    	let maximum = max;
    	let rangeValue = maximum - minimum;
     this.range = rangeValue;
     console.log(this.range);
     return rangeValue;
    }
    
    

    guess() {
    	 if (!this.root) {
   // 	 let range = setRange(min, max);
    	 let candidate = Math.round(this.range/ 2);
    	 this.root = new Node();
    	 this.root.value = candidate;
    	 console.log(this.root.value);
    	 return candidate;
     	}
    }

    lower() {
    	this.right = game.guess()
    	min = min;
    	max = this.root.value;
    	this.range = max - min;
    	current.left = newNode;
    }

    greater() {
    	let greater = guess()

    }
}

function setRange(min, max) {
	   game.setRange(min, max);
	   game.guess();
}

let game = new GuessingGame();

setRange(0, 10);

}

module.exports = GuessingGame;
