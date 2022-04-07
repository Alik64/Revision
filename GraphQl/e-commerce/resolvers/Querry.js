import { categories, products } from '../db.js'

export const Query = {
    hello: (parent, args, context) => { return ' Albert' },
    products: (parent, args, context) => { return products },
    product: (parent, args, context) => {
        const { id } = args
        return products.find(product => product.id === id)

    },
    categories: (parent, args, context) => categories,
    category: (parent, args, context) => {
        const { id } = args
        return categories.find(cat => cat.id === id)
    }
}