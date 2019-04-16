<template>
    <form action="">
        <p><input type="text" v-model="text_val" name="myText" placeholder="please input your first text"></p>
        <p><textarea name="myTextarea" id="myTextarea" cols="30" rows="5" v-model="textarea_val" placeholder="please input your second text(multi lined)"></textarea></p>
        <p><label for="a_check">选项A</label><input type="checkbox" id="a_check" v-model="a_checked"> <span>结果{{a_checked}}</span></p>
        <p><label for="b_check">选项B</label><input type="checkbox" id="b_check" v-model="b_checked"> <span>结果{{b_checked}}</span></p>
    </form>
</template>

<script>
export default {
    name: 'Form',
    data: function(){
        return {
            text_val: '',
            textarea_val: '',
            a_checked: false,
            b_checked: false
        }
    }
}
</script>

<style scoped>
form{
    width: 90%;
    margin: 0 auto;
    padding: 20px 0;
    background: blue;
    user-select: none;
    color: white;
}
span{
    margin-left: 10px;
}
</style>


