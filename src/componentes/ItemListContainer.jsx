import { useState, useEffect } from "react"
import { getProductos } from "../mocks/asyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer =(props)=>{
    const {mensaje}=props
    const [data, setData] = useState([])
    const {type} = useParams()
    useEffect(() => {
        getProductos()
            .then((res) => {
                if(type){
                    setData(res.filter((prod) => prod.category === type))
                } else {
                    setData(res)
                }
            })
            .catch((error) => console.log(error))
    }, [type])
    return(
        <div>
            <h1>{mensaje}{type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer