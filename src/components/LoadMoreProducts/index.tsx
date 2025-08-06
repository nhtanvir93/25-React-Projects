import { useEffect, useState } from "react";
import styles from "./LoadMoreProducts.module.css";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
}

const LoadMoreProductss = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [allFound, setAllFound] = useState(false);

  const productListApi = `https://dummyjson.com/products?limit=20&skip=${
    page * 20
  }`;

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await fetch(productListApi, {
          headers: { Accept: "application/json" },
          signal: controller.signal,
        });

        if (!response.ok)
          throw new Error("Network issue found while fetching products");

        const result = await response.json();

        const newProducts = result.products as Product[];

        if (newProducts.length === 0) return setAllFound(true);

        const totalReceivedProducts = newProducts.length;

        if (totalReceivedProducts > 0) {
          setProducts((prev) => [...prev, ...newProducts]);
        }
      } catch (error: any) {
        if (error.name === "AbortError")
          console.log("Fetching products request aborted");
        else console.log("Fetching products request failed", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    return () => controller.abort();
  }, [page]);

  return (
    <div>
      <h3 className={styles.header}>Products</h3>
      {products.length === 0 && (
        <div>
          <p className={styles.warningMsg}>
            Sorry, no product is currently available
          </p>
        </div>
      )}
      <div className={styles.productContainer}>
        {products &&
          products.map((product) => (
            <div className={styles.product}>
              <img
                className={styles.productThumbnail}
                src={product.thumbnail}
                alt={product.description}
              />
              <div className={styles.productDetails}>
                <p className={styles.productTitle}>{product.title}</p>
                <p className={styles.productPrice}>
                  $
                  {(
                    product.price -
                    product.price * (product.discountPercentage / 100)
                  ).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        {loading && <p className={styles.loading}>Loading...</p>}
      </div>
      <div className={styles.btnContainer}>
        <button
          disabled={loading || allFound}
          className={styles.loadMoreBtn}
          type="button"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default LoadMoreProductss;
