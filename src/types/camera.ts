type TCamera = {
  id: number;
  name: string;
  vendorCode: string;
  type: string;
  category: string;
  description: string;
  level: string;
  rating: number;
  price: number;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
  reviewCount: number;
};

type TFetchCamerasActionPayload = {
  limit: number;
  page: number;
}

type TFetchCamerasActionReturnedData = {
  data: TCamera[];
  dataTotalCount: number;
}

export type {
  TFetchCamerasActionPayload,
  TCamera,
  TFetchCamerasActionReturnedData
};
