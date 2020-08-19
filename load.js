switchpage();
function load(title,filename){
$("#pagename").html(title);
$.ajax({
url:filename+".html",
success:function(data,status){
checkloginstatus();
if (status=200){
$("#maincontent").html(data);
}
}
}
)
}
function switchpage(){
checkloginstatus();
switch(window.location.hash) {
     case "":
        load("公告","announce");
        break;
     case "#changepassword":
        load("修改密码","changepassword");
        break;
     case "#logout":
        load("退出系统","logout");
        break;
     case "#usr":
        load("用户","usr");
        break;
     case "#usrdetail":
        load("完善信息","usrdetail");
        break;
     case "#department":
        load("所有部门","department");
        break;
     case "#deptnewmember":
        load("新成员","deptnewmember");
        break;
     case "#alldeptmembers":
        load("所有成员","alldeptmembers");
        break;
     case "#imgupload":
        load("上传图片","imgupload");
        break;
     case "#allimages":
        load("所有图片","allimages");
        break;
     case "#friends":
        load("通讯录","friends");
        break;
     case "#uploadfilestopublic":
        load("上传文件","uploadfilestopublic");
        break;
     case "#allpubfiles":
        load("所有文件","allpubfiles");
        break;
     case "#write":
        load("写文章","write");
        break;
     case "#allposts":
        load("所有文章","allposts");
        break;
     case "#manage":
        load("社长","manage");
        break;
     case "#qr":
        load("二维码 ","qr");
        break;
     case "#rnd":
        load("随机数","rnd");
        break;
     default:
        console.log(window.location.hash)
}
}
