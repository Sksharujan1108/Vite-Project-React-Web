import React, {useState, useEffect} from 'react'

const ProfilePage = () => {
    const [num1, setnum1] = useState(100);
    const [num2, setnum2] = useState(2000);

    useEffect(() => {
        setnum1(150);

        return () => {
            setnum1(100)
            console.log( "Mwmorycleanup", setnum1 );
        };
    }, [num1, num2]);

    console.log('num1', num1 ); // 150

  return ( 
    <div>
      <h1> ProfilePage </h1>
        <p> num1: {num1} </p>
          <button 
            onClick = {() => setnum1(num1 + 1)}
          > Click me </button>

        <p> num2: {num2} </p>
          <button 
            onClick={() => setnum2(num2 + 1)}
          > Add me </button>
    </div>
  )
}

export default ProfilePage;