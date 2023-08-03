import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';

type PrivateRouteProps = {
  children: JSX.Element;
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
}

export default function PrivateRoute({ authorizationStatus, children }: PrivateRouteProps) {
  return (
    authorizationStatus === AuthorizationStatus.NoAuth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
