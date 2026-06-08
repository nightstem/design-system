import { cn } from '@nightstem/utils';

import LogoMark from '@/components/ui/Logo/LogoMark';

import type {
  LogoAnimation,
  LogoMode,
  LogoSize,
} from '@/components/ui/Logo/types';

import {
  LOGO_ANIMATIONS,
  LOGO_MODES,
  LOGO_SIZES,
} from '@/components/ui/Logo/constants';
import { THEME_ANIMATION, THEME_SIZE } from '@/components/ui/Logo/themes';

export type LogoProps = {
  mode?: LogoMode;
  size?: LogoSize;
  animation?: LogoAnimation;
};

const Logo = ({
  mode = LOGO_MODES.ICON,
  size = LOGO_SIZES.BODY,
  animation = LOGO_ANIMATIONS.NONE,
}: LogoProps) => {
  const appName = 'Nightstem';
  const sizeConfig = THEME_SIZE[size];
  const animationClass = THEME_ANIMATION[animation];

  const logo = (
    <LogoMark
      title={`${appName} logo`}
      decorative={mode !== LOGO_MODES.ICON}
      className={cn(
        sizeConfig.logoClass,
        animationClass,
        'motion-reduce:animate-none',
        'shrink-0',
      )}
    />
  );

  switch (mode) {
    case LOGO_MODES.HORIZONTAL: {
      return (
        <div className={cn('inline-flex items-center', sizeConfig.gapClass)}>
          {logo}
          <span className={sizeConfig.textClass}>{appName}</span>
        </div>
      );
    }

    case LOGO_MODES.ICON:
    default: {
      return <div className="inline-flex">{logo}</div>;
    }
  }
};

export default Logo;
