'use strict'
let imgArr = [];
for (let i=1;i<=15;i++){
	imgArr.push("./img/"+i+".png");
	$("body").append('<img class="imgInBody high" name='+ (i-1) +' src="./img/'+i+'.png">');
	$('img').corner("round");
}
for (let i=0;i<=imgArr.length-1;i++){
	$(".circleContein").append('<span class="circleElement" onclick="imgForNum()" name='+i+"></span>")
}
let numImg=0;
$(".imgInBody").on("click",function(){
	$("#modalWindow").css("display","block");
	numImg= +$(event.target).attr("name");
	appendImg(numImg);
});
function esc(){
	$("#modalWindow").css("display","none");
}
function appendImg(numImg){
	removeImg(numImg);
	$(".slideContein").append('<img class="slide" src='+imgArr[numImg]+'>');
	$('img').corner("round");
	$(".circleElement[name="+numImg+"]").css("background","#3e7ab8")
}
function removeImg(){
	$("img.slide").remove();
	$(".circleElement").css("background","#191919");
}
function el(numImg){
	if(numImg==-1) numImg=imgArr.length-1;
	if(numImg==15) numImg=0;
	return numImg;
}
function nextImg(){
	numImg += 1;
	numImg=el(numImg);
	appendImg(numImg);
}
function perImg(){
	numImg -= 1;
	numImg=el(numImg);
	appendImg(numImg);
}
function imgForNum(){
	numImg= +$(event.target).attr("name");
	appendImg(numImg);
}
document.onkeydown=(e)=>{
		console.log(e.key);
		switch (+e.keyCode){
			case 39: nextImg(); break;
			case 37: perImg(); break;
			case 27: esc(); break;
			}
	}
setInterval(nextImg,5000);