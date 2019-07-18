<template>
    <div>
        <input type="file" accept="image/*" @change="handler" ref="ipt"/>
        <img :src="imgsrc" alt="上传的图片" v-if="imgsrc">
        <ul>
            <li v-for="(tel,index) in telList" :key="index">
                {{tel}}
            </li>
        </ul>
    </div>
</template>

<script>
import { TesseractWorker } from 'tesseract.js';
import ImgCompress from 'img-compress-tool';

const worker = new TesseractWorker();
export default {
    name: "OCR",
    data: function(){
        return {
            imgsrc: null,
            telList: []
        }
    },
    methods: {
        // handler: () => {
        //     console.log(this); // 为啥这里的上下文不指向 VueComonent？？而是指向一个奇奇葩葩的对象
        //     // 自己的写法有误, 如果用一个箭头函数, 则handler里面的上下文是 词法上下文
        // }
        handler() {
            let files = this.$refs.ipt.files;
            if(files && files.length){
                // let src = URL.createObjectURL(files[0]);
                // console.log(src);
                // this.imgsrc = src;
                // worker.recognize(src)
                // .progress((progress) => {
                //     console.log('progress', progress);
                // }).then(({text}) => {
                //     console.log(text);
                //     let reg = /\D+/g;
                //     let result = text.replace(reg,' ').match(/\d{11}/g);
                //     worker.terminate();
                //     this.telList = result;
                // });
                console.log(files[0]);

                // 图片压缩
                new ImgCompress(files[0], .2, 780).initCompress(data => {
                    let file = data.file // 压缩后的图片文件
                    console.log(file);
                    let baseUrl = data.baseUrl // 压缩后图片base64 url
                    this.imgsrc = baseUrl;

                    // 图像识别
                    worker.recognize(baseUrl)
                    .progress((progress) => {
                        console.log('progress', progress);
                    }).then(({text}) => {
                        console.log(text);
                        let reg = /\D+/g;
                        let result = text.replace(reg,' ').match(/\d{11}/g);
                        worker.terminate();
                        this.telList = result;
                    });
                })
            }
        }
    }
}
</script>
<style>
    li{
        color: #000;
    }
    img{
        max-width: 100%;
    }
</style>
