function limitmdsize(){
if ($("#mdfile")[0].files[0].size<=5242880){
    $("#fn").val($("#mdfile")[0].files[0].name);
    return true
}
else{
    $("#fn").val("");
    return false
}
}

function sendmd(){
clearmdname();
if (limitmdsize()){

var formData = new FormData()
formData.append('usrid', window.usrid);
formData.append('token', window.token);
formData.append('md',$("#mdfile")[0].files[0]);

 $.ajax({
  url: window.server+"/posts/new",
  type: "POST",
  data: formData,
  processData: false,  // 不处理数据
  contentType: false,   // 不设置内容类型
  success:function(result){document.write("<br />"+result);setTimeout(function(){window.location.reload();},3000)}
  });

}
else {
document.write("文件太大")
}
}
function clearmdname(){
    
    $("#fn").val($("#fn").val().replace(/[^\u0030-\u0039\u0041-\u005a\u0061-\u007a.-_]/g,""))}
