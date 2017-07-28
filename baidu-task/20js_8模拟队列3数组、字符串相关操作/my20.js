
//function textIn(){
//	var textStr = document.getElementById("textInput").value;
//	var arrWord = textStr.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/);
//	for (var i in arrWord) {
//		var div = document.createElement("div");
//		div.innerHTML = arrWord[i];
//		document.getElementById("container").appendChild(div);
//	}
//}
//document.getElementById("btn-insert").addEventListener("click",textIn);
//
//function search(){
//	var container = document.getElementById("container");
//	var searchStr = document.getElementById("searchInput").value;
//	for (var i=0; i<container.children.length; i++) {
//		if(container.children[i].innerHTML.match("searchStr")!=null){
//			
//			
//		}
//	}
//}
//document.getElementById("btn-search").addEventListener("click",search);


var $ = function(id){return document.getElementById(id);};

var arrData = [];

$("btn-insert").onclick = function(){
	var textStr = $("textInput").value.trim();
	var arrWord = textStr.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/);
	arrData = arrData.concat(arrWord);
	render();
};

$("btn-search").onclick = function(){
	var searchStr = $("searchInput").value.trim();
	render(searchStr);
};

function render(str){
	$("container").innerHTML = arrData.map(function(d){
		if((str!=null)&&(str.length > 0)){
			d = d.replace(str,"<span>"+str+"</span>");
		}
		return "<div>"+d+"</div>";
	}).join(" ");
}
