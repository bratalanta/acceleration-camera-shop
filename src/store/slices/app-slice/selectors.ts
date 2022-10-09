import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

const selectCurrentCatalogPage = (state: State) => state[NameSpace.App].currentCatalogPage;
const selectCurrentReviewPage = (state: State) => state[NameSpace.App].currentReviewPage;
const selectActiveModal = (state: State) => state[NameSpace.App].activeModal;

export {
  selectCurrentCatalogPage,
  selectActiveModal,
  selectCurrentReviewPage
};
