import products from "../data/products.json";
import ProductCard from "./ProductCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>수제 디저트 상점</h1>
      <p className={styles.count}>상품 {products.length}개</p>
      {products.length === 0 ? (
        <p className={styles.empty}>준비된 상품이 없습니다.</p>
      ) : (
        <ul className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
    </main>
  );
}
