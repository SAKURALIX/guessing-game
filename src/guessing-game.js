class GuessingGame {
    constructor() {}

    setRange(min, max) {
        let rangeArray = [];
    	let range = max - min;
    	for (i = 0; i <= range; i++) {
    		rangeArray.push(i);
    	}
    	console.log(rangeArray);
        return rangeArray 


    }

    guess() {

    }

    lower() {

    }

    greater() {

    }
}

module.exports = GuessingGame;
