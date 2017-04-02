function Mouse_Setup(screen) {
	
	screen.mouse_x = screen.width / 2;
	screen.mouse_y = screen.height / 2;
	screen.mouse_down = false;
	
	screen.canvas.addEventListener("mousemove", function(event) {
		
		var bounds = screen.canvas.getBoundingClientRect();
		
		screen.mouse_x = ((event.clientX - bounds.left) / (bounds.right - bounds.left)) * screen.width;
		screen.mouse_y = ((event.clientY - bounds.top) / (bounds.bottom - bounds.top)) * screen.height;
		
		if(event.which == 1) {
			
			screen.mouse_down = true;
			
		} else {
			
			screen.mouse_down = false;
			
		}
		
	});
	
	screen.canvas.addEventListener("mousedown", function(event) {
		
		if(event.which == 1) {
			
			screen.mouse_down = true;
			
		} else {
			
			screen.mouse_down = false;
			
		}
		
	});
	
	screen.canvas.addEventListener("mouseup", function(event) {
		
		screen.mouse_down = false;
		
	});
	
}