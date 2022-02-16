import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-dom'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json()
      setLoading(false)
      setTours(tours)
    } catch (err) {
      setLoading(false)
      console.log(err.message);
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }


  const removeItem = (id) => {
    const newTours = [...tours]
    const updateTours = newTours.filter(nt => nt.id !== id)
    setTours(updateTours)
  }


  if (tours.length <= 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return( <main>
    
    <Tours tours={tours} removeItem={removeItem}/>
  </main>
  )
}

export default App
