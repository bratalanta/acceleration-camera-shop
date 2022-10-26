import { AvailableCoupon } from '../const';

type TPostOrderActionPayload = {
  camerasIds: number[];
  coupon: AvailableCoupon | null
}

export type {
  TPostOrderActionPayload
};
