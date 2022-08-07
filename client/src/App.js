import Header from './components/Header';
import Main from './components/Main';
import Card from './components/Card';
import styles from './static/Card.module.css'


const people = [
  {name: 'Bryan', age: 50},
  {name: 'Michelle', age: 50},
  {name: 'Alexandria', age: 15},
  {name: 'Mikala', age: 11},
  {name: 'Craig', age: 49},
  {name: 'Jesse', age: 49}
 ]

 // if people, make the UL and fill it

let cards = people.map((person, index) => {return <Card key={index} name={person.name} age={person.age} />});


function App() {
  return (
    <>
      <Header />
      <Main>
        <ul className={styles.cards}>
          {cards}
        </ul>
      </Main>
    </>
  );
}

export default App;