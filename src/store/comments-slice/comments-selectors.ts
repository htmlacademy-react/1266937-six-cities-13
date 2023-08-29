import { NameSpace } from '../../constants';
import { RootState } from '../../types/state';
import type { Reviews } from '../../types/review';

export const getComments = (state: RootState): Reviews => state[NameSpace.Comments].comments;
export const getDataPostingStatus = (state: RootState): boolean => state[NameSpace.Comments].isDataPosting;
