import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

const selectIsReviewModalOpened = (state: State) => state[NameSpace.App].isReviewModalOpened;
const selectCurrentCatalogPage = (state: State) => state[NameSpace.App].currentCatalogPage;

export {
  selectIsReviewModalOpened,
  selectCurrentCatalogPage
};
