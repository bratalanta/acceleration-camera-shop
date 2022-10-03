import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

const selectCurrentCatalogPage = (state: State) => state[NameSpace.App].currentCatalogPage;

export {
  selectCurrentCatalogPage
};
