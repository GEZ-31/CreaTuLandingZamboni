import React from "react";

const Contacto = () => {
  return (
    <>
      <div>
        <h1>Formulario de contacto</h1>
      </div>
      <div>
        <form>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="mensaje">Consulta:</label>
          <textarea id="mensaje" name="mensaje" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Contacto;
