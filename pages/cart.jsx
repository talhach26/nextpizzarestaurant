
import styles from '../styles/cart.module.css';
import Image from 'next/image';

const cart = () => {
  return (
    <div className={styles.container}>
         <div className={styles.left}>
            <table className={styles.table}>
            <tbody>
                <tr className={styles.trTitle}>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <tr className={styles.tr}>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image alt="" src="/img/pizza.png" layout="fill" objectFit="cover" />
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>CORALZO</span>
                    </td>
                    <td>
                        <span className={styles.extras}>
                            Double Ingredients, spicy sauce
                        </span>
                    </td>
                    <td>
                        <span className={styles.price}>$10.90</span>
                    </td>
                    <td>
                        <span className={styles.quantity}>2</span>
                    </td>
                    <td>
                        <span className={styles.total}>$39.90</span>
                    </td>
                </tr>
                </tbody>
            </table>
         </div>
         <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Cart Totel</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b>$0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b>$79.60
                </div>
                <button className={styles.button}>CHECKOUT NOW!</button>
            </div>
         </div>
    </div>
  )
}

export default cart