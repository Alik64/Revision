export default function Result({ getNewResult }) {
  const [result, setResult] = useState(null);

  function handleClick() {
    setResult(getNewResult());
  }
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {result != null && <span>{result}</span>}
    </div>
  );
}
