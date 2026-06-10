import { createRef } from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { Button } from '@/components/ui/Buttons';
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

const variants = Object.values(BUTTON_VARIANT) as ButtonVariant[];
const colors = Object.values(BUTTON_COLORS) as ButtonColor[];
const sizes = Object.values(BUTTON_SIZE) as ButtonSize[];
const shapes = Object.values(BUTTON_SHAPE) as ButtonShape[];

describe('Ref forwarding', () => {
  it('forwards ref to the underlying button element', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Button</Button>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});

describe('Snapshots', () => {
  it.each(
    variants.flatMap((variant) =>
      colors.flatMap((color) =>
        sizes.flatMap((size) =>
          shapes.map((shape) => [variant, color, size, shape] as const),
        ),
      ),
    ),
  )(
    'matches snapshot for %s variant with %s color, %s size, and %s shape',
    (variant, color, size, shape) => {
      const { container } = render(
        <Button variant={variant} color={color} size={size} shape={shape}>
          Button
        </Button>,
      );

      expect(container.firstChild).toMatchSnapshot();
    },
  );

  it('matches snapshot for disabled state', () => {
    const { container } = render(<Button disabled>Button</Button>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
