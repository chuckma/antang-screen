var l=400;
var t=350;
var a=1;
var pi = 3.14;//pi
$(document).ready(function(){
	
	window.setInterval("ball_go()",5);
})



function ball_go(){
	
	var i= document.getElementById("ball");
	var change =parseInt(sport_line(l-a));
	i.style.transform = 'rotate('+a*10+'deg)';
	console.log(t);
	if(a<=280){
	i.style.left = (l-a)+"px";
	i.style.top  = (change)+"px";
	}
	a++;
}

//运动曲线
function sport_line(x){
	var y;
	y= 115-Math.sin((x-100)/200*pi)*235;

	return y;
}