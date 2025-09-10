import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const  Card = ({ title}) => {
  const [count, setCount] = useState(0);

  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() =>{
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);

  useEffect(() => {
    console.log("Card Rendered")
  }), [];

  return (
    <div className='card' onClick={() => setCount(() => count + 1)}>
      <h2>{title}  {count}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "Liked" : "Like"}
      </button>
    </div>
  )
}
const App = () => {
  
  return (   
    <div>
      <h2>Cuddles and Vybz</h2>
      <div className='card-container'>
        <Card title="Jeepers Crepers" />
        <Card title="Kingfu Panda"/>
        <Card title="Neighbor Next Door" />
      </div>
      
    </div>
  )
}


export default App
