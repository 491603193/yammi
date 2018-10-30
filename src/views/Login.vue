<template>
    <div>
        <h3>登陆</h3>
        <input value="aaa"/> <br/>
        <input value="aaa"/> <br/>
        <button @click="login">登陆</button>
    </div>
</template>

<script>
    import {getLocalStorage, setLocalStorage} from  '../common/utils/Location.js'
    export default {
        name: "login",
        methods:{
            login() {
                console.log(getLocalStorage('isLogin'));
                setLocalStorage('isLogin',true);
                this.$router.push({name:'index'});
            }
        }
    }
</script>

<style scoped>

</style>