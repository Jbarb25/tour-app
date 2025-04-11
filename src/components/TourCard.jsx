import React, { useState } from "react";

//Makes the tourcard function with the following parameters
const TourCard = ({ id, name, price, image, info, onRemove }) => {
  const [readMore, setReadMore] = useState(false); //useState imports the function attached to the variables

//The read more button will re-render the useState to print all of the info instead of the line that shows a preview
  return (
    <article className='tourCard'>
      <div className="tourHeader">
        <h3>{name}</h3>
        <h5>${price}</h5>
      </div>
      <img src={image} alt={name} />
      <p>{readMore ? info : `${info.slice(0, 70)}...`}</p>
      <div className="buttonContainer">
        <button className="read-more" onClick={() => setReadMore(!readMore)}> 
          {readMore ? "Show Less" : "Read More"}
        </button>
        <button
          className="buttonRemove"
          onClick={() => {
            onRemove(id);
          }}
        >
          Remove Tour
        </button>
      </div>
    </article>
  );
};

export default TourCard;