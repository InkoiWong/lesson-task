var $ = function(id){return document.getElementById(id);};

//Tag录入
var tagArr = [];
function addTag(){
	var tagName = $("tag").value.trim();
	var tagcon = $("tagcontainer");	
//	判断输入字符
	if(tagName.length==0||tagName.match(/[^0-9a-zA-Z\u4e00-\u9fa5]+/)){
		alert("请勿输入特殊字符！");
		return;
	}
//	去重复
	if((tagArr.length!=0)&&(tagArr.some(function(x){
			return x==tagName;
		}))){
		alert(tagName+"已存在！");
		return;
	}
//	创建div
	var div = document.createElement("div");
	div.innerHTML = tagName;
//	添加hover事件
	var spanStr = document.createTextNode("删除：");
	div.onmouseover = function(){
		div.insertBefore(spanStr,div.childNodes[0]);
		div.style.backgroundColor = "pink";
	};
	div.onmouseout = function(){
		div.removeChild(spanStr);
		div.style.backgroundColor = "lightblue";
	};
//	判断是否满10个Tag
	if(tagArr.length<10){
		tagcon.appendChild(div);
		tagArr.push(tagName);
	}else{
		tagcon.removeChild(tagcon.firstChild);
		tagcon.appendChild(div);
		tagArr.slice(1).push(tagName);
	}
}
//给input#tag添加事件
$("tag").onkeypress = function(event){
	if(event.keyCode==13){
		addTag();
		$("tag").value=null;
		$("tag").focus();
	}
}
//设置Tag删除事件
$("tagcontainer").onclick = function(event){
	$("tagcontainer").removeChild(event.target);
}

//兴趣爱好功能
function unique(arr) {//去重复函数
	var hash = {},result=[]; //hash表，result临时数组
	for(var i = 0; i < arr.length; i++) {//遍历当前数组
		if (!hash[arr[i]]) { //如果hash表中没有当前项
			hash[arr[i]] = true; //存入hash表
			result.push(arr[i]); //把当前数组的当前项push到临时数组里面
		}
	}
	return result;
}

var hobbyArr = [];
function addHobby(){
	var hobbyStr = $("hobby").value.trim();//取得文本框内容
	var arrAllStr = hobbyStr.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/);//拆分成字符串数组
	var arrStr = unique(arrAllStr);//去重复后的数组
	hobbyArr = hobbyArr.concat(arrStr.slice(arrStr.length-10));//取arrStr最后10个输送给hobbyArr
	hobbyArr = hobbyArr.slice(hobbyArr.length-10);//取hobbyArr最后10个输出
	$("hobbycontainer").innerHTML = hobbyArr.map(function(hobby){
		return "<div>"+hobby+"</div>";
	}).join(" ");
}
//设置button事件
$("addhobby").addEventListener("click",function(){
	addHobby();
	$("hobby").value=null;
	$("hobby").focus();
});

//设置Hobby删除事件
$("hobbycontainer").onclick = function(event){
	$("hobbycontainer").removeChild(event.target);
}






