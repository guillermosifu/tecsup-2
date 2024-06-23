import { useState } from "react";

export default function Formulario() {
  const [data, setData] = useState({
    nombres: "Sebastian",
    apellidos: "",
    nacimiento: "",
    pais: "",
    edad: "27",
  });

  const handleChange = (event) => {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const enviarData = (event) => {
    event.preventDefault();

    alert("Enviado!" + JSON.stringify(data));
  };
  
  return (
    <form onSubmit={enviarData}>
      <label>
        <span>Nombres</span>
        <input
          type="text"
          name="nombres"
          value={data.nombres}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Apellidos</span>
        <input
          type="text"
          name="apellidos"
          value={data.apellidos}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Edad</span>
        <input
          type="text"
          name="edad"
          value={data.edad}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>País</span>
        <input
          type="text"
          name="pais"
          value={data.pais}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Fecha de nacimiento</span>
        <input
          type="date"
          name="nacimiento"
          value={data.nacimiento}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}
