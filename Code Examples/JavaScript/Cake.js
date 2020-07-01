class Cake {
	constructor(type, layers, icing, candleNum) {
		this.type = type;
		this.layers = layers;
		this.icing = icing;
		this.candles = []
		this.candleNum = candleNum
	}
	generateCandles() {
		for (let index = 0; index < this.candleNum; index++) {
			let random = Math.random() * 20
			var currentCandle = new Candle("blue", false, random);
			this.candles.push(currentCandle)
		}
	}
}

class Candle {
	constructor(color, sparkler, secBrn) {
		this.color = color;
		this.sparkler = sparkler;
		this.candlesLit = false;
		this.secBrn = secBrn
	}
	lightCandles(candleStatus) {
		this.candlesLit = candleStatus
	}
}

var birthdayCake = new Cake("birthday", 3, true, 24);
console.log("before generate", birthdayCake)
birthdayCake.generateCandles()
console.log("after generate", birthdayCake)
