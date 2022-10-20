import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

const selectCurrentCatalogPath = (state: State) => state[NameSpace.App].currentCatalogPath;
const selectCurrentReviewPage = (state: State) => state[NameSpace.App].currentReviewPage;
const selectActiveModal = (state: State) => state[NameSpace.App].activeModal;


export {
  selectCurrentCatalogPath,
  selectActiveModal,
  selectCurrentReviewPage,
};
