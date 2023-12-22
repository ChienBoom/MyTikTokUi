import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon }) {
    return (
        <NavLink className={cx('menu-item')} to={to}>
            <button className={cx('action-icon')}>{icon}</button>
            <span className={cx('action-title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: propTypes.string.isRequired,
    to: propTypes.string.isRequired,
    icon: propTypes.string.isRequired,
};
export default MenuItem;
