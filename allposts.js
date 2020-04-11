$().ready(
function(){getallposts();}
)

function getallposts(){
$.get(
window.server+"/posts/all",
{usrid:window.usrid,token:window.token},
function(data){genposts(JSON.parse(data));}
);
}

function genposts(d){
console.log(d);
s1=""
s2=""
for (x in d){
console.log(d[x]);
s1+='<tr><td>'+d[x][0]+'</td><td>'+d[x][1]+'</td><td>'+new Date(d[x][2]*1000)+'</td><td><i class="fab fa-qq" aria-hidden="true"></i> <i class="fab fa-weixin" aria-hidden="true"></i></td><td>'+window.posturlprefix+d[x][0]+'</td></tr>'
s2+='<tr><td>'+d[x][0]+'</td><td>'+d[x][1]+'</td><td>'+new Date(d[x][2]*1000)+'</td><td><button type="button" onclick="deletepost(this)" class="btn btn-block btn-danger">Danger</button></td></tr>'
}
$("#ptable").html(s1);
$("#postdel").html(s2)
}

function deletepost(o){
o.disabled="true"
$.get(
window.server+"/posts/delete",
{usrid:window.usrid,token:window.token,fn:o.parentElement.parentElement.firstChild.firstChild.data},
function(data){alert(data);}
)
}
