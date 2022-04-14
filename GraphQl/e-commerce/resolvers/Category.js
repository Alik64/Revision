export const Category = {
    products: ({ id: categoryId }, { filter }, { products }) => {
        const categoryProducts = products.filter(prod => prod.categoryId === categoryId)
        let filteredCategoryProducts = categoryProducts

        if (filter) {
            if (filter.onSale) {
                filteredCategoryProducts = filteredCategoryProducts.filter(prod => { return prod.onSale })
            }
        }

        return filteredCategoryProducts



    }
}