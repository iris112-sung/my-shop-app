import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import styles from './Header.module.css'

function Header() {
  const { cartItems } = useContext(CartContext)
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          My Shop
        </Link>
        <nav>
          <Link to="/" className={styles.navLink}>
            홈
          </Link>
          <Link to="/cart" className={styles.navLink}>
            장바구니 ({totalItems})
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
