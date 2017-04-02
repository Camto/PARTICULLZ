function Resize() {
	
	var size = Math.min(window.innerWidth, window.innerHeight);
	screen.width = size;
	screen.height = size;
	screen.canvas.width = size;
	screen.canvas.height = size;
	
	bs = size / bn;
	
}