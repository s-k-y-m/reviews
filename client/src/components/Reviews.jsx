import React from 'react';
import Review from './Review.jsx';
import StarRatings from 'react-star-ratings';
import '../styles/reviews.css';

const Reviews = props => {
  var { restaurant } = props;
  var reviews = restaurant.reviews;

  return (
    <div className="reviews-section">
      <div className="reviews-container">
        <div className="googleReview">
          <div className="googleReviewText">
            <h3>GOOGLE REVIEWS</h3>
          </div>
          <div className="googleStarRating">
            4.1
            <StarRatings
              starRatedColor="#101820"
              rating={5}
              starDimension="15px"
              starSpacing="2px"
            />
          </div>
          <div className="googlePlaceholder" />
        </div>
        <hr />

        {reviews.map(review => {
          return (
            <React.Fragment>
              <Review review={review} />
              <hr />
            </React.Fragment>
          );
        })}
      </div>
      <div className="contactPlaceholder" />
    </div>
  );
};

export default Reviews;
