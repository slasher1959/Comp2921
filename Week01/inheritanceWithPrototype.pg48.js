function Shape () {
	this.X = 0;
	this.Y = 0;
}
	
Shape.prototype.move = function (x, y) {
	this.X = x;
	this.Y = y;
}
	
Shape.prototype.distance_from_origin = function () {
	return Math.sqrt(this.X * this.X + this.Y * this.Y);
}

function Square ()	{
	this.Width = 0;
}

Square.prototype = new Shape();
Square.prototype.__proto__ = Shape.prototype;

Square.prototype.area = function() {
	return this.Width * this.Width;
}

var sq = new Square();
sq.Width = 5;
sq.move(-5, -5);
console.log(sq.area());
console.log(sq.distance_from_origin());