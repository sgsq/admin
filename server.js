window.server="http://localhost:5000"
window.ghuser="sgsq"
window.pubfilerepo="file"
window.postsrepo="posts"
window.posturlprefix="https://sgsq.github.io/posts/"
function timedelta(){
$.ajax({
url:window.server+"/time",
error:function(xhr){document.write("远端服务器未能返回值"+"<br />"+xhr.status + " " + xhr.statusText);},
data:{time:(Math.round(new Date().getTime()/1000))+""},
success:function(data){if(data=="False"){alert("请检查系统时间")}}
}
)
}
