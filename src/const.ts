const enum AppRoute {
  Catalog = '/catalog',
  Product = '/product/:id',
  NotFound = '*'
}

const enum APIRoute {
  Cameras = '/cameras',
  Reviews = '/reviews',
  Similar = '/similar',
  Promo = '/promo'
}

const enum NameSpace {
  App = 'app',
  Cameras = 'cameras',
  Reviews = 'reviews',
  Promo = 'promo'
}

const enum LoadingStatus {
  Idle = 'idle',
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Rejected = 'rejected'
}

const MAX_PRODUCTS_COUNT_PER_PAGE = 9;
const MAX_REVIEWS_COUNT_PER_PAGE = 3;

export {
  AppRoute,
  APIRoute,
  NameSpace,
  LoadingStatus,
  MAX_PRODUCTS_COUNT_PER_PAGE,
  MAX_REVIEWS_COUNT_PER_PAGE
};
