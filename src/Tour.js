import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeItem }) => {
  const [readmore, setReadmore] = useState(false)
  return (
    <article className='single-tour'>
      <img src={image} alt={name}></img>
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>
            ${price}
          </h4>
        </div>
        <p>{readmore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadmore(!readmore)}>
            { readmore ? "Show less" : "Read More"}
          </button></p>
        <button onClick={() => removeItem(id)} className='delete-btn'> Not Interested</button>
      </footer>
    </article>
  );
};

export default Tour;
