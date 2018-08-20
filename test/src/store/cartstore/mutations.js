

const mutations = {
    addCart(state, data) {
        // console.log(data)
        state.cartData = data.cartData
    },
    setgooddata(state, data) {
        console.log(data)

        state.goodsdata = data.info
    },
}

export default mutations