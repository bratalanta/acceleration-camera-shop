import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

const selectIsReviewModalOpened = (state: State) => state[NameSpace.App].isReviewModalOpened;

export {
  selectIsReviewModalOpened
};
