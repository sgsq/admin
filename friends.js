$(document).ready(function(){
listeverybody();
});
function listeverybody(){
$.get(
window.server+"/contact/all",
{usrid:window.usrid,
token:window.token},
function (data){
usrs=JSON.parse(data);
usrstbd=""
for(x in usrs){
    usrstbd+='<tr onclick="loadusrdetailfrom(this)"><td>'+usrs[x][0]+'</td><td>'+usrs[x][1]+'</td></tr>'
}
console.log(usrstbd);
$("#allusrhere").html(usrstbd);
}
)
}
function loadusrdetailfrom(o){
$.get(
window.server+"/contact/detail",
{usrid:window.usrid,
token:window.token,
usr:o.firstChild.firstChild.data},
function (data){
aud=JSON.parse(data)[0];
$("#maincontent").append('<!--Default box--><div class="card"><div class="card-header"><h3 class="card-title">'+aud[0]+' 的详细信息</h3><div class="card-tools"><button type="button"class="btn btn-tool"data-card-widget="collapse"data-toggle="tooltip"title="Collapse"><i class="fas fa-minus"></i></button><button type="button"class="btn btn-tool"data-card-widget="remove"data-toggle="tooltip"title="Remove"><i class="fas fa-times"></i></button></div></div><div class="card-body">姓名:'+aud[1]+'<br />生日:'+aud[2]+'<br />入学年份:'+aud[3]+'<br />班级:'+aud[4]+'<br />自我介绍:'+aud[5]+'<br />手机:'+aud[6]+'<br />家长手机:'+aud[7]+'<br />QQ:'+aud[8]+'<br />微信:'+aud[9]+'<br />入社年月:'+aud[10]+'<br />邮箱:'+aud[11]+'</div><!--/.card-body--><div class="card-footer">这个卡片可以关闭</div><!--/.card-footer--></div><!--/.card-->')
}
)
}
