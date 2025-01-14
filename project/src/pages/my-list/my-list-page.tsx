import FilmCard from '../../components/film-card/film-card';
import {Films} from '../../types/film';
import {useNavigate} from 'react-router';
import {AppRoutes} from '../../components/app/const';
import {useState, MouseEvent} from 'react';
import {Link} from 'react-router-dom';

type MyListScreenProps = {
  films: Films;
}

function MyListPage(props: MyListScreenProps): JSX.Element {
  const {films} = props;
  const favoriteFilms = films.filter((film) => film.isFavorite);
  const navigate = useNavigate();

  const [, setActiveCard] = useState({});
  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <div className='logo'>
          <a href='main.html' className='logo__link'>
            <span className='logo__letter logo__letter--1'>W</span>
            <span className='logo__letter logo__letter--2'>T</span>
            <span className='logo__letter logo__letter--3'>W</span>
          </a>
        </div>

        <h1 className='page-title user-page__title'>
          My list <span className='user-page__film-count'>9</span>
        </h1>
        <ul className='user-block'>
          <li className='user-block__item'>
            <div className='user-block__avatar'>
              <img
                src='img/avatar.jpg'
                alt='User avatar'
                width='63'
                height='63'
              />
            </div>
          </li>
          <li className='user-block__item'>
            <Link to={AppRoutes.SignIn} className="user-block__link">Sign out</Link>
          </li>
        </ul>
      </header>

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>

        <div className="catalog__films-list">
          {favoriteFilms.map((film, id) => {
            const keyValue = `${id}`;

            return (
              <article key={keyValue} className="small-film-card catalog__films-card"
                onMouseEnter={({target}: MouseEvent<HTMLElement>) => {
                  setActiveCard(film);
                }}
                onMouseLeave={({target}: MouseEvent<HTMLElement>) => {
                  setActiveCard([{}]);
                }}
                onClick={() => navigate(`/films/${film.id}`)}
              >
                <FilmCard
                  film={film}
                />
              </article>
            );
          })}
        </div>
      </section>

      <footer className='page-footer'>
        <div className='logo'>
          <a href='main.html' className='logo__link logo__link--light'>
            <span className='logo__letter logo__letter--1'>W</span>
            <span className='logo__letter logo__letter--2'>T</span>
            <span className='logo__letter logo__letter--3'>W</span>
          </a>
        </div>

        <div className='copyright'>
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListPage;
