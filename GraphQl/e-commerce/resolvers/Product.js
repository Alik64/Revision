import { categories, products } from './../db.js'


export const Product = {
    category: (parent, args, context) => {
        const { categoryId } = parent
        return categories.find(cat => cat.id === categoryId)
    }
}