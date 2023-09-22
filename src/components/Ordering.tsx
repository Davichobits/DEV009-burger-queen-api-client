import { useEffect, useState } from "react"
import { useLocalStorage } from '../custom-hooks/useLocalStorage';

export const Ordering = () => {

  const [products, setProducts] = useState([])
  const [token, ]  = useLocalStorage('token')

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
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  interface interfaceProduct {
    id: number;
    name: string;
    image: string;
    price: number;
  }
  console.log(products);
  return (
    <>
    <h1 className="text-center text-2xl font-bold my-4">Tomar pedido</h1>
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
