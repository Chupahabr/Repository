'use strict'

// document.onkeydown=(e)=>{
// 		console.log(e.key);
// 		switch (+e.keyCode){
// 			case 39: nextImg(); break;
// 			case 37: perImg(); break;
// 			case 27: esc(); break;
// 			}
// 	}
// setInterval(nextImg,5000);
// $(".contein").hover(function(){
// 	$(this).animate(
// 		{
// 			backgroundColor: "#929292",
// 		},
// 		1000
// 		)
// 	});
// let i,j,k;
// let arr={
// 			"Главное": {},
// 			"Новости": {
//					"Все новости":[],
//					"Последние новости":[]
//					},
// 			"Каталог": {},
// 			"Сообщество":{
// 					"Форум": [
// 							"Форум обнавлений",
// 							"Форум обсуждений"
// 								],
// 					"Группы": [
// 								"Группа ВК",
// 								"Группа Facebook"
// 								]
// 					},
// 			"Помощь": {}
// 		};
// $("body").append('<ul class="menu flex gg high"></ul>');
// for (i in arr){
// 	$(".menu").append("<li class='contein'>"+ i +"</li>");
// 	for (j in arr[i]){
// 		$("li:last").append('<ul class="lvl2" style="display: none"></ul>');
// 		$("ul:last").append("<li>"+ j +"</li>");

// 		for (k in arr[i][j]){
// 			$("li:last").append('<ul class="lvl3" style="display: none"></ul>');
// 			$("ul:last").append("<li>"+ arr[i][j][k] +"</li>");
// 		}
// 	}
// }
function widthcContein(){
	$(".contein").css("width", $(".menu").width() / $(".contein").length -40);
}

setInterval(widthcContein,0);

$(".contein").hover(function(){$(".lvl2").css("display","block")},function(){$(".lvl2").css("display","none")});

$(".lvl2").hover(function(){$(".lvl3").css("display","block")},function(){$(".lvl3").css("display","none")});