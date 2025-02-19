import * as Stardust from '@stardust-ui/react'
import * as _ from 'lodash'
import * as React from 'react'
// @ts-ignore
import { ThemeContext } from '@stardust-ui/react-fela'

import { ComponentInfo } from 'docs/src/types'
import componentInfoContext from 'docs/src/utils/componentInfoContext'

import createHookGenerator from './createHookGenerator'

const usePlaygroundComponent = (componentName: string): [React.ReactElement, string[]] => {
  const context: Stardust.ProviderContextPrepared = React.useContext(ThemeContext)
  const componentInfo: ComponentInfo = componentInfoContext.byDisplayName[componentName]

  if (process.env.NODE_ENV !== 'production') {
    if (!componentInfo) {
      throw new Error(
        `Cannot find a definition for "${componentName}", please check that "docs/src/componentInfo/${componentName}.info.json" file exists`,
      )
    }

    if (!Stardust[componentName]) {
      throw new Error(
        `Cannot find an export for "${componentName}", please check that it is exported from "@stardust-ui/react"`,
      )
    }
  }

  const propValues: Record<string, any> = {}
  const unsupportedProps: string[] = []

  componentInfo.props.forEach(propDef => {
    const hookDefinition = createHookGenerator({
      componentInfo,
      propName: propDef.name,
      propDef,
      theme: context.theme,
    })

    if (hookDefinition) {
      const { hook, ...options } = hookDefinition
      const [propValue] = hook(options)

      if (_.isNil(propValue) || propValue === '') {
        return
      }

      propValues[propDef.name] = propValue

      return
    }

    unsupportedProps.push(propDef.name)
  })

  const element = React.createElement(Stardust[componentName], propValues)

  return [element, unsupportedProps]
}

export default usePlaygroundComponent
