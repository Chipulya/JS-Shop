class CartService {
    constructor() {
        this.cart = {}
    }
    add(product) {
        const key = product.id
        if (this.cart[key]) {
            this.cart[key].amount++
            return
        }
        this.cart[key] = {
            title: product.title,
            price: product.price,
            amount: 1
        }
    }
    removet(productId) {
        delete this.cart[productId]
    }
    clearC() {
        this.cart = {}
    }
    getInfo () {
        const items = Object.keys(this.cart).map(id => {
            // return {
            //     id: id,
            //     title: this.cart[id].title,
            //     amount: this.cart[id].amount,
            //     price: this.cart[id].price
            // }
            return {
                    id,
                    ...this.cart[id]
                }
        })
    
        const totalPrice = items.reduce((sum, item) => {
            return sum += item.amount * item.price
        }, 0)
    
        return {
            items, totalPrice
        }
    }
}