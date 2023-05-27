import { useRouter } from "next/router";
import React from "react";

const ProductReview = () => {
  const { query } = useRouter();
  console.log(query);
  return (
    <div>
      Review {query.reviewId} for Product {query.productId}
    </div>
  );
};

export default ProductReview;
