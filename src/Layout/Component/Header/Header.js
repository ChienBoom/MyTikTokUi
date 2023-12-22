import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faCircleQuestion,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faPaperPlane,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'vi',
                    title: 'VietNam',
                },
                {
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard shotcuts',
    },
];

const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
        title: 'View profile',
        to: '/viewProfile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
        title: 'Get coins',
        to: '/getcoins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

const currentUser = true;

function Header() {
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>

                <>
                    <Search></Search>
                </>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" delay={200} placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon>
                                    {/* <MessageIcon /> */}
                                </button>
                            </Tippy>
                            <Tippy content="Message" delay={200} placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                                    {/* <BoxIcon /> */}
                                </button>
                            </Tippy>
                            {/* <Tippy content='Upload video'>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon>
                                </button>
                            </Tippy>
                            <Tippy content='Upload video'>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon>
                                </button>
                            </Tippy> */}
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg"
                                alt="avatar"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
