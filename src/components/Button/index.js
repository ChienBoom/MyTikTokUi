import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    text = false,
    primary = false,
    outline = false,
    small = false,
    medium,
    big = false,
    children,
    onClick,
    disabled = false,
    rounded = false,
    lefticon,
    righticon,
    className,
    ...passProps
}) {
    let Comp = 'button';

    const classes = cx('wrapper', {
        [className]: className,
        text,
        primary,
        outline,
        small,
        medium,
        big,
        disabled,
        rounded,
        lefticon,
        righticon,
    });

    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        delete props.onClick;
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span className={cx('title')}>{children}</span>
            {righticon && <span className={cx('icon')}>{righticon}</span>}
        </Comp>
    );
}

export default Button;
