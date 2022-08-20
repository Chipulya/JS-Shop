class ProductService {
    constructor(products = []) {
        this.products = products
    }

    filterBy(search = '') {
        if (!search.trim()) return this.products
    
        return this.products.filter(product => {
            return product.title.toLowerCase().includes(search.toLowerCase())
        })
    }

    get(index) {
        return this.products[index]
    }

    getById() {
        return this.products.find(product => {
            return product.id === id
        })
    }
}