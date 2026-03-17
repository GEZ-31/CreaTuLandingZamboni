import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Contacto = () => {
  const toastFC = (e) => {
    e.preventDefault();
    toast.success("Consulta enviada con éxito");
  }
  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div className="m-auto d-flex justify-content-center align-items-center w-50">
        <h1>Formulario de contacto</h1>
      </div>
      <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
        <form className="d-flex flex-column m-5 gap-3 justify-content-center align-items-center" onSubmit={toastFC}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="mensaje">Consulta:</label>
          <textarea id="mensaje" name="mensaje" required></textarea>
          <button className="btn btn-primary" type="submit">
            Enviar consulta
          </button>
          <Link to="/" className="btn btn-success">
            Volver a home
          </Link>
        </form>
      </div>
    </>
  );
};

export default Contacto;
