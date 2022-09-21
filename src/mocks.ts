import { TCamera } from './types/camera';
import { TReview } from './types/review';

const cameras: TCamera[] = [
  {
    id: 1,
    name: 'Ретрокамера Dus Auge lV',
    vendorCode: 'DA4IU67AD5',
    type: 'Коллекционная',
    category: 'Видеокамера',
    description: 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники.',
    level: 'Любительский',
    rating: 4,
    price: 233,
    previewImg: 'img/content/das-auge.jpg',
    previewImg2x: 'img/content/das-auge@2x.jpg',
    previewImgWebp: 'img/content/img11.webp',
    previewImgWebp2x: 'img/content/das-auge@2x.webp',
    reviewCount: 16
  },
  {
    id: 2,
    name: 'Ретрокам',
    vendorCode: 'AD5',
    type: 'Коллекционная',
    category: 'Видеокамера',
    description: 'Немецкий концерн BRW раV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники.',
    level: 'Любительский',
    rating: 2,
    price: 233,
    previewImg: 'img/content/das-auge.jpg',
    previewImg2x: 'img/content/das-auge@2x.jpg',
    previewImgWebp: 'img/content/das-auge.webp',
    previewImgWebp2x: 'img/content/das-auge@2x.webp',
    reviewCount: 231
  },
  {
    id: 3,
    name: 'Auge lV',
    vendorCode: 'D33',
    type: 'Коллекционная',
    category: 'Видеокамера',
    description: 'Немецкий концерн BRW разработал видеокаменой техники.',
    level: 'Любительский',
    rating: 1,
    price: 233333,
    previewImg: 'img/content/das-auge.jpg',
    previewImg2x: 'img/content/das-auge@2x.jpg',
    previewImgWebp: 'img/content/das-auge.webp',
    previewImgWebp2x: 'img/content/das-auge@2x.webp',
    reviewCount: 21331
  },

];

const reviews: TReview[] = [
  {
    id: '2ab4a018-2e53-4f7c-abc7-7f8682093e9a5',
    userName: 'vf',
    advantage: 'Легкая в плане ная в интерфейсе',
    disadvantage: 'Быстро садрядка',
    review: 'Это моя перорге, нареканий нет',
    rating: 2,
    createAt: '2022-07-09T13:24:57.980Z',
    cameraId: 1
  },
  {
    id: '2ab4a018-2e53-4f7c-abc7-7f2868093e9a5',
    userName: 'Кирилл',
    advantage: 'Легкая в плане в интерфейсе',
    disadvantage: 'Быстро садиться зарядка',
    review: 'Это моя первая камера. Я в востоий нет',
    rating: 4,
    createAt: '2122-07-09T13:24:57.980Z',
    cameraId: 2
  },
  {
    id: '2ab4a018-2e53-4f7c-abc72-7f868093e9a5',
    userName: 'ds',
    advantage: 'Легкая добная в интерфейсе',
    disadvantage: 'Быстро я зарядка',
    review: 'Эвая камера. Я реканий нет',
    rating: 3,
    createAt: '2021-07-09T13:24:57.980Z',
    cameraId: 3
  },
];


export {
  cameras,
  reviews
};
