import './styles/Styles.css'
import React, {useState} from 'react';
import Gallery from './components/Gallery.jsx'

function App(){
  const [Tour, setTours] = useState([]) //holds all tours we want to hold
  
  const tourRemoval = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id)); //removed the tour with the specific link 
  };

  //render the tours to the page
  return (
    <main> 
      <h1>Gallery of Tours</h1>
      <Gallery tour={tour} setTours={setTours} onRemove={tourRemoval} /> 

    </main>
  )
}

export default App