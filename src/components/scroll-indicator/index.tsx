import { useEffect, useState } from "react";
import "./style.css";

interface Product {
  id: number;
  title: string;
}

const url = "https://dummyjson.com/products?limit=200&sortBy=title&order=asc";

const ScrollIndicator = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [scrollTraversed, setScrollTraversed] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok)
          throw new Error("Something went wrong while fetching products");

        const result = await response.json();
        setProducts(result.products);
      } catch (error) {
        console.log("Fetching product request failed", error);
      }
    };

    fetchProducts();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const html = document.documentElement;
      const scrollHeight = html.scrollHeight - html.clientHeight;
      const scrollTop = html.scrollTop;
      const traversePencentage = (scrollTop / scrollHeight) * 100;

      setScrollTraversed(traversePencentage);
    });

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <div className="container">
      <div
        className="progress-bar"
        style={{ width: `${scrollTraversed}%` }}
      ></div>
      <h3 className="header">Products</h3>
      {products && (
        <ul className="list-item-container">
          {products.map((product) => (
            <li key={product.id} className="list-item">
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ScrollIndicator;
