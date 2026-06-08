import { it, expect, describe } from 'vitest';
import { axe } from 'vitest-axe';
import { render } from '@testing-library/react';

import LogoMark, { type LogoMarkProps } from '@/components/ui/Logo/LogoMark';

const defaultProps: LogoMarkProps = {};

describe(LogoMark, () => {
  it('does not have any accessibility violations', async () => {
    const { container } = render(<LogoMark {...defaultProps} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('matches the snapshot', () => {
    const { container } = render(<LogoMark {...defaultProps} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches the snapshot in decorative mode', () => {
    const { container } = render(<LogoMark decorative />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
