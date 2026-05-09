import {
  createElement,
  type AnchorHTMLAttributes,
  type ElementType,
} from 'react';

import { cn } from '@nightstem/utils';

import type {
  ButtonColor,
  ButtonShape,
  ButtonSize,
  ButtonVariant,
} from '@/components/ui/Buttons/types';

import {
  BUTTON_COLORS,
  BUTTON_SHAPE,
  BUTTON_SIZE,
  BUTTON_VARIANT,
} from '@/components/ui/Buttons/constants';
import {
  THEME_SHAPE,
  THEME_SIZE,
  THEME_VARIANT,
} from '@/components/ui/Buttons/themes';

export type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Element or component used to render the link. Defaults to a plain <a>. Pass next/link, react-router Link, etc. */
  linkComponent?: ElementType;
  size?: ButtonSize;
  color?: ButtonColor;
  shape?: ButtonShape;
  variant?: ButtonVariant;
};

const LinkButton = ({
  className,
  linkComponent,
  color = BUTTON_COLORS.PRIMARY,
  size = BUTTON_SIZE.MD,
  shape = BUTTON_SHAPE.SQUARE,
  variant = BUTTON_VARIANT.SOLID,
  ...props
}: LinkButtonProps) => {
  const Tag = linkComponent ?? 'a';

  const classNames = cn(
    'select-none whitespace-nowrap font-medium',
    'cursor-pointer',
    'transition-colors duration-200 motion-reduce:transition-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-offset-dark',
    THEME_SIZE[size],
    THEME_SHAPE[shape],
    THEME_VARIANT[variant][color],
    className,
  );

  return createElement(Tag, { className: classNames, ...props });
};

export default LinkButton;
