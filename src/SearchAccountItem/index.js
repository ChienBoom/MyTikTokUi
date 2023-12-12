import classNames from 'classnames/bind';
import styles from './SearchAccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountIntem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg"
                alt="avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>NguyenVanA</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('usrname')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountIntem;
