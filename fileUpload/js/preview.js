// 预览图片
function previewImg(input, imgObj) {
    var maxsize = 300 * 1024; //超过300k进行压缩
    // 是否支持 FileReader
    // FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据
    if (typeof FileReader === 'undefined') {
        alert("抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！");
        input.setAttribute('disabled', 'disabled');
    }
    if (input.files && input.files[0]) {
        var file = input.files[0],
            reader = new FileReader();
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
            alert('不是有效的图片文件!');
            return;
        }
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            var result = this.result; //获取到base64的图片
            //大于300k图片进行压缩
            if (result.length >= maxsize) {
                alert('超过限制大小！')
            } else {
                var img = new Image();
                img.src = result;
                $('body').append(img);
            }
        }
    }
}