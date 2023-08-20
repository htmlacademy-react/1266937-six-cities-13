import { SortOption } from '../constants';

export type SortType = typeof SortOption[keyof typeof SortOption]
