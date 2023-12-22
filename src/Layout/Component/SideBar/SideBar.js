import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';

import Menu from './Menu';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu />
        </aside>
    );
}

export default SideBar;
