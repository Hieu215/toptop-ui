import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cl = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cl('wrapper')}>
      <img
        className={cl('avatar')}
        src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-1/138933757_1118181695296481_1279070508463053159_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=JLo8zH74WFsAX894Dn2&_nc_ht=scontent.fhan2-2.fna&oh=00_AT-2oogZrwmSuHIfG0OPbUEfeC_zmRIE_VrmgkumX_icYA&oe=62E0BABC"
        alt="A name"
      />
      <div className={cl('info')}>
        <h4 className={cl('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cl('check')} icon={faCheckCircle} />
        </h4>
        <span className={cl('username')}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
