

export const Query = {

    products: (parent, { filter }, { products }) => {
        let filteredProducts = products

        if (filter) {
            const { onSale, avgRating } = filter
            if (onSale) {
                filteredProducts = filteredProducts.filter(prod => { return prod.onSale })
            }
            if ([1, 2, 3, 4, 5].includes(avgRating)) {
                filteredProducts = filteredProducts.filter(prod => {
                    let sumRating = 0;

                })
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