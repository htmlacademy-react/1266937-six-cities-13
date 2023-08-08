export type Review = {
  id: string;
  date: string;
  comment: string;
  rating: number;

  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
}

export type Reviews = Review[];
