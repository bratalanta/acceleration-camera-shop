import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

export const selectPromo = (state: State) => state[NameSpace.Promo].promo;
