// import { useState } from 'react'
import './App.css'
import Card from './components/card/Card.jsx'
import { tariffs } from './tariffs.js'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <main className="card-container">
      {tariffs.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          price={card.price}
          speed={card.speed}
          info={card.info}
        />
      ))}
    </main>
  );
}

export default App
