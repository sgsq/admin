$().ready(function() {
    $("#changepass").validate();
});
$.validator.setDefaults({
  submitHandler: function() {postchangepass();}
});
function postchangepass(){
$.post(
window.server+"/changepassword",
{usrid:window.usrid,
token:window.token,
op:$("#op").val(),
np:$("#np").val()
},
function(data,status){alert("修改已经提交，请重新登陆");window.location.hash="logout"}
)
}
