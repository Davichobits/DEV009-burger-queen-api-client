import { useEffect, useState } from "react";
import { useLocalStorage } from "../custom-hooks/useLocalStorage";

export const Ordering = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productsTypes, setProductsTypes] = useState([]);
  const { token } = useLocalStorage("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await fetch("http://localhost:8080/products", options);
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    const allProductsTypes = products.map((product) => product.type);
    const typesArray = [...new Set(allProductsTypes)];
    setProductsTypes(typesArray);
  }, [products]);

  const handleClick = (event) => {
    const productType = event.currentTarget.textContent;
    const filteredProducts = products.filter(
      (product) => product.type === productType
    );
    setFilteredProducts(filteredProducts);
  };

  const handleProductClick = (event) => {
    const productName = event.currentTarget.children[1].textContent;
    const productPrice = event.currentTarget.children[2].textContent;
    const product = { name: productName, price: productPrice };
    console.log(product);
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold my-4">Tomar pedido</h1>
      <div className="flex justify-center gap-16">
        {productsTypes.map((type) => (
          <button
            key={type}
            className="border border-gray-200 max-w-[500px] rounded-lg mb-4 p-3 cursor-pointer hover:bg-gray-200"
            onClick={handleClick}
          >
            {type}
          </button>
        ))}
      </div>

      {filteredProducts.map((product) => (
        <div
          key={product.id}
          onClick={handleProductClick}
          className="border border-gray-200 max-w-[500px] rounded-lg mb-4 mx-auto p-3 flex justify-between items-center cursor-pointer hover:bg-gray-200"
        >
          <div className="w-16">
            <img className="w-full" src={product.image} alt={product.image} />
          </div>
          <h2>{product.name}</h2>
          <p className="font-bold">{`$${product.price}`}</p>
        </div>
      ))}
    </>
  );
};
