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
  replace?: boolean;
}

type TFetchReviewsActionReturnedData = {
  data: TReview[];
  dataTotalCount: number;
  replace?: boolean;
}

export type {
  TReview,
  TReviewPost,
  TFetchReviewsActionPayload,
  TFetchReviewsActionReturnedData
};
