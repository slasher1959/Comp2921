function Shape() {
	this.X = 0;
	this.Y = 0;
}

Shape.prototype.move = function(x, y) {
	this.X = x;
	this.Y = y;
}

Shape.prototype.distance_from_origin = function() {
	return Math.sqrt(this.X*this.X + this.Y*this.Y);
}

var s = new Shape();
s.move(10, 10);
console.log(s.distance_from_origin());

	