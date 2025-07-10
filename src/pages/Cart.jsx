import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import styles from './Cart.module.css'

function Cart() {
  const { cartItems, removeFromCart, increase, decrease } = useContext(CartContext)

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  if (cartItems.length === 0) {
    return (
      <div className={styles.container}>
        <h1>장바구니</h1>
        <p className={styles.empty}>장바구니가 비어있습니다.</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h1>장바구니</h1>
      <div className={styles.cartItems}>
        {cartItems.map(item => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.image} alt={item.name} className={styles.image} />
            <div className={styles.info}>
              <h3>{item.name}</h3>
              <p>{item.price.toLocaleString()}원</p>
            </div>
            <div className={styles.quantity}>
              <button onClick={() => decrease(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increase(item.id)}>+</button>
            </div>
            <button 
              onClick={() => removeFromCart(item.id)}
              className={styles.removeButton}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <h2>총 가격: {totalPrice.toLocaleString()}원</h2>
      </div>
    </div>
  )
}

export default Cart
