import { useRouter } from "next/router";

function Doc() {
  const router = useRouter();

  const { params = [] } = router.query;

  if (params.length === 2) {
    return (
      <h1>
        Vieving docs for <em>{params[0]}</em> and <em>{params[1]}</em>
      </h1>
    );
  } else if (params.length === 1) {
    return (
      <h1>
        Vieving docs for <em>{params[0]}</em>
      </h1>
    );
  }
  return <h1>Docs Homepage</h1>;
}

export default Doc;
