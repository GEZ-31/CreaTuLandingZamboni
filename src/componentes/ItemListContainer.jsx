import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { db } from "../services/firebase";

const ItemListContainer = (props) => {
  const { mensaje } = props;
  const [data, setData] = useState([]);
  const { type } = useParams();
  const [cargando, setCargando] = useState(false);
  useEffect(() => {
    setCargando(true);
    const productsCollection = type
      ? query(collection(db, "productos"), where("category", "==", type))
      : collection(db, "productos");
    getDocs(productsCollection)
      .then((res) => {
        const list = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setData(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setCargando(false));
  }, [type]);

  return (
    <>
      {cargando ? (
        <Loader />
      ) : (
        <div>
          <h1
            className="mx-auto p-2"
            style={{ width: "fit-content", marginTop: "2rem" }}
          >
            {mensaje}
            {type && (
              <span style={{ textTransform: "capitalize" }}>{type}</span>
            )}
          </h1>
          <ItemList data={data} />
        </div>
      )}
    </>
  );
};
export default ItemListContainer;
