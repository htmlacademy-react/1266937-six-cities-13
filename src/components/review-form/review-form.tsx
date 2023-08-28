import { Fragment, useState, ChangeEvent, FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { MAX_RATING, DEFAULT_RATING, ratingTitle, commentLength } from '../../constants';
import { postCommentAction } from '../../store/api-actions';
import type { Offer } from '../../types/offer';

type ReviewFormProps = {
  id: Offer['id'];
}

function ReviewForm({ id }: ReviewFormProps): JSX.Element {
  const [commentData, setCommentData] = useState({
    rating: DEFAULT_RATING,
    comment: '',
  });

  const { rating, comment } = commentData;

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setCommentData({ ...commentData, [name]: value });
  };

  const ratingStars = Array.from({ length: MAX_RATING }, (_, i) => 1 + i).reverse();

  const dispatch = useAppDispatch();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(postCommentAction([id, { rating: Number(rating), comment }]));
  };

  const isFormValid = rating && comment.length >= commentLength.MIN && comment.length <= commentLength.MAX;

  const isDataPosting = useAppSelector((state) => state.isDataPosting);

  return (
    <form
      className="reviews__form form"
      onSubmit={handleFormSubmit}
    >
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
              disabled={isDataPosting}
              required
            />
            <label
              htmlFor={`${item}-stars`}
              className="reviews__rating-label form__rating-label"
              title={ratingTitle[item - 1].title}
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
        disabled={isDataPosting}
        required
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
          disabled={!isFormValid || isDataPosting}
        >
          Submit
        </button>
      </div>
    </form >
  );
}

export default ReviewForm;
