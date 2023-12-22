import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

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

Button.propTypes = {
    to: propTypes.string,
    href: propTypes.string,
    text: propTypes.bool,
    primary: propTypes.bool,
    outline: propTypes.bool,
    small: propTypes.bool,
    medium: propTypes.bool,
    big: propTypes.bool,
    children: propTypes.node.isRequired,
    onClick: propTypes.func,
    disabled: propTypes.bool,
    rounded: propTypes.bool,
    lefticon: propTypes.node,
    righticon: propTypes.node,
    className: propTypes.string,
};

export default Button;
