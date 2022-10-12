const enum AppRoute {
  Catalog = '/catalog/page_:pageNumber/',
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

const enum QueryParameter {
  Limit = '_limit',
  Page = '_page',
  NameLike = 'name_like'
}

const enum LoadingStatus {
  Idle = 'idle',
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Rejected = 'rejected'
}

const enum Anchor {
  Features = '#features',
  Description = '#description'
}

const enum Modal {
  Form = 'form',
  Success = 'success'
}

const MAX_PRODUCTS_COUNT_PER_PAGE = 9;
const MAX_REVIEWS_COUNT_PER_PAGE = 3;
const COMMENT_MIN_LENGTH = 5;
const DEFAULT_PAGE = '1';
const DEFAULT_TITLE = 'Каталог-Фотошоп';
const REVIEWS_SORTING_QUERY = '_sort=createAt&_order=desc';
const MAX_RATING = 5;
const MAX_PRODUCTS_COUNT_PER_SLIDE = 3;
const TOAST_MAX_COUNT = 1;

export {
  AppRoute,
  APIRoute,
  NameSpace,
  LoadingStatus,
  MAX_PRODUCTS_COUNT_PER_PAGE,
  MAX_REVIEWS_COUNT_PER_PAGE,
  Anchor,
  DEFAULT_PAGE,
  DEFAULT_TITLE,
  Modal,
  REVIEWS_SORTING_QUERY,
  COMMENT_MIN_LENGTH,
  MAX_RATING,
  MAX_PRODUCTS_COUNT_PER_SLIDE,
  TOAST_MAX_COUNT,
  QueryParameter
};
