export default{
    addCart(context,payload){
       return new Promise((resolve,reject) =>{
              /* 新添加的商品 */

     /*    let oldProduct = null;

        for(let item of state.cartList){
            if(item.iid == payload.iid){
                oldProduct = item
            }

        } */
        /* 点击加入购物车后 把当前的商品iid 和 购物车已有的商品也就是cartList 里的商品iid 做判断 判断是否有一样的 一样的话直接数量加一就可以了  可以 用数组中的find函数 有的话则返回该对象 */
        let oldProduct = context.state.cartList.find( item  =>  item.iid == payload.iid);

        /* 判断oldProduct 如果有这个对象 则在原来的基础上加一就可以 无需添加新的对象到集合里面去 */
        if(oldProduct){
            context.commit("AddCounter",oldProduct)
            resolve('当前的商品数量+1')
        }else{
            /* 如果没有这个对象 则添加到集合中去  */
            payload.count = 1;
        /*     context.state.cartList.push(payload); */
            context.commit("addTocart",payload)
            resolve("添加新的商品")
        }

       })
    }
}