import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

const selectCurrentCatalogPath = (state: State) => state[NameSpace.App].currentCatalogPath;
const selectCurrentReviewPage = (state: State) => state[NameSpace.App].currentReviewPage;
const selectReviewActiveModal = (state: State) => state[NameSpace.App].reviewActiveModal;

const selectProductActiveModal = (state: State) => state[NameSpace.App].productActiveModal;

const selectBasketActiveModal = (state: State) => state[NameSpace.App].basketActiveModal;

export {
  selectCurrentCatalogPath,
  selectProductActiveModal,
  selectCurrentReviewPage,
  selectReviewActiveModal,
  selectBasketActiveModal
};
