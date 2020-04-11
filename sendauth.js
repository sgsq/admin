function sendauth(){
usrid=$("input#usrid")[0].value;
uskey=$("input#key")[0].value;
server=window.server
$.post(
server+"/login",
{
usrid:usrid,
uskey:uskey
},
    function(data,status){
    if(data=="Failed"){alert("Failed");}
    else{
    docCookies.setItem("usrid",usrid,"/");
    docCookies.setItem("token",data,"/");
    docCookies.setItem("expire",(Math.round(new Date().getTime()/1000)+3600)+"","/");
    window.location.href="index.html"
    }
    }
);
}

