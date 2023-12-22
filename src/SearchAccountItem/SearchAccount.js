import classNames from 'classnames/bind';
import styles from './SearchAccountItem.module.scss';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ children }) {
    return (
        <Link to={`/@${children.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={children.avatar} alt="avatar" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{children.full_name}</span>
                    {children.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{children.nickname}</span>
            </div>
        </Link>
    );
}

// AccountItem.propTypes = {
//     data: propTypes.object.isRequired,
// };

export default AccountItem;
