$.post(
window.server+"/logout",
{usrid:window.usrid,
token:window.token},
function(data,status){
docCookies.removeItem("usrid","/");
docCookies.removeItem("token","/");
docCookies.removeItem("expire","/");
document.write("已退出");
setTimeout("window.location.href='login.html'", 3000);
}
);
