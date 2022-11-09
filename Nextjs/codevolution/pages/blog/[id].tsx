import { useRouter } from "next/router";

function BlogDetail() {
  const {
    query: { id },
  } = useRouter();

  console.log(id);

  return <h1>Article N°: {id}</h1>;
}
export default BlogDetail;
