$().ready(function() {
    loaddetalicache();
    $("#usrdetail").validate();
});
$.validator.setDefaults({
  submitHandler: function() {postusrdetail();}
});
function loaddetalicache(){
$.get(window.server+"/detail/self",
{usrid:window.usrid,
token:window.token},
function(data){
console.log(data);
ud=JSON.parse(data)[0]
$("#cname").val(ud[1]);
$("#birth").val(ud[2]);
$("#grade").val(ud[3]);
$("#classid").val(ud[4]);
$("#intro").val(ud[5]);
$("#phone").val(ud[6]);
$("#parentphone").val(ud[7]);
$("#qq").val(ud[8]);
$("#wx").val(ud[9]);
$("#joinat").val(ud[10]);
$("#email").val(ud[11]);
$("#usrdetail").valid();
}
);
}
function gendetjson(){
var ud=new Array();
ud[0]=window.usrid
ud[1]=$("#cname").val();
ud[2]=$("#birth").val();
ud[3]=$("#grade").val();
ud[4]=$("#classid").val();
ud[5]=$("#intro").val();
ud[6]=$("#phone").val();
ud[7]=$("#parentphone").val();
ud[8]=$("#qq").val();
ud[9]=$("#wx").val();
ud[10]=$("#joinat").val();
ud[11]=$("#email").val();
return JSON.stringify(ud)
}
function postusrdetail(){
$.post(
window.server+"/detail/update",
{usrid:window.usrid,
token:window.token,
js:gendetjson()
},
function(data,status){
if (data=="Failed"){alert("失败");}
else{alert("成功");}
}
)
}
