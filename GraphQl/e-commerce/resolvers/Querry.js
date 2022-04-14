export const Query = {

    products: (parent, { filter }, { products }) => {
        let filteredProducts = products

        if (filter) {
            if (filter.onSale) {
                filteredProducts = filteredProducts.filter(prod => { return prod.onSale })
            }
        }

        return filteredProducts
    },


    product: (parent, { id }, { products }) => {
        return products.find(product => product.id === id)
    },
    categories: (parent, args, { categories }) => categories,
    category: (parent, { id }, { categories }) => {
        return categories.find(cat => cat.id === id)
    }
}