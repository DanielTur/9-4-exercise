// scripts.js

function drawTree(heightTree) {
	for (var i = 0; i < heightTree; i++) {
		var star = '';
		// console.log(i);
		for (var j = 1; j < heightTree - i; j++) {
			// star += 'o';  
			star +=' ';
		}
			for (var k = 0; k <= i*2; k++) {
				star +="*";
			}
		console.log(star);
	}
}

drawTree(5);
