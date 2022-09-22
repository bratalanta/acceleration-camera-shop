type TReview = {
  id: string;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
  createAt: string;
  cameraId: number;
};

type TReviewPost = {
  cameraId: 1,
  userName: 'Кирилл',
  advantage: 'Легкая в плане веса, удобная в интерфейсе',
  disadvantage: 'Быстро садиться зарядка',
  review: 'Это моя первая камера. Я в восторге, нареканий нет',
  rating: 4,
}

export type {
  TReview,
  TReviewPost
};
