import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img alt='authorImage' src={props.card.img} />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  )
}

// Make sure to include PropTypes.

export default Card;

Card.propTypes = {
  card : PropTypes.shape({
    img: PropTypes.string,
    headline: PropTypes.string,
    author: PropTypes.string,

  })
  
};