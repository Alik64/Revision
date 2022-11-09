import { useRouter } from "next/router";
function Review() {
  const {
    query: { productId, reviewId },
  } = useRouter();

  return (
    <h1>
      Review {reviewId} for product {productId}{" "}
    </h1>
  );
}
export default Review;
