'use strict'

// document.onkeydown=(e)=>{
// 		switch (+e.keyCode){
// 			case 39: left+=10; break;
// 			case 40: up+=10; break;
// 			case 37: left-=10; break;
// 			case 38: up-=10; break;
// 			}
// 	}

$(".front").corner("round");
$(".back").corner("round");
let up=545 ,left=150;

setInterval(positionHero,0);
function positionHero(){
	$(".hero").css({
		"top":up ,
		"left":left ,
	})
}

let keys = [];
// counter=0;

// function counterOne(){
// 	counter=1;
// 	setTimeout(counterZero, 10);
// }
// function counterZero(){
// 	counter=0;
// }

function leftAtt(){
	$(".hero").css({ "transform": "scale(-1, 1)" });
	if($(".ball").length==0){
		$("body").append("<img class='z3 abs ball leftball' src='./img/ball.png'>");
		$(".leftball").css({
			"top":up+20 ,
			"left":left-40 ,
		}).animate({
			opacity: 0.5,
			"left":left-400 ,
			"top":up ,
		},1000, function(){$(this).remove()});
	}
}
function rightAtt(){
	$(".hero").css({ "transform": "scale(1, 1)" });
	if($(".ball").length==0){
		$("body").append("<img class='z3 abs ball rightball' src='./img/ball.png'>");
		$(".rightball").css({
			"top":up+20 ,
			"left":left+65 ,
		}).animate({
			opacity: 0.5,
			"left":left+400 ,
			"top":up ,

		},1000, function(){$(this).remove()});
	}
}
$(document).keyup(function(e){
	keys.splice(keys.indexOf(e.which),1);
	// console.log(keys);
});

setInterval(key,0);
function key(){
	if(keys.length!=0) {
		for(let i of keys){
			// console.log(i)
			switch (i){
	 			case 39: left+=1; rightAtt(); break;
	 			case 40: up+=1; break;
	 			case 37: left-=1; leftAtt(); break;
	 			case 38: up-=1; break;
	 			}
		}
	}
}
$(document).keydown(function(e){
	let code = e.which;
	if (keys.indexOf(code)<0){
		keys.push(code);
		}
	// console.log(keys);
	switch(+e.keyCode){
		case 37: leftAtt(); break;
		case 39: rightAtt(); break;
	}
});
