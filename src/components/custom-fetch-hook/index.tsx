import { useEffect } from "react";
import styles from "./style.module.css";
import { useFetch } from "./useFetch";

interface Product {
  id: number;
  title: string;
}

const CustomFetchHook = () => {
  const { data, pending, error, refetch } = useFetch<{ products: Product[] }>(
    "https://dummyjson.com/products",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  const products = data?.products || [];

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Products</h3>
      <button type="button" className={styles.btn} onClick={refetch}>
        Load Products
      </button>
      {pending && (
        <div className={styles.loadingMsg}>
          Please wait. Products are loading...
        </div>
      )}
      {error && <div className={styles.errorMsg}>Error : {error}</div>}
      {products?.length > 0 && (
        <ul className={styles.productList}>
          {products.map((product) => (
            <li className={styles.product} key={product.id}>
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomFetchHook;
