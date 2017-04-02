Array.prototype.activate = function(method) {
	
	for(var count = 0; count < this.length; count++) {
		
		this[count][method]();
		
	}
	
}