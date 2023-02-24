import React, { FunctionComponent, ReactNode } from 'react';
// import cn from 'classnames';

type btnSize = 'small' | 'medium' | 'large' | 'auto';
type btnType = 'outlined' | 'accent' | 'filled' | 'secondary';

export type ButtonProps = {
  children: ReactNode;
  theme?: string;
  btnType?: btnType;
  size?: btnSize;
  disabled?: boolean;
  iconButton?: boolean;
  textButton?: boolean;
  style?: any;
};

const Button: FunctionComponent<
  ButtonProps & React.HTMLAttributes<HTMLButtonElement>
> = ({
  children,
  theme,
  btnType,
  size = 'auto',
  disabled,
  iconButton,
  textButton,
  ...props
}) => {
  // const classNames = cn({
  //   [styles.button[`Button_btnType_${btnType}`]]: btnType,
  //   [styles[`Button_size_${size}`]]: size,
  //   [styles[`Button_disabled`]]: disabled,
  //   [styles[`Button_size_${size}`]]: size,
  //   [styles[`Button_iconButton`]]: iconButton,
  //   [styles[`Button_textButton`]]: textButton,
  // });

  return (
    <button className='ogy-button' {...props}>
      {children}
    </button>
  );
};

export default Button;
