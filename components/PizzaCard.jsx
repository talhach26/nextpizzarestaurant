import styles from '../styles/PizzaCart.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PizzaCard = ({pizza}) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} >
      <Image src={pizza.img} alt="" width="500" height="500" /> 
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[0]}</span>
      <p className={styles.description}>
      {pizza.desc}
      </p>
    </div>
  )
}

export default PizzaCard