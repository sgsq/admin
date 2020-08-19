function checkfilesizeforupload(){
if($("#ffu")[0].files[0].size<=5242880)
{
    $("#fn").val($("#ffu")[0].files[0].name);
    clearupfilename();
    return true
}
else{
    $("#fn").val("");
return false
}
}

function sendfiletop(){
if (checkfilesizeforupload()){
$("#uftpb").attr("disabled",true);
var formData = new FormData()
formData.append('usrid', window.usrid);
formData.append('token', window.token);
formData.append('file',$("#ffu")[0].files[0]);

 $.ajax({
  url: window.server+"/file/upload",
  type: "POST",
  data: formData,
  processData: false,  // 不处理数据
  contentType: false,   // 不设置内容类型
  success:function(result){document.write("<br />"+result);setTimeout(function(){window.location.reload();},3000)}
  });



}else{
alert("FILE TOO LARGE");
}
}

function clearupfilename(){
    $("#fn").val($("#fn").val().replace(/[^\u0030-\u0039\u0041-\u005a\u0061-\u007a.-_]/g,""))}
