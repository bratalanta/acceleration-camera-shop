const enum AppRoute {
  Catalog = '/catalog',
  Product = '/product/:id',
  NotFound = '*'
}

const enum APIRoute {
  Cameras = '/cameras',
  Reviews = '/reviews',
  Similar = '/similar',
}

const enum NameSpace {
  App = 'app',
  Cameras = 'cameras',
  Reviews = 'reviews'
}

const enum LoadingStatus {
  Idle = 'idle',
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Rejected = 'rejected'
}

const MAX_RATING = 5;

export {
  AppRoute,
  MAX_RATING,
  APIRoute,
  NameSpace,
  LoadingStatus
};
