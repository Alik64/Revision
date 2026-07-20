import { html } from 'htm/preact';
import { useState } from 'preact/hooks';

function Tuto() {
  const [count, setCount] = useState(0);
  const maybeBig = Math.random() > 0.5 ? 'big' : 'small';

  return html`
    <div class="tuto-page">
      <h1>Tutorial HTM + Preact</h1>
      <p class=${maybeBig}>Hello ${40 + 2}!</p>
      <p>Count: ${count}</p>
      <button onClick=${() => setCount(count + 1)}>Increment</button>
    </div>
  `;
}

export default Tuto;