export default{
cartListlength(state){
 return state.cartList.length
},

getCartList(state){

    return state.cartList
},

priceSum(state){
    let price = 0;
    for(let item of state.cartList){
     price += 1
     return price;
    }
}

}