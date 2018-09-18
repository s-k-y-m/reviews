import React from 'react';
import Review from './Review.jsx';
import StarRatings from 'react-star-ratings';
import styles from '../styles/reviews.css';

const Reviews = props => {
  var { restaurant } = props;
  var reviews = restaurant.reviews;

  return (
    <div className={styles.reviewsSection}>
      <div className={styles.reviewsContainer}>
        <div className={styles.googleReview}>
          <div className={styles.googleReviewText}>
            <h3>GOOGLE REVIEWS</h3>
          </div>
          <div className={styles.googleStarRating}>
            4.1
            <StarRatings
              starRatedColor="#101820"
              rating={5}
              starDimension="15px"
              starSpacing="2px"
            />
          </div>
          <div className={styles.googlePlaceholder} />
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
      <div className={styles.contactPlaceholder} />
    </div>
  );
};

export default Reviews;
