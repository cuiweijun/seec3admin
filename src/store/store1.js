import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex) // 再vue应用中安装vuex
let store  = new Vuex.Store({
    state:{count:0}, //存放数据的
    mutations:{  // 存放用户提交的方法 => 业务
        // mutation 是唯一修改 state 的方法
        increment(state,payload){ // 修改 state 的业务函数 
            // 每个mutations 的第一个参数就是state本身
            //
            console.log(payload)
            state.count = state.count + payload
        },
        decrement(state,payload){
            console.log(payload)
            state.count = state.count - payload

        }
    },
    actions:{
        asyncincrement(context,payload){
            // 存放异步的 提交 mutation
            // 每个 action 的第一个参数是上下文对象 context 就是 store
            console.log(payload)
            setTimeout(function(){
                context.commit("increment",payload)
            },2000)
        }
    }
})
export default store