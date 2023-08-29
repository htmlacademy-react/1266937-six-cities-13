import { NameSpace } from '../../constants';
import { RootState } from '../../types/state';
import type { Offers } from '../../types/offer';

export const getFavorites = (state: RootState): Offers => state[NameSpace.Favorite].favorites;
