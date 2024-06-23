import { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setContador(contador - 1)}>Restar</button>
      {contador}
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
}
