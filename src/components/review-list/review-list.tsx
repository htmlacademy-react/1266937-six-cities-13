import ReviewItem from '../review-item/review-item';
import { Reviews } from '../../types/review';


type ReviewListProps = {
  reviews: Reviews;
}

export default function ReviewList({ reviews }: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews
        .map((review) => (
          <ReviewItem review={review} key={review.id} />
        ))}
    </ul>
  );
}
