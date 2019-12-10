function time(){
	$(".clock").text(new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds());
	}
setInterval(time,0);