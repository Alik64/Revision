export const Product = {
    category: ({ categoryId }, args, { categories }) => {
        return categories.find(cat => cat.id === categoryId)
    },
    reviews: ({ id }, { filter }, { reviews }) => {
        const allReviews = reviews.filter(rev => rev.productId === id)
        let filteredReviews = allReviews
        if (filter) {
            if (filter.rating) {
                filteredReviews = filteredReviews.filter(review => review.rating <= filter.rating)
            }
        }
        return filteredReviews
    }
} 