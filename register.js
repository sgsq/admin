$.ready(function(){
console.log("READY");
})

function sendcreation(){
$("#rb").hide();
$.get(
window.server+"/register",
{upi:$("#upi").val(),
key:window.location.search.substr(1)},
function(data){
o=JSON.parse(data)
$("#sif").html("<b>账号</b><br/>"+o[0]+"<br/><b>初始密码</b><br/>"+o[1]+"<br/>请截图或复制，并及时登陆并修改密码,需要使用火狐<br/><b>社长或技术部不会以任何理由问你要密码</b>");
}
)
}
