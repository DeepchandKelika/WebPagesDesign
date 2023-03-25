function doFirst(){
 /*var x=document.getElementById('canvas');
		canvas= x.getContext('2d');
	//canvas.fillStyle="yellow";
	//canvas.strokeStyle="red";
	var g= canvas.createLinearGradient(10,10,200,100);
	g.addColorStop(.0,"green");
	g.addColorStop(.5,"blue");
	g.addColorStop(1,"yellow");
	
	canvas.fillStyle=g;
	canvas.fillRect(10,10,200,100);
	
	
	//canvas.fillRect(10,150,200,100);
	//canvas.clearRect(13,155,50,20);
	*/
	var y=document.getElementById('canvas');
	shape= y.getContext('2d');
	shape.strokeStyle="Black";
	shape.beginPath();
	shape.moveTo(500,50);
	shape.lineTo(900,550);
	shape.lineTo(100,550);
	shape.closePath();
	shape.stroke();
	
	shape.beginPath();
	shape.moveTo(500,80);
	shape.lineTo(860,535);
	shape.lineTo(140,535);
	shape.closePath();
	
	shape.stroke();	
	
	
	/* Methods: 
	 canvas.translate(x,]]
	 ;.ljo87esrdfgchvn m,waswdefrgthjkl;sdfghm, y);
	 canvas.rotate(angle);
	 canvas.scale(x,y);
	 canvas.textAlign="start"/ "end";*/
}

window.addEventListener("load",doFirst,false);