import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layouts/components/Header';
import Sidebar from './Sidebar';
const cl = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cl('wrapper')}>
      <Header />
      <div className={cl('main')}>
        <Sidebar />
        <div className={cl('content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
