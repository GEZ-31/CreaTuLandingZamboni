import React, { useEffect, useState } from "react";
import { getItem } from "../mocks/asyncMock";
import ItemDetail from "../componentes/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const { id } = useParams();
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    getItem(id)
      .then((res) => setDetalle(res))
      .catch((error) => console.log(error))
      .finally(() => setCargando(false));
  }, [id]);

  return <>
    {
    cargando ? <Loader /> : <ItemDetail detalle={detalle} />}</>;
};

export default ItemDetailContainer;
