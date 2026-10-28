import styles from "./page.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function ProductCard({ product }) {
  const { name, price, category, image, soldOut } = product;

  return (
    <li className={`${styles.card} ${soldOut ? styles.soldOutCard : ""}`}>
      <div className={styles.image}>
        {image ? (
          <img src={`${basePath}${image}`} alt={name} />
        ) : (
          <span className={styles.noImage}>이미지 없음</span>
        )}
        {soldOut && <span className={styles.badge}>품절</span>}
      </div>
      <p className={styles.category}>{category}</p>
      <div className={styles.line}>
        <h2 className={styles.name}>{name}</h2>
        <span className={styles.dots} aria-hidden="true" />
        <p className={styles.price}>{price.toLocaleString("ko-KR")}원</p>
      </div>
    </li>
  );
}
