function ResultDisplayer({ getNewResult }) {
  const [result, setResult] = useState();
  function handleClick() {
    setResult(getNewResult());
  }
  return (
    <div>
      <button id="button" onClick={handleClick}>
        Click
      </button>
      {result != null && <span id="result">{result}</span>}
    </div>
  );
}
