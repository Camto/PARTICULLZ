function Init() {
	
	var size = Math.min(window.innerWidth, window.innerHeight);
	screen = new Canvas(size, size);
	Mouse_Setup(screen);
	Keys_Setup(screen, document);
	Resize_Setup(Resize);
	
	bn = 320;
	bs = size / bn;
	particles = [];
	for(var count = 0; count < bn; count++) {
		
		particles[count] = [];
		
		for(var count2 = 0; count2 < bn; count2++) {
			
			particles[count][count2] = " ";
			
		}
		
	}
	select = 1;
	
	// frame = 0;
	
}