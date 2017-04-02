class Polygon {
	
	constructor() {
		
		if(!(arguments.length % 2)) {
			
			if(arguments.length > 3) {
				
				this.points = [];
				for(var count = 0; count < arguments.length; count+= 2) {
					
					this.points.push([arguments[count], arguments[count + 1]]);
					
				}
				
			} else {
				
				console.error("Error: That's a dot...");
				
			}
			
		} else {
			
			console.error("Error: Contains incomplete vector!");
			
		}
		
	}
	
	collide(polygon) {
		
		var walls = this.get_walls().concat(polygon.get_walls());
		
		for(var count = 0; count < walls.length; count++) {
			
			let curr_wall = walls[count];
			
			let shape1_proj = this.project(curr_wall);
			let shape2_proj = polygon.project(curr_wall);
			
			if(!shape1_proj.intersect_1D(shape2_proj)) {
				
				return false;
				
			}
			
		}
		
		return true;
		
	}
	
	get_walls() {
		
		var walls = [];
		
		for(var count = 0; count < this.points.length; count++) {
			
			let point1 = this.points[count];
			let point2 = this.points[(count + 1) == this.points.length ? 0 : count + 1];
			
			walls.push((point1.sub(point2)).right());
			
		}
		
		return walls;
		
	}
	
	project(wall) {
		
		var x1 = wall.dot_prod(this.points[0]);
		var x2 = x1;
		
		for(var count = 0; count < this.points.length; count++) {
			
			let point = wall.dot_prod(this.points[count]);
			
			if(point < x1) {
				
				x1 = point;
				
			} else if(point > x2) {
				
				x2 = point;
				
			}
			
		}
		
		return [x1, x2];
		
	}
	
	render(background, border, canvas) {
		
		var draw = canvas.draw;
		
		draw.beginPath();
		
		draw.fillStyle = background;
		draw.strokeStyle = border[0];
		draw.lineWidth = border[1];
		
		draw.moveTo(this.points[0][0], this.points[0][1]);
		
		for(var count = 1; count < this.points.length; count++) {
			
			draw.lineTo(this.points[count][0], this.points[count][1]);
			
		}
		
		draw.lineTo(this.points[0][0], this.points[0][1]);
		
		draw.fill();
		draw.stroke();
		
	}
	
	move(x, y) {
		
		for(var count = 0; count < this.points.length; count++) {
			
			this.points[count][0] += x;
			this.points[count][1] += y;
			
		}
		
	}
	
	teleport(x, y) {
		
		console.log("Polygon.teleport() is still not made!")
		
	}
	
}

/*
	
	a = new Polygon(0, 0, 3, 3, 0, 3);
	b = new Polygon(3, 0, 3, 3, 0, 3);
	console.log(a.collide(b));
	
	a = new Polygon(0, 0, 3, 3, 0, 3);
	b = new Polygon(4, 0, 4, 3, 1, 0);
	console.log(a.collide(b));
	
*/