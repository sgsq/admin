//<!--span class="badge bg-success">3</span-->
//<!--span class="badge bg-primary">3</span-->
//<!--span class="badge bg-danger">3</span-->
//<!--span class="badge bg-info">3</span-->
$.get(
window.server+"/access",
{usrid:window.usrid,
token:window.token},
function(data){
console.log(data);
obj=JSON.parse(data);
var ug = new Array()
ug[0]=obj[1]
$("#pos").html(genaccesstags(ug));
$("#dept").html(genaccesstags(JSON.parse(obj[2])));
$("#buzhang").html(genaccesstags(JSON.parse(obj[3])));
}
)
function genaccesstags(o){
s=""
for (x in o){
s+=' <button type="button" class="btn btn-outline-primary">'+o[x]+'</button>'
//s+=' <span class="badge bg-primary">'+o[x]+'</span>'
//<button type="button" class="btn btn-block btn-outline-primary">Primary</button>
}
console.log(s);
return s
}
