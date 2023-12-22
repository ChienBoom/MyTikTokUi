import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MenuItem from './MenuItem';
import { faCompass, faHouse, faUser, faUserPlus, faVideo } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Menu({ child }) {
    const menuItem = [
        {
            icon: <FontAwesomeIcon icon={faHouse} />,
            title: 'Dành cho bạn',
            to: '/',
        },
        {
            icon: <FontAwesomeIcon icon={faUserPlus} />,
            title: 'Đang follow',
            to: '/',
        },
        {
            icon: <FontAwesomeIcon icon={faCompass} />,
            title: 'Khám phá',
            to: '/',
        },
        {
            icon: <FontAwesomeIcon icon={faVideo} />,
            title: 'LIVE',
            to: '/',
        },
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Hồ sơ',
            to: '/',
        },
    ];
    return (
        <nav>
            {menuItem.map((item, index) => (
                <MenuItem key={index} to={item.to} icon={item.icon} title={item.title} />
            ))}
        </nav>
    );
}

export default Menu;
