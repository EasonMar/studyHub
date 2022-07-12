
// ajax上传图片

// 方案一：$.ajax的配置很生疏
// ajax file
function ajaxFile(){
    var formData = new FormData();

    // PS：
    // 从代码$('#file')[0].files[0]中可以看到一个<input type="file">标签能够单次上传多个文件，
    // 只需要在<input type="file">里添加multiple或multiple="multiple"属性。
    formData.append("userfile", $('[name=myfile]')[0].files[0]);
    $.ajax({
        url:'./fi.php',
        type:'POST',
        data: formData,
        cache: false, // 上传文件不需要缓存    
        success: function(data){
            console.log(JSON.parse(data));
        },
        error: function (returndata) {  
            console.log(returndata);  
        },
        // 关键配置
        processData: false, // 因为data值是FormData对象,不需要对数据做处理
        contentType: false // 因为是FormData对象,所以这里设置为false？
    });
}
$('.ajax').click(ajaxFile);

// 方案二 - 原生ajax
// var xhr;

// function UploadFile() {
//     var fileObj = document.getElementById("file").files[0];
//     var FileController = 'fi.php';
//     var form = new FormData();
//     form.append("myfile", fileObj);
//     createXMLHttpRequest();
//     xhr.onreadystatechange = handleStateChange;
//     xhr.open("post", FileController, true);
//     xhr.send(form);
// }
// function createXMLHttpRequest() {
//     if (window.ActiveXObject) {
//         xhr = new ActiveXObject("Microsoft.XMLHTTP");
//     } else if (window.XMLHttpRequest) {
//         xhr = new XMLHttpRequest();
//     }
//     console.log('init xhr');
//     createXMLHttpRequest = function(){}
// }
// function handleStateChange() {
//     if (xhr.readyState == 4) {
//         if (xhr.status == 200 || xhr.status == 0) {
//             var result = xhr.response;
//             console.log(JSON.parse(result));
//         }
//     }
// }