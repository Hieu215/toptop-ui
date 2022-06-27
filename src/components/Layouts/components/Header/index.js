import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cl = classNames.bind(styles);

function Header() {
  return (
    <header className={cl('wrapper')}>
      <div className={cl('inner')}>
        <img src={images.logo} alt="Tiktok" />
        <div className={cl('search')}>
          <input placeholder="Search accounts and videos" spellCheck={false} />
          <button className={cl('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cl('loading')} icon={faSpinner} />

          <button className={cl('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cl('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
