
var container = document.getElementById("container");

//左侧入
function leftIn(){
	var num = parseInt(document.getElementById("num-input").value);
	if(isNaN(num)){
		alert("请输入数字！");
		document.getElementById("num-input").value=null;
	}else if((num<10)||(num>=100)){
		alert("请输入10到100之间的数字！")
		document.getElementById("num-input").value=null;
	}else if(container.children.length>60){
		alert("添加元素已超过60个，请停止添加！");
		document.getElementById("num-input").value=null;
	}else{
		var div = document.createElement("div");
		div.style.height = num+"px";
		container.insertBefore(div,container.firstChild);
		document.getElementById("num-input").value=null;
		document.getElementById("num-input").focus();
	}
}

//右侧入
function rightIn(){
	var num = parseInt(document.getElementById("num-input").value);
	if(isNaN(num)){
		alert("请输入数字！");
		document.getElementById("num-input").value=null;
	}else if((num<10)||(num>=100)){
		alert("请输入10到100之间的数字！")
		document.getElementById("num-input").value=null;
	}else if(container.children.length>60){
		alert("添加元素已超过60个，请停止添加！");
		document.getElementById("num-input").value=null;
	}else{
		var div = document.createElement("div");
		div.style.height = num+"px";
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

//左侧出
function leftOut(){container.removeChild(container.firstChild);}
//右侧出
function rightOut(){container.removeChild(container.lastChild);}

document.getElementById("left-out").addEventListener("click",leftOut);
document.getElementById("right-out").addEventListener("click",rightOut);

//删除点击的div
function delect(event){
	container.removeChild(event.target);
}

document.getElementById("container").addEventListener("click",delect);

//排序功能
function sortAB (array) {
	for (var i = 0; i < array.length; i++){
		for (var j = 0; j < array.length - i; j++){
			if (array[j] > array[j + 1]){
				var temp = array[j + 1];
				array[j + 1] = array[j];
				array[j] = temp;
			}
		}
	}
	return array;
}
function sortArr(){
	var arr = [];
	for(var i=0;i<container.children.length;i++){
		var num = parseInt(container.children[i].style.height);
		arr[i] = num;
	}
	sortAB(arr);
	for (var i=0;i<container.children.length;i++) {
		container.children[i].style.height = arr[i]+"px";
	}
}
document.getElementById("btn-sort").addEventListener("click",sortArr)

//恢复

