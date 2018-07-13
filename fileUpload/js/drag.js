window.onload = function() {
    var div1 = document.getElementById("div1"),
        formData;
    
    // 进入
    div1.ondragenter = function() {
        this.innerHTML = "可以释放了";
        this.className = 'fade';
    }
    
    // 这个会频繁的被触发
    div1.ondragover = function(ev) {
        ev.preventDefault();
        console.log('over');
    }
    
    // 离开
    div1.ondragleave = function() {
        this.innerHTML = "将文件拖拽到此区域";
        this.className = '';
    }

    // 放置
    div1.ondrop = function(e) {
        e.preventDefault();
        this.innerHTML = "放置成功";
        this.className = '';

        // 【重点】.获取拖拽进来的文件！！
        var files = e.dataTransfer.files;
        console.log(files);         
        var ul1 = document.getElementById("ul1");

        // 创建formData
        formData = new FormData();
        $.each(files,function(key,file){
            // 新建FileReader对象 - 需要每个文件新建一个fileReader，否则就需要异步编程
            var fd = new FileReader();
        
            // 去掉后缀，留下文件名
            var name = file.name.replace(/[.][^.]*$/g,'');
            // var name = file.name;

            
            if (file.type.indexOf('image') != -1) {
                // 预览图片
                fd.readAsDataURL(file);
                fd.onload = function() {
                    var li1 = document.createElement("li");
                    var img1 = document.createElement("img");
                    img1.src = this.result;
                    li1.appendChild(img1);
                    ul1.appendChild(li1);
                    fd = null; // 释放当前fd对象
                }
                // 不考虑后缀的话，如果name相同，则会被替换掉
                formData.append(name, file); 
            } else { 

                console.log(name+"不是图片类型文件，请选择图片进行上传"); 
            }
        });
    }

    // 上传图片
    $('.submit').click(function(){
        if(!formData) return false;
        for (var key of formData.keys()) {
           console.log(key); 
        }
        // 上传图片
        $.ajax({
            url:'./fi.php',
            type:'POST',
            data: formData,
            cache: false, // 上传文件不需要缓存    
            success: function(data){
                console.log(JSON.parse(data));
                formData = null;
                message('上传成功！');
            },
            error: function (returndata) {  
                console.log(returndata);  
                message('上传失败！');
            },
            // 关键配置
            processData: false, // 因为data值是FormData对象,不需要对数据做处理
            contentType: false // 因为是FormData对象,所以这里设置为false
        });       
    })

    // 显示信息
    function message(msg){
        div1.innerHTML = msg;
        div1.className = 'fade';
        ul1.innerHTML = '';
        setTimeout(function(){
            div1.className = '';
        },1000)
    }
}