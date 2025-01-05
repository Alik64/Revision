import { useRouter } from "next/router";

function ProductDetail() {
  const { query } = useRouter();

  return <h1>Details about product {query.productId}</h1>;
}
export default ProductDetail;
