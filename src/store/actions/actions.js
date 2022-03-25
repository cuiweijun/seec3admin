let actions = {
    asyncincrement(context,payload){
        setTimeout(function(){
            context.commit("increment",payload)
        },2000)
    }
}

export default actions