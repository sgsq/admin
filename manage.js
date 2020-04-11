$().ready(
function(){
if(testifsz()==false){return false}
showdeptdet();
llink();
}
)

function testifsz(){
$.get(
window.server+"/access",
{usrid:window.usrid,
token:window.token},
function(data){
console.log(data);
obj=JSON.parse(data);
console.log(obj[1])
if (obj[1]=="社长"||obj[1]=="超级"){
return true
}
else{
$("#maincontent").html('<div class="callout callout-danger"><h5>你不是社长</h5></div>');
return false
}
}
);
}

function showdeptdet(){
$.get(
window.server+"/manage/depts",
{usrid:window.usrid,
token:window.token},
function(data){
console.log(data);
obj=JSON.parse(data);
console.log(obj);
for(x in obj){
console.log(obj[x]);
deptdet=(obj[x][0]+"<br/>部长"+obj[x][1]+"<br/>介绍:"+obj[x][3]+"<br/>成员:"+obj[x][4])+"<br/><br/>";
console.log(deptdet);
$("#deptdet").append(deptdet);
}
}
);
}

function cdept(){
$.post(
window.server+"/manage/cdept",
{usrid:window.usrid,
token:window.token,
dn:$("#cdn").val(),
dc:$("#cdc").val()
},
function(data){
if (data=="OK"){alert("OK");window.location.reload()}
}
)
}

function abz(){
$.get(
window.server+"/manage/abz",
{usrid:window.usrid,
token:window.token,
usr:$("#gbzt").val(),
dept:$("#gbzf").val()
},
function(data){
if (data=="OK"){alert("OK");window.location.reload()}
}
)
}

function dbz(){
$.get(
window.server+"/manage/dbz",
{usrid:window.usrid,
token:window.token,
usr:$("#uidd").val(),
dept:$("#deptd").val()
},
function(data){
if (data=="OK"){alert("OK");window.location.reload()}
}
)
}

function clink(o){
o.disabled=true
$.get(
window.server+"/manage/newkey",
{usrid:window.usrid,
token:window.token,
},
function(data,status){$("#cld").text("https://sgsq.github.io/admin/register?"+data)}
)

}

function llink(){
$.get(
window.server+"/manage/allnewkey",
{usrid:window.usrid,
token:window.token,
},
function(data,status){
s=""
o=JSON.parse(data)
for(x in o){
s+="<br/>https://sgsq.github.io/admin/register?"
s+=o[x][0]+"<br/>"
s+=new Date(o[x][1]*1000)+"<br/>"
}
$("#klt").html(s);
}
)
}

function dlink(){
$.get(
window.server+"/register/revoke",
{usrid:window.usrid,
token:window.token,
key:$("#ivc").val()
},
function(data){
alert(data)
}
)
}
