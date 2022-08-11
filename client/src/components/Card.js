import styles from '../static/Card.module.css'
import {useState} from "react"


const Card = (props) => {

  const [age, setAge] = useState(props.age);

  const addAge = () => setAge(age + 1)

  return (
    <>
      {props.children}
        <li className={styles.card}>
          <header>
            <h2>{props.name}</h2>
          </header>
          <p>Age: {age}</p>
          <button onClick={addAge}>Give {props.name} a birthday</button>
        </li>
    </>
    
  )
}

export default Card
