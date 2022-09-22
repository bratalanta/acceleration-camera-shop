const enum AppRoute {
  Catalog = '/catalog',
  Product = '/product/:id',
  NotFound = '*'
}

const MAX_RATING = 5;

export {
  AppRoute,
  MAX_RATING
};
