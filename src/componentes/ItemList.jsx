import Item from "../componentes/Item";

const ItemList = ({ data }) => {
  return (
    <div className="item_list">
      {data.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default ItemList;
