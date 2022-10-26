const enum AppRoute {
  Catalog = '/catalog/page_:pageNumber/',
  Product = '/product/:id',
  Basket = '/basket',
  NotFound = '*'
}

const enum AppPage {
  Catalog = 'catalog',
  Product = 'product',
  Basket = 'basket'
}

const enum APIRoute {
  Cameras = '/cameras',
  Reviews = '/reviews',
  Similar = '/similar',
  Promo = '/promo',
  Coupons = '/coupons',
  Orders = '/orders'
}

const enum NameSpace {
  App = 'app',
  Cameras = 'cameras',
  Reviews = 'reviews',
  Promo = 'promo',
  Basket = 'basket',
  Coupons = 'coupons',
  Orders = 'orders'
}

const enum QueryParameter {
  Limit = '_limit',
  Page = '_page',
  NameLike = 'name_like',
  Sort = '_sort',
  Order = '_order',
  Type = 'type',
  Category = 'category',
  Level = 'level',
  PriceFloor = 'price_gte',
  PriceCeil = 'price_lte'
}

const enum PurchaseProductCount {
  MinCount = 1,
  MaxCount = 99
}


const enum SortType {
  Price = 'price',
  Rating = 'rating'
}

const enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

const enum Operation {
  Increase = 1,
  Decrease = -1
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

const enum PostReviewModal {
  Form = 'form',
  Success = 'success'
}

const enum ProductModal {
  Add = 'add',
  Success = 'success'
}

const enum BasketModal {
  Remove = 'remove',
  Sucess = 'success',
  Fail = 'fail'
}

const FilterBlock = {
  'Категория': ['Фотоаппарат', 'Видеокамера'],
  'Тип камеры': ['Цифровая', 'Плёночная', 'Моментальная', 'Коллекционная'],
  'Уровень': ['Нулевой', 'Любительский', 'Профессиональный'],
} as const;

const FilterTitle: {[k: string]: QueryParameter} = {
  'Категория': QueryParameter.Category,
  'Тип камеры': QueryParameter.Type,
  'Уровень': QueryParameter.Level
} as const;

const FILTER_PARAMS: string[] = [
  QueryParameter.Level,
  QueryParameter.Type,
  QueryParameter.Category,
  QueryParameter.PriceFloor,
  QueryParameter.PriceCeil
];

const LimitedFilter = {
  Category: 'Видеокамера',
  Type: {
    'Моментальная': 'Моментальная',
    'Плёночная': 'Плёночная'
  }
} as const;

const enum BreadcrumbName {
  Catalog = 'Каталог',
  Basket = 'Корзина'
}

enum AvailableCoupon {
  'camera-333' = 'camera-333',
  'camera-444' = 'camera-444',
  'camera-555' = 'camera-333',
}

const CategoryName: {[k: string]: string} = {
  'Фотоаппарат': 'Фотокамера',
  'Видеокамера': 'Видеокамера'
} as const;


const MAX_PRODUCTS_COUNT_PER_PAGE = 9;
const MAX_REVIEWS_COUNT_PER_PAGE = 3;
const COMMENT_MIN_LENGTH = 5;
const DEFAULT_PAGE = '1';
const REVIEW_DEFAULT_PAGE = 2;
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
  REVIEWS_SORTING_QUERY,
  COMMENT_MIN_LENGTH,
  MAX_RATING,
  MAX_PRODUCTS_COUNT_PER_SLIDE,
  TOAST_MAX_COUNT,
  QueryParameter,
  SortType,
  FilterBlock,
  SortOrder,
  FilterTitle,
  FILTER_PARAMS,
  LimitedFilter,
  REVIEW_DEFAULT_PAGE,
  BreadcrumbName,
  PostReviewModal,
  ProductModal,
  CategoryName,
  AppPage,
  Operation,
  PurchaseProductCount,
  AvailableCoupon,
  BasketModal
};
