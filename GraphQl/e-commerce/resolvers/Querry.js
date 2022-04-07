import { categories, products } from '../db.js'

export const Query = {

    products: (parent, args, { products }) => products,
    product: (parent, { id }, { products }) => {
        return products.find(product => product.id === id)
    },
    categories: (parent, args, { categories }) => categories,
    category: (parent, { id }, { categories }) => {
        return categories.find(cat => cat.id === id)
    }
}