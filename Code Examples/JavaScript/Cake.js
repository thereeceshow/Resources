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
			this.candles.push(new Candle("blue", false))
			console.log(this.candles)
		}
	}
}
class Candle {
	constructor(color, sparkler) {
		this.color = color;
		this.sparkler = sparkler;
		this.candlesLit = false;
	}
	lightCandles(candleStatus) {
		this.candlesLit = candleStatus
	}
}


var birthdayCake = new Cake("birthday", 3, true, 24);
console.log("before generate", birthdayCake)
birthdayCake.generateCandles()
console.log("after generate", birthdayCake)
//
