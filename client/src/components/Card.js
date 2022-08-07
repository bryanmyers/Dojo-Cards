import styles from '../static/Card.module.css'


const Card = (props) => {

  return (
    <>
      {props.children}
        <li className={styles.card}>
          <header>
            <h2>{props.name}</h2>
          </header>
          <p>Age: {props.age}</p>
        </li>
    </>
    
  )
}

export default Card
