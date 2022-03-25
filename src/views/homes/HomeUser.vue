<template>
    <div>
        <button @click="add(10)">增加</button>
        <button @click="jian(6)">减少</button>
        <p>{{this.$store.state.count}}</p>
    </div>
</template>
<script>
export default {
    name:"HomeUser",
    methods:{
        add(a){ // 用户行为
            // 提交修改 count 的业务函数 业务函数在 store 中
            // store.commit 提交业务函数
            // 不能直接修改 count
            // x this.$store.state.count = this.$store.state.count + 1
            this.$store.dispatch("asyncincrement",a)
            // dispatch 给 actions 提交方法
        },
        jian(b){
            this.$store.commit("decrement",b)
        }
    }
}
</script>
<style scoped>

</style>