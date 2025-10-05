import "./productCard.css"
export function ProductCard(product){
return(
    <div className="card">
    <img src={product.image} alt="" className="card-img-top" />
    <div className="card-body">
        <h6 className="card-title">{product.title}</h6>
         <p className="card-subtitle mb-2 text-body-secondary">{product.category}</p>
         <div className="card-text">
        <h5>Price : {product.price}&#8377;</h5>
        <h5 className="rating">Rating : {product.rating.rate}⭐</h5>
         </div>
    </div>
    </div>
)
}
