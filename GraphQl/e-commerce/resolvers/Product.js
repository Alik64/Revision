export const Product = {
    category: ({ categoryId }, args, { categories }) => {
        return categories.find(cat => cat.id === categoryId)
    },
    reviews: ({ id }, args, { reviews }) => {
        return reviews.filter(rev => rev.productId === id)
    }
}