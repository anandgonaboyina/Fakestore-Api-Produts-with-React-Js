import { useEffect, useState } from "react";
import { ProductCard } from "./productCard";
import { wait } from "@testing-library/user-event/dist/utils";
import "./App.css"
function App(){
  let [products, updateProducts] = useState([])
  useEffect(
    ()=>{
          getProducts()
    }, []
  )
  async function getProducts() {
    let res = await fetch('https://fakestoreapi.com/products')
    // console.log(products)
    products = await res.json()
    console.log(products)
    updateProducts(products)

  }
  if(products.length==0)
    return(<h1>Fetching Data...</h1>)
  return(
    <div className="container">
{
     products.map((product)=>{
    return (
    <ProductCard {...product} key={product.id}></ProductCard>)
   })
}
    </div>
  )
}
export default App