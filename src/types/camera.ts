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

type TLikelyCamera = {
  id: number;
  name: string
}

type TFetchCamerasActionPayload = {
  currentPage: number;
  limit: number;
  queryParams: {
    sortType: string | null
    sortOrder: string | null
    category: string | null | string[]
    level: string | null | string[]
    priceCeil: string | null
    priceFloor: string | null
    type: string | null | string[]
  }
}

type TFetchMinMaxCameraPricesActionPayload = {
  category: string | null | string[]
  level: string | null | string[]
  priceCeil: string | null
  priceFloor: string | null
  type: string | null | string[]
}

type TFetchCamerasActionReturnedData = {
  data: TCamera[];
  dataTotalCount: number;
}

type TFetchLikelyCamerasActionReturnedData = {
  id: number;
  name: string;
}

type TCamerasPriceRange = {
  maxPrice?: number;
  minPrice?: number;
}

export type {
  TFetchCamerasActionPayload,
  TCamera,
  TLikelyCamera,
  TFetchCamerasActionReturnedData,
  TFetchLikelyCamerasActionReturnedData,
  TCamerasPriceRange,
  TFetchMinMaxCameraPricesActionPayload
};
