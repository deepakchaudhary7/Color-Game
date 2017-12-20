var no=6;
var color=generateRandomColors(6);

var square=document.querySelectorAll(".square");

var v=document.querySelector(".code");
var pickedColor=pickcolor();

v.textContent=pickedColor

var easy=document.querySelector("#easyBtn");
var hard=document.querySelector("#hardBtn");
var result=document.querySelector("#result");
easy.addEventListener("click",function(){
	document.querySelector("h1").style.background="steelblue";
	hard.classList.remove("mode");
	easy.classList.add("mode");
	no=3;
	color=generateRandomColors(no);
	pickedColor=pickcolor();
	v.textContent=pickedColor
	for(var i=0;i<square.length;i++){
		if(color[i]){
			square[i].style.background=color[i];
		}
		else{
			square[i].style.background="none";
		}
	}
	result.textContent=" ";
});

hard.addEventListener("click",function(){ 
    document.querySelector("h1").style.background="steelblue";
    easy.classList.remove("mode");
    hard.classList.add("mode");
    no=6;
 	color=generateRandomColors(no);
	pickedColor=pickcolor();
	v.textContent=pickedColor
	for(var i=0;i<square.length;i++){
			square[i].style.background=color[i];
			//square[i].style.background="block";
	}
	result.textContent=" ";
});

var resetButton=document.getElementById("reset");
resetButton.addEventListener("click",function(){
    color=generateRandomColors(no); //dont declare the new variable here otherwise varible scope reduces to local 
    pickedColor=pickcolor();
    v.textContent=pickedColor;
    for(var i=0;i<color.length;i++){
    	square[i].style.background=color[i];
    }
    document.querySelector("h1").style.background="steelblue";
    result.textContent="";
    resetButton.textContent="NEW COLOR";
 });
v.textContent=pickedColor;
for(var i=0;i<color.length;i++){

	square[i].style.background=color[i];
	square[i].addEventListener("click",function(){ //adding click event to each squares
		var c=this.style.background;
		console.log(c,pickedColor);
		if(c===pickedColor){
			changeColors(c);
			document.querySelector("h1").style.background=c;
			result.textContent="WON";
			resetButton.textContent="PLAY AGAIN";
		}
		else{
			this.style.background="#232323";
			// alert("incorrect");
		}
	});
}

function changeColors(col){
	for(var i=0;i<color.length;i++){
		square[i].style.background=col;
	}
	document.querySelector("h1").style.background=col;
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr[i]=randomColor(); 
	}
	return(arr);
}

function randomColor(){
	var b=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var r=Math.floor(Math.random()*256);
	return("rgb("+r+", "+g+", "+b+")");
}

function pickcolor(){
	var i=Math.floor(Math.random()*color.length);
	return(color[i]);
}
