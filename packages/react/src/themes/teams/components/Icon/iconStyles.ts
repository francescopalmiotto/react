import * as _ from 'lodash'

import { callable, pxToRem, SizeValue } from '../../../../lib'
import {
  ComponentSlotStylesInput,
  ICSSInJSStyle,
  StrictColorScheme,
  ItemType,
} from '../../../types'
import { IconProps } from '../../../../components/Icon/Icon'
import { getStyle as getSvgStyle } from './svg'
import { IconVariables, iconColorAreas } from './iconVariables'

const getPaddedStyle = (): ICSSInJSStyle => ({
  padding: pxToRem(4),
})

const getBorderedStyles = (boxShadowColor: string): ICSSInJSStyle => {
  return {
    ...getPaddedStyle(),

    boxShadow: `0 0 0 .05rem ${boxShadowColor} inset`,
  }
}

const getIconSize = (size: SizeValue, v: IconVariables): string => {
  const modifiedSizes = {
    large: {
      x: 24,
      xx: 28,
    },
  }

  return v.sizeModifier && modifiedSizes[size] && modifiedSizes[size][v.sizeModifier]
    ? pxToRem(modifiedSizes[size][v.sizeModifier])
    : v[`${size}Size`]
}

const getIconColor = (variables, colors: StrictColorScheme<ItemType<typeof iconColorAreas>>) => {
  return _.get(colors, 'foreground', variables.color || 'currentColor')
}

const iconStyles: ComponentSlotStylesInput<IconProps, IconVariables> = {
  root: ({ props: p, variables: v, theme: t }): ICSSInJSStyle => {
    const colors = v.colorScheme[p.color]

    const maybeIcon = t.icons[p.name]
    const isSvgIcon = maybeIcon && maybeIcon.isSvg

    return {
      display: 'inline-block', // we overriding this for Base theme

      // overriding base theme border handling
      ...((p.bordered || v.borderColor) &&
        getBorderedStyles(v.borderColor || getIconColor(v, colors))),

      ...(isSvgIcon && { backgroundColor: v.backgroundColor }),
    }
  },

  outlinePart: ({ props: p }): ICSSInJSStyle => {
    return {
      display: 'none',

      ...(p.outline && {
        display: 'block',
      }),
    }
  },

  filledPart: ({ props: p }): ICSSInJSStyle => {
    return {
      ...(p.outline && {
        display: 'none',
      }),
    }
  },

  svg: ({ props: { size, color, disabled, rotate }, variables: v }): ICSSInJSStyle => {
    const colors = v.colorScheme[color]
    const iconSizeInRems = getIconSize(size, v)

    return {
      display: 'block',
      width: iconSizeInRems,
      height: iconSizeInRems,
      fill: getIconColor(v, colors),

      ...(disabled && {
        fill: v.disabledColor,
      }),

      transform: `rotate(${rotate}deg)`,

      ...getSvgStyle('svg'),
    }
  },

  svgFlippingInRtl: config => {
    const { props, rtl } = config
    return {
      ...callable(iconStyles.svg)(config),
      ...(rtl && {
        transform: `scaleX(-1) rotate(${-1 * props.rotate}deg)`,
      }),
    }
  },

  g: getSvgStyle('g'),

  path: getSvgStyle('path'),

  secondaryPath: getSvgStyle('secondaryPath'),
}

export default iconStyles
