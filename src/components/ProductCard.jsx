import { Link } from 'react-router-dom'
import styles from './ProductCard.module.css'

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <Link to={`/product/${product.id}`} className={styles.link}>
        <img 
          src="./tshirt1.jpg"
          alt={product.name}
          className={styles.image}
        />
        <div className={styles.info}>
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.price}>{product.price.toLocaleString()}원</p>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
