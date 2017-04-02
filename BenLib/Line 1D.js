Array.prototype.intersect_1D = function(line) {
	
	return (this[0] < line[1] && this[1] > line[0]);
	
}