import { useFormStatus } from "react-dom";

function DesignButton({ title }: { title: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {title}
    </button>
  );
}
function Nineteen() {
  return <DesignButton title="Submit" />;
}

export default Nineteen;
