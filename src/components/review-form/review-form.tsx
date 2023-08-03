import { Fragment, useState, ChangeEvent } from 'react';
import { MAX_RATING, DEFAULT_RATING, RatingTitle } from '../../constants';


export default function ReviewForm(): JSX.Element {
  const [reviewData, setReviewData] = useState({
    rating: DEFAULT_RATING,
    comment: ' ',
  });

  const { comment } = reviewData;

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  const ratingStars = Array.from({ length: MAX_RATING }, (_, i) => 1 + i).reverse();


  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">

        {ratingStars.map((item) => (
          <Fragment key={`${item}-stars`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              id={`${item}-stars`}
              type="radio"
              value={item}
              onChange={handleFieldChange}
            />
            <label
              htmlFor={`${item}-stars`}
              className="reviews__rating-label form__rating-label"
              title={RatingTitle[item]}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleFieldChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form >
  );
}
