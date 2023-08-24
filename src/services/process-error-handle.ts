import { store } from '../store/index';
import { setError } from '../store/action';
import { clearError } from '../store/api-actions';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearError);
};
