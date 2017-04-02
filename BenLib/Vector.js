Array.prototype.pol = function() {
	
	return [Math.sqrt(this[0] * this[0] + this[1] * this[1]), Math.atan2(this[1], this[0])];
	
}

Array.prototype.set_pol = function(r, d) {
	
	this[0] = r * Math.cos(d);
	
	this[1] = r * Math.sin(d);
	
	return this;
	
}

Array.prototype.add = function(vector) {
	
	return [this[0] + vector[0], this[1] + vector[1]];
	
}

Array.prototype.sub = function(vector) {
	
	return [this[0] - vector[0], this[1] - vector[1]];
	
}

Array.prototype.norm = function() {
	
	this.set_pol(1, (this.pol())[1]);
	
	return this;
	
}

Array.prototype.get_norm = function() {
	
	var total_length = Math.sqrt((this[0] * this[0]) + (this[1] * this[1]));
	
	return [this[0] / total_length, this[1] / total_length];
	
}

Array.prototype.dot_prod = function(vector) {
	
	return (this[0] * vector[0]) + (this[1] * vector[1]);
	
}

Array.prototype.proj = function(vector) {
	
	var pre = this.dot_prod(vector) / (vector[0] * vector[0] + vector[1] * vector[1]);
	
	return [pre * vector[0], pre * vector[1]];
	
}

Array.prototype.left = function() {
	
	return [this[1], -this[0]];
	
}

Array.prototype.right = function() {
	
	return [-this[1], this[0]];
	
}

Array.prototype.perprod = function(vector) {
	
	return this.dot_prod(vector.right());
	
}