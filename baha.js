setTimeout("location.href = 'Birthday.html';",72000);

window.requestAnimFrame = ( function() {
	return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function( callback ) {
					window.setTimeout( callback, 6000 );
				};
})();


    
   