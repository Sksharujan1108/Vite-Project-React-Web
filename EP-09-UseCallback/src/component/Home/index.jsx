import React, {useEffect, useMemo, useState} from 'react'

const Home = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false)

  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  useEffect(() => {
    console.log('Theme Changed')
  }, [themeStyles])

  return (
    <div> 
      <input 
        type="number" 
        value={number} 
        onChange={e => setNumber(e.target.value)} 
      />

      <button
        style={themeStyles}
        onClick={() => setDark(prevDark => !prevDark)}
      >
        Toggle Theme
      </button>

      <div style = {themeStyles}>Result: {doubleNumber}</div>
    </div>
  )
}

export default Home;

function slowFunction(num) {
  console.log('running Slow');
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2
}