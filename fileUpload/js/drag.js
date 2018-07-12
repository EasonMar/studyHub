window.onload = function() {
    var div1 = document.getElementById("div1");
    
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
        
        var ul1 = document.getElementById("ul1");

        $.each(files,function(key,file){
            // 新建FileReader对象 - 需要每个文件新建一个fileReader，否则就需要异步编程
            var fd = new FileReader();
            if (file.type.indexOf('image') != -1) {
           
                fd.readAsDataURL(file);
               
                fd.onload = function() {
                    var li1 = document.createElement("li");
                    var img1 = document.createElement("img");
                    img1.src = this.result;
                    li1.appendChild(img1);
                    ul1.appendChild(li1);
                    fd = null; // 释放当前fd对象
                }
            } else { 
                alert("请选择图片上传"); 
            }
        })        
    }
}