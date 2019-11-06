export default {

    AddCounter(state,payload){
        payload.count++
     },
     addTocart(state,payload){
         state.cartList.push(payload)
     }
}