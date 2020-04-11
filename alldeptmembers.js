$.get(
window.server+"/access",
{usrid:window.usrid,
token:window.token},
function(data){
tbdp=JSON.parse(JSON.parse(data)[3])
//console.log(tbdp)
if (tbdp.length==0){$("#maincontent").html('<div class="callout callout-danger"><h5>你不是任何一个部门的部长</h5></div>');}
for (x in tbdp){showdeptmembers(tbdp[x]);}
});

function showdeptmembers(dept){
$.get(
window.server+"/department/allmembers",
{usrid:window.usrid,token:window.token,dept:dept},
function(data){
names=JSON.parse(data);
tht='<div class="card"><div class="card-header"><h3 class="card-title">'+dept+'</h3></div><!--/.card-header--><div class="card-body table-responsive p-0"style="height: 300px;"><table class="table table-hover table-head-fixed text-nowrap"><thead><tr><th>账号</th><th>姓名</th><th>操作</th></tr></thead><tbody>'
for (x in names){
tht+='<tr><td>'+names[x][0]+'</td><td>'+names[x][1]+'</td><td><button onclick="removeusrfromdeptbutton(this)" type="button" class="btn btn-block bg-gradient-danger">移出部门</button></td></tr>'
}
tht+='</tbody></table></div><!--/.card-body--></div>'
console.log(tht);
$("#maincontent").append(tht);
}
);}

function removeusrfromdeptbutton(o){
line=o.parentNode.parentNode
uuid=line.firstChild.innerText
dept=line.parentNode.parentNode.parentNode.parentNode.firstChild.firstChild.innerText
$.get(
window.server+"/department/removeusrfromdept",
{usrid:window.usrid,
token:window.token,
uuid:uuid,
dept:dept},
function(data){if (data!="0"){alert(data);}}
);
line.hidden=true
}
