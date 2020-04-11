function handleimageupload(o){
    //console.log(o);
    var img = document.createElement("img");
    img.file = o
    img.src = URL.createObjectURL(o);
    img.width=128
    img.id="uploadimgprev"
    img.onload = function() {loadupimgdetail();}
    $("#prev").html("");
    $("#prev").append(img);
    //console.log(o.name)
    $("#fn").val(o.name.split(".")[0])
    clearupimagename();
    window.imgsize=bytetoreadable(o.size)
    setTimeout(drawimgthumbnailforupload,300)
    }
function loadupimgdetail(){
    $("#imginfo").html("");
    $("#imginfo").append("<b>Width</b>:"+$("#uploadimgprev")[0].naturalWidth);
    $("#imginfo").append("<br /><b>Height</b>:"+$("#uploadimgprev")[0].naturalHeight);
    $("#imginfo").append("<br /><b>Size</b>:"+window.imgsize);
    preparecanvas();
    drawoncanvastocompressforupload();
    
}
function clearupimagename(){
    $("#fn").val($("#fn").val().replace(/[^\u0030-\u0039\u0041-\u005a\u0061-\u007a]/g,""))
}
function clearupimagealt(){
    $("#ialt").val($("#ialt").val().replace(/[^\u0030-\u0039\u0041-\u005a\u0061-\u007a\u4e00-\u9fa5]/g,""))
}

function preparecanvas(){
    var cvscp = document.createElement("canvas");
    cvscp.id="cvscp"
    cvscp.style.display="none"
    if ($("#uploadimgprev")[0].naturalWidth>1280){
    cvscp.width=1280
    cvscp.height=($("#uploadimgprev")[0].naturalHeight)/($("#uploadimgprev")[0].naturalWidth)*1280
}
    else{
    cvscp.width=$("#uploadimgprev")[0].naturalWidth
    cvscp.height=$("#uploadimgprev")[0].naturalHeight
}
$("#imgprocess").html("")
$("#imgprocess").append(cvscp)
}

function drawoncanvastocompressforupload(){
$("#cvscp")[0].getContext("2d").drawImage($("#uploadimgprev")[0],0,0,$("#cvscp")[0].width,$("#cvscp")[0].height)
}

function drawimgthumbnailforupload(){
    $("#imgprocessed").html("")
    $("#cvscp")[0].toBlob(
        function (blob) {
            var newImg = document.createElement("img"),
            url = URL.createObjectURL(blob);
            window.rsz=blob.size;
            newImg.src = url;
            newImg.width=128
            $("#imgprocessed").append(newImg);
}
)
}

function checkupimg(){
    clearupimagename();
    clearupimagealt();
    $("#upimgname").text($("#fn").val());
    $("#upimgsize").text(bytetoreadable(window.rsz));
    $("#upimgwh").text($("#cvscp")[0].width+"x"+$("#cvscp")[0].height);
    $("#alttext").text($("#ialt").val());
    console.log($("#alttext").text().length);
    if ($("#alttext").text().length>=5 && $("#uploadimgprev").length){$("#upimgb").attr("disabled",false);return true;}else{$("#upimgb").attr("disabled",true);return false;}
}

function sendupimg(){
    if (checkupimg()==false){return false;}
    var formData = new FormData();
    formData.append("usrid",window.usrid);
    formData.append("token",window.token);
    formData.append("alt",$("#alttext").text())
    $("#cvscp")[0].toBlob(
        function(blob){
            formData.append("img", blob, $("#upimgname").text()+".png");
            document.write("正在处理")
            $.ajax({
  url: window.server+"/img/upload",
  type: "POST",
  data: formData,
  processData: false,  // 不处理数据
  contentType: false,   // 不设置内容类型
  success:function(result){document.write("<br />"+result);setTimeout(function(){window.location.reload();},3000)}
  });

}
)
    
}
