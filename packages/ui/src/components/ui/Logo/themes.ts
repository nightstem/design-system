import type {
  LogoAnimation,
  LogoSize,
  LogoSizeConfig,
} from '@/components/ui/Logo/types';

import { LOGO_ANIMATIONS, LOGO_SIZES } from '@/components/ui/Logo/constants';

export const THEME_SIZE: Record<LogoSize, LogoSizeConfig> = {
  [LOGO_SIZES.DISPLAY]: {
    textClass: 'heading-display', // 5.61rem
    logoClass: 'h-[4.488rem] w-[4.488rem]', // 5.61 * 0.8
    gapClass: 'gap-4',
  },
  [LOGO_SIZES.XXL]: {
    textClass: 'heading-xxl', // 4.209rem
    logoClass: 'h-[3.367rem] w-[3.367rem]', // 4.209 * 0.8
    gapClass: 'gap-3',
  },
  [LOGO_SIZES.XL]: {
    textClass: 'heading-xl', // 3.157rem
    logoClass: 'h-[2.526rem] w-[2.526rem]', // 3.157 * 0.8
    gapClass: 'gap-3',
  },
  [LOGO_SIZES.LG]: {
    textClass: 'heading-lg', // 2.369rem
    logoClass: 'h-[1.895rem] w-[1.895rem]', // 2.369 * 0.8
    gapClass: 'gap-3',
  },
  [LOGO_SIZES.MD]: {
    textClass: 'heading-md', // 1.777rem
    logoClass: 'h-[1.422rem] w-[1.422rem]', // 1.777 * 0.8
    gapClass: 'gap-2',
  },
  [LOGO_SIZES.SM]: {
    textClass: 'heading-sm', // 1.333rem
    logoClass: 'h-[1.066rem] w-[1.066rem]', // 1.333 * 0.8
    gapClass: 'gap-2',
  },
  [LOGO_SIZES.BODY]: {
    textClass: 'text-body', // 1rem
    logoClass: 'h-[0.8rem] w-[0.8rem]', // 1 * 0.8
    gapClass: 'gap-2',
  },
  [LOGO_SIZES.CAPTION]: {
    textClass: 'text-caption', // 0.75rem
    logoClass: 'h-[0.6rem] w-[0.6rem]', // 0.75 * 0.8
    gapClass: 'gap-1',
  },
  [LOGO_SIZES.HINT]: {
    textClass: 'text-hint', // 0.563rem
    logoClass: 'h-[0.45rem] w-[0.45rem]', // 0.563 * 0.8
    gapClass: 'gap-1',
  },
} as const;

export const THEME_ANIMATION: Record<LogoAnimation, string> = {
  [LOGO_ANIMATIONS.NONE]: '',
  [LOGO_ANIMATIONS.PULSE]: 'animate-pulse',
} as const;
