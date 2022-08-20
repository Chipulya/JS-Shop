class HTMLService {
    paintProduct (product) {
        return `
            <li data-id="${product.id}">
                <img src="${product.image}" title="${product.title}" />
                <small>${product.title}</small>
                <small><strong>$${product.price}</strong></small>
            </li>
        `
    }

    paintProducts(products = []) {
        return products.map(this.paintProduct).join('')
    }

    paintCartItem(item) {
        return `
            <li>
                (${item.amount})
                ${item.title}
                <strong>$${item.price}</strong>
            </li>
        `
    }
    paintCart({items, totalPrice}) {
        if(items.length === 0) {
            return `<p>Cart is empty</p>`
        }

        return `
            <ul class="cart-list">
                ${ items.map(this.paintCartItem).join('') }
            </ul>
            <hr />
            <p class="info">
                <span>Total price: <strong>$${totalPrice}</strong></span>
                <button class="clear">Clear</button>
            </p>
        `
    }
}