import React from 'react';
import moment from 'moment';
import StarRatings from 'react-star-ratings';
import '../styles/review.css';

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
        <div className="reviews">
          <div className="imageContainer">
            <a href="#">
              <img src={image} height="42" width="42" className="reviewImage" />
            </a>
          </div>
          <div className="reviewDetails">
            <div className="reviewName">{name}</div>
            <div className="reviewDate">
              {moment(parsedDate).format('MMMM Do YYYY')}
            </div>
            <div className="reviewText" onClick={this.handleSeeMore.bind(this)}>
              <div />
              <div className="star">
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
        <div className="reviews">
          <div className="imageContainer">
            <a href="#">
              <img src={image} height="42" width="42" className="reviewImage" />
            </a>
          </div>
          <div className="reviewDetails">
            <div className="reviewName">{name}</div>
            <div className="reviewDate">
              {moment(parsedDate).format('MMMM Do YYYY')}
            </div>
            <div className="reviewText" onClick={this.handleSeeMore.bind(this)}>
              <div />
              <div className="star">
                <StarRatings
                  starRatedColor="#101820"
                  rating={5}
                  starDimension="15px"
                  starSpacing="2px"
                />
                {shortenedReview}
                <span className="seeMore"> ... See More</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="reviews">
          <div className="imageContainer">
            <a href="#">
              <img src={image} height="42" width="42" className="reviewImage" />
            </a>
          </div>
          <div className="reviewDetails">
            <div className="reviewName">{name}</div>
            <div className="reviewDate">
              {moment(parsedDate).format('MMMM Do YYYY')}
            </div>
            <div className="reviewText">
              <div />
              <div className="star">
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
