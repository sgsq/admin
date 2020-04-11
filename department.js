$(document).ready(function(){
    writealldept();
    showlastjoinrequest();
});
//$(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);
function writealldept(){
$.get(
window.server+"/department/all",
{usrid:window.usrid,
token:window.token},
function(data,status){
alldept = JSON.parse(data)
for (x in alldept){
console.log(alldept[x][0]);
console.log(alldept[x][1]);
$("#maincontent").append('<!--Default box--><div class="card"><div class="card-header"><h3 class="card-title">'+alldept[x][0]+'</h3></div><div class="card-body">'+alldept[x][1]+'</div><!--/.card-body--><div class="card-footer"><button type="button"class="btn btn-outline-primary"onclick="applytojoin(\''+alldept[x][0]+'\')">申请加入</button>&nbsp&nbsp<button type="button"class="btn btn-outline-danger"onclick="exitdept(\''+alldept[x][0]+'\')">退出部门</button></div><!--/.card-footer--></div><!--/.card-->');
}
}
);
}
function applytojoin(dept){
$.get(
window.server+"/department/join",
{usrid:window.usrid,
token:window.token,
dept:dept
},
function(data){document.write(data);setTimeout(function(){window.location.reload();},3000)}
);
document.write("<h2>正在处理请求</h2><br />")
}

function exitdept(dept){
$.get(
window.server+"/department/exit",
{usrid:window.usrid,
token:window.token,
dept:dept
},
function(data){document.write(data);setTimeout(function(){window.location.reload();},3000)}
);
document.write("<h2>正在处理请求</h2><br />")
}

function showlastjoinrequest(){
$.get(
window.server+"/department/fetchone",
{usrid:window.usrid,
token:window.token
},
function (data,status){
tdt=JSON.parse(data)[0]
$("#maincontent").prepend('<div class="callout callout-info"><h5>上一次申请状态</h5><p>部门 : '+tdt[1]+'<br />状态 : '+jretochi(tdt[2])+'<br />时间 : '+new Date(tdt[whichdatetoshowonrequest(tdt[2])]*1000)+'</p><button type="button" id="cancellastjoinrequest" class="btn btn-block btn-warning" disabled>取消待审核的申请</button></div>');
if (tdt[2]=='pending'){$('#cancellastjoinrequest').removeAttr("disabled");}
$("#cancellastjoinrequest").click(function(){
    
$.get(
window.server+"/department/cancellastrequest",
{usrid:window.usrid,
token:window.token},
function (data){
document.write(data);
setTimeout(function(){window.location.reload();},3000);
}
)
document.write("<h2>正在处理请求</h2>")
});
//console.log(tdt);
}
);
}

function whichdatetoshowonrequest(i2){
if (i2=="pending"){
return 3;
}
return 4;
}

function jretochi(ens){
    switch(ens)
{
case "pending":
    return "待审核"
    break;
case "approved":
    return "已通过"
    break;
case "rejected":
    return "已拒绝"
    break;
case "cancelled":
    return "已取消"
    break;
default:
    return "未知状态 : "+ens
    break;
}
}


