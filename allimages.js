$(document).ready(function(){
getallimages();
});
function getallimages(){
    $.get(
window.server+"/img/all",
{usrid:window.usrid,
token:window.token},
function(data){
imgs=JSON.parse(data);
showimgih=""
delimgih=""
for (x in imgs){
console.log(imgs[x][0]);
console.log(imgs[x][1]);
console.log(imgs[x][2]);
showimgih+='<tr><td><img src="'+imgs[x][2]+'" width="128" ></td><td>'+imgs[x][0]+'</td><td>!['+imgs[x][1]+']('+imgs[x][2]+')</td><td>'+imgs[x][2]+'</td><td>'+imgs[x][1]+'</td></tr>'
delimgih+='<tr><td>'+imgs[x][0]+'</td><td><button type="button" onclick="handledelimg(this)" class="btn btn-block btn-danger">删除</button><td></tr>'
}
console.log(showimgih)
console.log(delimgih)
$("#showimg").html(showimgih);
$("#delimg").html(delimgih);
}
);

}

function handledelimg(o){
o.disabled=true
console.log(o.parentNode.parentElement.firstChild.firstChild)
$.get(
window.server+"/img/del",
{usrid:window.usrid,
token:window.token,
imgname:o.parentNode.parentElement.firstChild.firstChild.data
},
function(data){
alert(data);
}
)
}
