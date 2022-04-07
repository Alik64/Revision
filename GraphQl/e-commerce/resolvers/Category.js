

export const Category = {
    products: ({ id: categoryId }, args, { products }) => {
        return products.filter(prod => prod.categoryId === categoryId)
    }
}