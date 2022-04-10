import { Link } from 'react-router-dom'
import "./Item.css"

export const Item = ({ id, price, name, img, detalle, category }) => {
  return (
    <article key={id} className="card m-3" style={{ width: "18rem" }}>
      <img src={img} alt={name} variant="top" />
      <div className="card-body">
        <h3 className="card-title text-center">{name}</h3>
        <p className="card-text text-center">Detalle: {category} - {detalle}</p>
        <p className="card-text text-center">Precio: ${price}</p>
        <Link to={`/detail/${id}`} className="btn btn-dark">Más detalles...</Link>
      </div>
    </article>
  );
};