import React from 'react';
import moment from 'moment';
import StarRatings from 'react-star-ratings';
import styles from '../styles/review.css';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false
    };
  }

  handleSeeMore() {
    this.setState({
      toggled: !this.state.toggled
    });
  }

  render() {
    const { image, name, date, starRating, review } = this.props.review;
    var parsedDate = Date.parse(date);
    var reviewLength = review.length;

    if (this.state.toggled === true) {
      var shortenedReview = review.slice(0, 251);
      return (
        <div className={styles.reviews}>
          <div className={styles.imageContainer}>
            <a href="#">
              <img
                src={image}
                height="42"
                width="42"
                className={styles.reviewImage}
              />
            </a>
          </div>
          <div className={styles.reviewDetails}>
            <div className={styles.reviewName}>{name}</div>
            <div className={styles.reviewDate}>
              {moment(parsedDate).format('MMMM Do YYYY')}
            </div>
            <div
              className={styles.reviewText}
              onClick={this.handleSeeMore.bind(this)}
            >
              <div />
              <div className={styles.star}>
                <StarRatings
                  starRatedColor="#101820"
                  rating={5}
                  starDimension="15px"
                  starSpacing="2px"
                />
                {review}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (reviewLength > 251) {
      var shortenedReview = review.slice(0, 251);
      return (
        <div className={styles.reviews}>
          <div className={styles.imageContainer}>
            <a href="#">
              <img
                src={image}
                height="42"
                width="42"
                className={styles.reviewImage}
              />
            </a>
          </div>
          <div className={styles.reviewDetails}>
            <div className={styles.reviewName}>{name}</div>
            <div className={styles.reviewDate}>
              {moment(parsedDate).format('MMMM Do YYYY')}
            </div>
            <div
              className={styles.reviewText}
              onClick={this.handleSeeMore.bind(this)}
            >
              <div />
              <div className={styles.star}>
                <StarRatings
                  starRatedColor="#101820"
                  rating={5}
                  starDimension="15px"
                  starSpacing="2px"
                />
                {shortenedReview}
                <span className={styles.seeMore}> ... See More</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.reviews}>
          <div className={styles.imageContainer}>
            <a href="#">
              <img
                src={image}
                height="42"
                width="42"
                className={styles.reviewImage}
              />
            </a>
          </div>
          <div className={styles.reviewDetails}>
            <div className={styles.reviewName}>{name}</div>
            <div className={styles.reviewDate}>
              {moment(parsedDate).format('MMMM Do YYYY')}
            </div>
            <div className={styles.reviewText}>
              <div />
              <div className={styles.star}>
                <StarRatings
                  starRatedColor="#101820"
                  rating={5}
                  starDimension="15px"
                  starSpacing="2px"
                />
                {review}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Review;
