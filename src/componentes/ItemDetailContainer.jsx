import { useEffect, useState } from "react";
import ItemDetail from "../componentes/ItemDetail";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const [notExist, setNotExist] = useState(null);
  const { id } = useParams();
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetalle({ id: res.id, ...res.data() });
        } else {
          setNotExist(true);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setCargando(false));
  }, [id]);
  if (notExist) {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column m-5">
        <h2 className="text-center m-5">El producto que buscas no existe</h2>
        <Link to="/" className="btn btn-primary">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return <>{cargando ? <Loader /> : <ItemDetail detalle={detalle} />}</>;
};

export default ItemDetailContainer;
