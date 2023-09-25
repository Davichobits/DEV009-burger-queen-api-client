import { useEffect, useState } from "react"
import { useLocalStorage } from '../custom-hooks/useLocalStorage';

export const Ordering = () => {

  const [products, setProducts] = useState([])
  const {token}  = useLocalStorage('token')

  const allProductsTypes = products.map((product: interfaceProduct) => product.type)
  const productsTypes = [...new Set(allProductsTypes)]
  
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    };

    fetch("http://localhost:8080/products", options)
      .then((res: Response) => res.json())
      .then((data) => {
        setProducts(data)
      })
      .catch((err) => console.log(err));
  }, []);

  interface interfaceProduct {
    id: number;
    name: string;
    image: string;
    price: number;
  }
  return (
    <>
    <h1 className="text-center text-2xl font-bold my-4">Tomar pedido</h1>
    <div className="flex justify-center gap-16">
      {
        productsTypes.map((type: string) => (
          <button key={type} className="border border-gray-200 max-w-[500px] rounded-lg mb-4 p-3 cursor-pointer hover:bg-gray-200">
            {type}
          </button>
        ))
      }  
    </div>
    
    {
      products.map((product: interfaceProduct) => (
        <div key={product.id} className="border border-gray-200 max-w-[500px] rounded-lg mb-4 mx-auto p-3 flex justify-between items-center cursor-pointer hover:bg-gray-200">
          <div className="w-16">
            <img className="w-full" src={product.image} alt={product.image} />
          </div>
          <h2>{product.name}</h2>
          <p className="font-bold">{`$${product.price}`}</p>
        </div>
      ))
    }
    </>  
  )
}
