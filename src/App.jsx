import { useState,useEffect, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card=({title}) => {
  const [hasliked, sethasliked] = useState(false);
  const [count,setcount] = useState(0);

  useEffect(() => {
    console.log(`${title} has been liked:${hasliked}`);
  }, [hasliked]);

  return (
    <div className='card' onClick={()=>setcount( count+1  /*(prevState)=>prevState+1*/)}>
      <h2>{title} <br></br> {count||null}</h2>

      <button onClick={() => sethasliked(!hasliked)}>
        {hasliked?'❤️' : '🤍 '}
      </button>
    </div>
  )
}


const App=() => {
  return (
    <div className="card-container">
      <Card title="my name is king"/>
      <Card title="lion king "/>
    </div>
    

  )
}

export default App
