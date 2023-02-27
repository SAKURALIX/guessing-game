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
        this.minimum = null;
        this.current = null;
    }
    
    setRange(min, max) {
    	this.minimum = min;
        let minimum = min;
    	let maximum = max;
    	let rangeValue = maximum - minimum;
        this.range = rangeValue;
        // console.log(this.range);
        return rangeValue;
    }
    
    

    guess() {
    	 if (this.root === null) {
    	 let candidate = Math.round(this.range/ 2);
    	 this.root = new Node();
         this.current = this.root;
    	 this.root.value = candidate;
    	//  console.log(this.current);
    	 return candidate;
     	} else if (this.root != null) {
            let candidate = Math.round((this.minimum + this.range)/ 2);
            this.current = new Node();
            this.current.value = candidate;
            this.root.left = this.current;

            // console.log(this.root);
            console.log(this.current);

            return this.current;
        }
    }

    lower() {
    	// this.right = game.guess()
        if (this.current === this.root) {
    	let min = this.minimum;
    	let max = this.root.value;
    	this.range = max - min;
        // console.log(this.range )

        } else if (this.current != this.root) {
            this.root.left = this.current;
            let min = this.minimum;
            let max = this.current.value;
            this.range = max - min;
            // console.log(min)
            // console.log(max)   
            // console.log(this.range)
        }

    	// current.left = newNode;
    }
// здесь остановился, возможно неправильно
    greater() {
        this.root.right = this.current;
        let min = this.current.value;
        let max = this.root.value;
        this.range = max - min;
    }
}

function setRange(min, max) {
	   game.setRange(min, max);
	   game.guess();
       game.lower();
       game.guess();
       game.lower();
       game.guess();
       game.lower();
       game.guess();
       game.greater();
       game.guess();    
}

let game = new GuessingGame();

setRange(0, 4048);
    


// module.exports = GuessingGame;
