import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  placesCount: number;
  offersCount: number;
}

export default function App({ placesCount, offersCount }: AppScreenProps): JSX.Element {
  return (
    <MainPage
      placesCount={placesCount}
      offersCount={offersCount}
    />
  );
}
