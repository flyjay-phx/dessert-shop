import products from "../data/products.json";
import ProductCard from "./ProductCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.menu}>
      <header className={styles.header}>
        <p className={styles.since}>— Est. 2026 —</p>
        <h1 className={styles.title}>Pâtisserie Maison</h1>
        <p className={styles.subtitle}>수제 디저트 상점</p>
        <p className={styles.ornament}>✦ ✦ ✦</p>
        <p className={styles.count}>오늘의 디저트 {products.length}가지</p>
      </header>

      {products.length === 0 ? (
        <p className={styles.empty}>오늘은 준비된 디저트가 없습니다.</p>
      ) : (
        <ul className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}

      <footer className={styles.footer}>
        모든 디저트는 매일 아침 손으로 굽습니다 · Fait maison
      </footer>
    </main>
  );
}
