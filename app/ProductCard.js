import styles from "./page.module.css";

export default function ProductCard({ product }) {
  const { name, price, category, image, soldOut } = product;

  return (
    <li className={`${styles.card} ${soldOut ? styles.soldOutCard : ""}`}>
      <div className={styles.image}>
        {image ? <img src={image} alt={name} /> : <span>이미지 없음</span>}
        {soldOut && <span className={styles.badge}>품절</span>}
      </div>
      <p className={styles.category}>{category}</p>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.price}>{price.toLocaleString("ko-KR")}원</p>
    </li>
  );
}
