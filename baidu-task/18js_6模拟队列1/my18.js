
var container = document.getElementById("container");


function leftIn(){
	var num = parseInt(document.getElementById("num-input").value);
	if(isNaN(num)){
		alert("请输入数字！");
		document.getElementById("num-input").value=null;
		document.getElementById("num-input").focus();
	}else{
		var div = document.createElement("div");
		div.innerHTML = num;
		container.insertBefore(div,container.firstChild);
		document.getElementById("num-input").value=null;
		document.getElementById("num-input").focus();
	}
}

function rightIn(){
	var num = parseInt(document.getElementById("num-input").value);
	if(isNaN(num)){
		alert("请输入数字！");
		document.getElementById("num-input").value=null;
		document.getElementById("num-input").focus();
	}else{
		var div = document.createElement("div");
		div.innerHTML = num;
		container.appendChild(div);
		document.getElementById("num-input").value=null;
		document.getElementById("num-input").focus();
	}
}

document.getElementById("num-input").addEventListener("keypress",function(event){
	if(event.keyCode==13){
		leftIn();
	}
})
document.getElementById("left-in").addEventListener("click",leftIn);
document.getElementById("right-in").addEventListener("click",rightIn);

function leftOut(){
	container.removeChild(container.firstChild);
}
function rightOut(){
	container.removeChild(container.lastChild);
}

document.getElementById("left-out").addEventListener("click",leftOut);
document.getElementById("right-out").addEventListener("click",rightOut);

function delect(event){
	container.removeChild(event.target);
}

document.getElementById("container").addEventListener("click",delect);
