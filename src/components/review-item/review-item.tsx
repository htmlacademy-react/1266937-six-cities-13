import type { Review } from '../../types/review';
import { getRatingWidth, humanizeReviewDate } from '../../utils';

type ReviewProps = {
  review: Review;
}

export default function ReviewItem({ review }: ReviewProps): JSX.Element {

  const {
    comment,
    user,
    date,
    rating } = review;

  const {
    name,
    avatarUrl } = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width={54}
            height={54}
            alt={`${name} avatar`}
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: getRatingWidth(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>
          {humanizeReviewDate(date)}
        </time>
      </div>
    </li>
  );
}
