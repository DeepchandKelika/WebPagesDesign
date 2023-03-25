alert("Welcome");
window.onload=function()
{
	var pos=0;
	var i=1;
var box= document.getElementById('box');
var t=setInterval(move,10);
function move()
{
if(pos>=150 && i==1){
	i=-1;
}
else if(pos<=0){
	i=1;
}
pos+=i*1;
box.style.left=pos+"px";
}
}

