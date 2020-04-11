$.ajax({
url:window.server+"/announce/get",
data:{usrid:window.usrid,
token:window.token},
success:function(data,status){
if (status=200){$("#announcetext").text(data);$("#editannouncecontent").val(data);}}})

function postannouncechange(){
$('#postannouncechangebtn').attr("disabled",true);
$.post(
window.server+"/announce/update",
{usrid:window.usrid,
token:window.token,
newco:$("#editannouncecontent").val()
},
function (data){if(data=="True"){location.reload();}else{alert("失败");}}
);
}
