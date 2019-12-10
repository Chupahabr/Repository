let arrNum=[32,13];
for (var i = 49; i <=90; i++) {
	arrNum.push(i);
}
function widthRandom(){
	return Math.floor(Math.random()*(document.body.clientWidth-100)+1);
}
function heightRandom(){
	return Math.floor(Math.random()*(document.body.clientHeight-100)+1);
}
function fontSizeRandom(){
	return Math.floor(Math.random()*100+10);
}
function colorRandom(){
	return "rgb("+Math.floor(Math.random()*255+1)+","+Math.floor(Math.random()*255+1)+","+Math.floor(Math.random()*255+1)+")"
}
function styleRandom(){
	// $("p.main").append(e.key);
	$("span:last").css({
		"left": widthRandom(),
		"top": heightRandom(),
		"fontSize": fontSizeRandom(),
		"color": colorRandom()
	}).animate({
		opacity: 0,
	},7000, function(){$(this).remove()});
}
document.onkeydown=(e)=>{
	console.log(+e.keyCode);
	if ( +e.keyCode == 37) setInterval(apocalipsis,50);
	if (arrNum.indexOf(e.keyCode) != -1){
		$("body").append("<span>"+ e.key +"</span>");
		styleRandom(e);
	}
	}
function apocalipsis(){
	$("body").append("<span>"+ String.fromCharCode(arrNum[Math.floor(Math.random()*arrNum.length+1)]) +"</span>");
	styleRandom();
}