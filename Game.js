function Game() {
	
	// frame++;
	
	// if(frame > 5) {
	
	for(var count = 0; count < 3; count++) {
		
		// frame = 0;
		
		for(var y = particles.length - 2; y > -1; y--) {
			
			for(var x = 0; x < particles[y].length; x++) {
				
				/* if(particles[y][x] == "@" && x > 0) {
					
					if(particles[y - 1][x] == " " && particles[y + 1][x] == "*") {
						
						particles[y][x] == "*";
						particles[y + 1][x] == "@";
						
					}
					
				} */
				
				if(particles[y][x] == "@") {
					
					if(particles[y + 1][x] == " " || particles[y + 1][x] == "*") {
							
						particles[y][x] = particles[y + 1][x];
						particles[y + 1][x] = "@";
						
					} else if(particles[y + 1][x - 1] == " " || particles[y + 1][x - 1] == "*") {
						
						particles[y][x] = particles[y + 1][x - 1];
						particles[y + 1][x - 1] = "@";
						
					} else if(particles[y + 1][x + 1] == " " || particles[y + 1][x + 1] == "*") {
						
						particles[y][x] = particles[y + 1][x + 1];
						particles[y + 1][x + 1] = "@";
						
					}/* else if(particles[y + 1][x] == "*") {
						
						if(particles[y + 1][x - 1] == " " || particles[y + 1][x - 1] == "*") {
							
							particles[y + 1][x - 1] = "*";
							particles[y + 1][x] = "@";
							
						} else if(particles[y + 1][x + 1] == " " || particles[y + 1][x + 1] == "*") {
							
							particles[y + 1][x + 1] = "*";
							particles[y + 1][x] = "@";
							
						} else if(particles[y][x - 1] == " " || particles[y][x - 1] == "*") {
							
							particles[y][x - 1] = "*";
							particles[y + 1][x] = "@";
							
						} else if(particles[y][x + 1] == " " || particles[y][x + 1] == "*") {
							
							particles[y][x + 1] = "*";
							particles[y + 1][x] = "@";
							
						} else {
							
							particles[y][x] = "*";
							particles[y + 1][x] = "@";
							
						}
						
					} */
					
				}
				
			}
			
		}
		
		for(var y = particles.length - 1; y > -1; y--) {
			
			for(var x = 0; x < particles[y].length; x++) {
				
				if(particles[y][x] == "*" && y == particles.length - 1) {
					
					particles[y][x] = " ";
					
				}
				
				if(particles[y][x] == "*") {
					
					if(particles[y + 1][x] == " " || particles[y + 1][x] == "^") {
						
						particles[y][x] = " ";
						particles[y + 1][x] = "*";
						
					} else if(particles[y + 1][x - 1] == " " || particles[y + 1][x - 1] == "^") {
						
						particles[y][x] = " ";
						particles[y + 1][x - 1] = "*";
						
					} else if(particles[y + 1][x + 1] == " " || particles[y + 1][x + 1] == "^") {
						
						particles[y][x] = " ";
						particles[y + 1][x + 1] = "*";
						
					} else if(particles[y][x - 1] == " " || particles[y][x - 1] == "^") {
						
						particles[y][x] = " ";
						particles[y][x - 1] = "_";
						
					} else if(particles[y][x + 1] == " " || particles[y][x + 1] == "^") {
						
						particles[y][x] = " ";
						particles[y][x + 1] = "_";
						
					}
					
				}
				
			}
			
		}
		
		for(var y = 0; y < particles.length; y++) {
			
			for(var x = 0; x < particles[y].length; x++) {
				
				if(particles[y][x] == "_") {
					
					particles[y][x] = "*";
					
				}
				
			}
			
		}
		
		/*for(var y = 0; y < particles.length; y++) {
			
			for(var x = 0; x < particles[y].length; x++) {
				
				if(particles[y][x] == "|") {
					// check if line is undefined
					if(particles[y - 1][x + 1] == " " && particles[y][x + 1] == "^") {
						
						
						
					}
					
				}
				
			}
			
		}*/
		
	}
	
	// }
	
	if(screen.pressing("one")) {
		
		select = 1;
		
	} else if(screen.pressing("two")) {
		
		select = 2;
		
	} else if(screen.pressing("three")) {
		
		select = 3;
		
	} else if(screen.pressing("four")) {
		
		select = 4;
		
	} else if(screen.pressing("five")) {
		
		select = 5;
		
	} else if(screen.pressing("six")) {
		
		select = 6;
		
	} else if(screen.pressing("seven")) {
		
		select = 7;
		
	} else if(screen.pressing("eight")) {
		
		select = 8;
		
	} else if(screen.pressing("nine")) {
		
		select = 9;
		
	} else if(screen.pressing("zero")) {
		
		select = 0;
		
	}
	
	screen.clear_screen();
	
	for(var y = 0; y < particles.length; y++) {
		
		for(var x = 0; x < particles[y].length; x++) {
			
			let color = false;
			
			switch(particles[y][x]) {
				
				case "#": color = "brown"; break;
				case "@": color = "yellow"; break;
				case "|": color = "green"; break;
				case "^": color = "red"; break;
				case "*": color = "blue"; break;
				/*case " ": color = "black"; break;
				case " ": color = "black"; break;
				case " ": color = "black"; break;
				case " ": color = "black"; break;
				case " ": color = "black"; break;*/
				
			}
			
			if(color) {
				
				screen.rect(x * bs, y * bs, bs, bs, color);
				
			}
			
		}
		
	}
	
	if(screen.mouse_down) {
		
		let block = " ";
		
		switch(select) {
			
			case 1: block = "#"; break;
			case 2: block = "@"; break;
			case 3: block = "|"; break;
			case 4: block = "^"; break;
			case 5: block = "*"; break;
			case 6: block = " "; break;
			case 7: block = " "; break;
			case 8: block = " "; break;
			case 9: block = " "; break;
			case 0: block = " "; break;
		}
		
		let x = Math.floor(screen.mouse_x / bs);
		let y = Math.floor(screen.mouse_y / bs);
		
		if(x > 0 && y > 0) {
			
			particles[y - 1][x - 1] = block;
			
		}
		if(y > 0) {
			
			particles[y - 1][x] = block;
			
		}
		if(x < particles.length && y > 0) {
			
			particles[y - 1][x + 1] = block;
			
		}
		if(x > 0) {
			
			particles[y][x - 1] = block;
			
		}
		if(x < particles.length) {
			
			particles[y][x + 1] = block;
			
		}
		particles[y][x] = block;
		if(x > 0 && y < particles.length - 1) {
			
			particles[y + 1][x - 1] = block;
			
		}
		if(y < particles.length - 1) {
			
			particles[y + 1][x] = block;
			
		}
		if(x < particles.length && y < particles.length - 1) {
			
			particles[y + 1][x + 1] = block;
			
		}
		
	}
	
	window.requestAnimationFrame(Game);
	
}