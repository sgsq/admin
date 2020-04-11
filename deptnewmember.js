$.get(
window.server+"/access",
{usrid:window.usrid,
token:window.token},
function(data){
tbdp=JSON.parse(JSON.parse(data)[3])
console.log(tbdp)
if (tbdp.length==0){$("#maincontent").html('<div class="callout callout-danger"><h5>你不是任何一个部门的部长</h5></div>');}
for (x in tbdp){getpendingjoinrequestsof(tbdp[x]);}
});

function getpendingjoinrequestsof(dept){
$.get(
window.server+"/department/getpendingbydept",
{usrid:window.usrid,
token:window.token,
dept:dept},
function(data){
tjr=JSON.parse(data);
var s = '<div class="card"><div class="card-header"><h3 class="card-title">'+dept+'</h3></div><div class="card-body table-responsive p-0" style="height: 300px;"><table class="table table-hover table-head-fixed text-nowrap"><thead><tr><th>账号</th><th>姓名</th><th>时间</th><th>操作</th></tr></thead><tbody>'
for (x in tjr){
s+='<tr><td>'+tjr[x][0]+'</td><td>'+tjr[x][1]+'</td><td>'+new Date(tjr[x][2]*1000)+'</td><td><button type="button" onclick="approvejoinrequest(this)" class="btn btn-default">同意</button> <button type="button" onclick="rejectjoinrequest(this)" class="btn btn-default">拒绝</button></td></tr>'
}
s+='</tbody></table></div></div>'
$("#maincontent").append(s)
});
}

function approvejoinrequest(o){
line=o.parentElement.parentElement;
ruid=line.firstElementChild.firstChild.data;
dept=line.parentElement.parentElement.parentElement.parentElement.firstChild.innerText;
$.get(window.server+"/department/approvelastjoinrequest",{usrid:window.usrid,token:window.token,dept:dept,nuid:ruid},function(data){if(data!='0'){alert(data);}});
line.hidden=true;
}
function rejectjoinrequest(o){
line=o.parentElement.parentElement;
ruid=line.firstElementChild.firstChild.data;
dept=line.parentElement.parentElement.parentElement.parentElement.firstChild.innerText;
$.get(window.server+"/department/rejectlastjoinrequest",{usrid:window.usrid,token:window.token,dept:dept,nuid:ruid},function(data){if(data!='0'){alert(data);}});
line.hidden=true;
}
