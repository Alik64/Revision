import { categories, products } from './../db.js'

export const Category = {
    products: (parent, args, context) => {
        const { id } = parent
        return products.filter(prod => prod.categoryId === id)
    }
}