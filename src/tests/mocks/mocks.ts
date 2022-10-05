import faker from 'faker';
import { TCamera } from '../../types/camera';
import { TPromo } from '../../types/promo';
import { TReview, TReviewPost } from '../../types/review';

const MAX_CAMERA_RATING = 5;

const makeFakeCamera = (): TCamera => ({
  id: faker.datatype.number(5),
  name: faker.name.title(),
  vendorCode: faker.datatype.string(),
  type: faker.datatype.string(),
  category: faker.datatype.string(),
  description: faker.datatype.string(),
  level: faker.datatype.string(),
  rating: faker.datatype.number(MAX_CAMERA_RATING),
  price: faker.datatype.number(),
  previewImg: faker.random.image(),
  previewImg2x: faker.random.image(),
  previewImgWebp: faker.random.image(),
  previewImgWebp2x: faker.random.image(),
  reviewCount: faker.datatype.number(),
});

const makeFakePromo = (): TPromo => ({
  id: faker.datatype.number(),
  name: faker.name.title(),
  previewImg: faker.random.image(),
  previewImg2x: faker.random.image(),
  previewImgWebp: faker.random.image(),
  previewImgWebp2x: faker.random.image(),
});

const makeFakeReview = (): TReview => ({
  id: faker.datatype.uuid(),
  userName: faker.name.firstName(),
  advantage: faker.datatype.string(),
  disadvantage: faker.datatype.string(),
  review: faker.datatype.string(),
  rating: faker.datatype.number(MAX_CAMERA_RATING),
  createAt: faker.datatype.string(),
  cameraId: faker.datatype.number(),
});

const makeFakeReviewPost = (): TReviewPost => ({
  cameraId: faker.datatype.number(),
  userName: faker.name.firstName(),
  advantage: faker.datatype.string(),
  disadvantage: faker.datatype.string(),
  review: faker.datatype.string(),
  rating: faker.datatype.number(MAX_CAMERA_RATING),
});

window.scrollTo = jest.fn();

export {
  makeFakeCamera,
  makeFakePromo,
  makeFakeReview,
  makeFakeReviewPost
};
