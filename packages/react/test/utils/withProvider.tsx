import * as React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from '@stardust-ui/react-fela'
import { felaRenderer } from 'src/lib'
import { ThemeInput } from 'src/themes/types'

export const EmptyThemeProvider: React.FunctionComponent = ({ children }) => (
  <ThemeProvider theme={{ renderer: felaRenderer }}>{children}</ThemeProvider>
)

export const mountWithProvider = (node, options?, theme?: ThemeInput) => {
  return mount(node, {
    wrappingComponent: EmptyThemeProvider,
    ...options,
  })
}

export const mountWithProviderAndGetComponent = (
  Component,
  elementToMount,
  options?: {},
  theme?: ThemeInput,
) => {
  return mountWithProvider(elementToMount, options, theme).find(Component)
}
