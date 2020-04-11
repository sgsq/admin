$(document).ready(function(){showallpubfiles();});

function showallpubfiles(){
$.get(
window.server+"/file/all",
{usrid:window.usrid,
token:window.token},
function(data){processdata(JSON.parse(data));})
}

function processdata(d){
s1=""
s2=""
for(x in d){
s1+=('<tr><td>'+d[x][0]+'</td><td>'+d[x][1]+'</td><td>'+new Date(d[x][2]*1000)+'</td><td>'+'['+d[x][0]+']('+'https://raw.githubusercontent.com/'+window.ghuser+'/'+window.pubfilerepo+'/master/'+d[x][0]+')'+'</td><td>'+'https://raw.githubusercontent.com/'+window.ghuser+'/'+window.pubfilerepo+'/master/'+d[x][0]+'</td></tr>')
s2+=('<tr><td>'+d[x][0]+'</td><td>'+d[x][1]+'</td><td>'+new Date(d[x][2]*1000)+'</td><td><button type="button" onclick="deletepf(this)" class="btn btn-block btn-danger">Danger</button></td></tr>')
}
$("#apf").html(s1);
$("#dpf").html(s2);
}

function deletepf(but){
but.disabled=true
fn=but.parentElement.parentElement.firstChild.firstChild.data
console.log(fn)
document.write("Wait");
$.get(
window.server+"/file/delete",
{usrid:window.usrid,
token:window.token,fn:fn},
function(data){document.write("\n"+data);setTimeout(function(){window.location.reload();},3000);})
}
