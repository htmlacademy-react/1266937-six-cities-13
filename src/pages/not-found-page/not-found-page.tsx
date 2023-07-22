import { Link } from 'react-router-dom';
import './not-found-page.css';

export default function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="not-found">
        <h1> 404. Page not found</h1>
        <Link to="/" className='button'>GO BACK HOME</Link>
      </section>
    </div >
  );
}
