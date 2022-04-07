export const Product = {
    category: ({ categoryId }, args, { categories }) => {
        return categories.find(cat => cat.id === categoryId)
    }
}