export default {

    AddCounter(state,payload){
        payload.count++
     },
     addTocart(state,payload){
         payload.checked=true
         state.cartList.push(payload)
     }
}