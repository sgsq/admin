$(document).ready(function(){
checkloginstatus();
initpannel();
if(window.location.hash==""){showannounce();}
});

function checkloginstatus(){
if(docCookies.getItem("usrid")==null){
document.write("你没有登陆");
document.write("<h2>Please wait</h2>");
window.location.href="login.html"
}
if(parseFloat(docCookies.getItem("expire"))<(Math.round(new Date().getTime()/1000))){
document.write("登陆已过期");
document.write("<h2>Please wait</h2>");
window.location.href="login.html"
}
}
function initpannel(){
window.usrid=docCookies.getItem("usrid");
window.token=docCookies.getItem("token");
$("#usrid").text(window.usrid);
//$("#usrimg").attr("src","https://robohash.org/"+window.usrid+".png?set=set1&bgset=any&size=100x100");
}
function showannounce(){
load("公告","announce.html");
}
