import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import products from '../data/products'
import styles from './ProductDetail.module.css'

function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  const { addToCart } = useContext(CartContext)

  if (!product) {
    return <div className={styles.container}>상품을 찾을 수 없습니다.</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.productDetail}>
        <img 
          src={product.image} 
          alt={product.name}
          className={styles.image}
        />
        <div className={styles.info}>
          <h1 className={styles.name}>{product.name}</h1>
          <p className={styles.price}>{product.price.toLocaleString()}원</p>
          <button 
            onClick={() => addToCart(product)}
            className={styles.addButton}
          >
            장바구니에 담기
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
