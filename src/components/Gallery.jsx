import TourCard from './TourCard.jsx'
import React, {useEffect, useState} from 'react';


//When loading or error = true or null, it will render those messages. Otherwise nothing.
const  Gallery = ({tour, setTours, onRemove}) =>{
    const [loading, setLoading] = useState(true)
    const [error,setError] = useState(null)

    const fetchTours = async () => {
        try{
            const result = await fetch('https://www.course-api.com/react-tours-project')
            const data = await result.json()
            setTours(data) 
            setLoading(false)
        }
        catch (error) {
            setError(true)
            setLoading(false)
        }
    } 

    useEffect(() =>{
        fetchTours()
    }, [])

    if (loading) {
        return <h2>Loading Page...</h2>
    }


    if (error) {
        return <h2>Error: Try Again</h2>
    }

//If there are no tours loaded, the refresh button will fetch the tours again
    if(tour.length === 0) {
        return  <>
                    <h2>Missing Tours</h2>
                    <div className= 'refreshButton'>
                    <button onClick={fetchTours}>Refresh</button>
                    </div>
                </>
    }

//Will render gallery with refreshed tours
    return ( 
        <section className='tourGallery'>
            {tour.map((tour) => {
                return (
                    <TourCard
                        key={tour.id}
                        {...tour}
                        onRemove={onRemove}
                    />
                );
            })}
        </section>
    )
    
}


export default Gallery