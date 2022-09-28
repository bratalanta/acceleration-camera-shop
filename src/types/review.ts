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
  cameraId: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
}

type TFetchReviewsActionPayload = {
  id: number;
  limit: number;
  page: number;
}

type TFetchReviewsActionReturnedData = {
  data: TReview[];
  dataTotalCount: number;
}

export type {
  TReview,
  TReviewPost,
  TFetchReviewsActionPayload,
  TFetchReviewsActionReturnedData
};
