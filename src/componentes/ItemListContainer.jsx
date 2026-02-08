import { useState, useEffect } from "react"
import { getProductos } from "../mocks/asyncMock"
import ItemList from "./ItemList"

const ItemListContainer =()=>{
    const [data, setData] = useState([])
    useEffect(() => {
        getProductos()
            .then((res) => setData(res))
            .catch((error) => console.log(error))
    }, [])
    return(
        <div>
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer