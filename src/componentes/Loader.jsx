import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center m-5 w-100 h-75 align-items-center">
      <Spinner
        className="spinner-border text-bg-primary"
        role="status"
      ></Spinner>
      <span className="fs-5 m-2">Cargando...</span>
    </div>
  );
};

export default Loader;
