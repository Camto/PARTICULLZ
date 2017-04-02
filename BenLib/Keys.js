function Keys_Setup(name, element) {

	name.keys = {};
	
	element.addEventListener("keydown", function(key) {
		
		name.keys[key.keyCode] = true;
		
	});

	element.addEventListener("keyup", function(key) {
		
		delete name.keys[key.keyCode];
		
	});

	name.pressing = function(key_name) {
		
		return name.keys[name.key_codes[key_name]];
		
	}

	name.key_codes = {
		
		zero: 48,
		one: 49,
		two: 50,
		three: 51,
		four: 52,
		five: 53,
		six: 54,
		seven: 55,
		eight: 56,
		nine: 57
		
	};
	
}