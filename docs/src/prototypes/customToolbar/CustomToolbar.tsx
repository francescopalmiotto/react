import * as _ from 'lodash'
import * as React from 'react'
import {
  Button,
  Text,
  Toolbar,
  ToolbarItemProps,
  ToolbarCustomItemProps,
  ShorthandCollection,
  Status,
  ToolbarItemShorthandKinds,
  SizeValue,
  ShorthandValue,
} from '@stardust-ui/react'

export interface CustomToolbarProps {
  layout?: 'standard' | 'desktop-share' | 'powerpoint-presenter'

  isRecording?: boolean

  cameraActive?: boolean
  onCameraChange?: (state: boolean) => void

  micActive?: boolean
  onMicChange?: (state: boolean) => void

  screenShareActive?: boolean
  onScreenShareChange?: (state: boolean) => void

  sidebarSelected: false | 'chat' | 'participant-add'
  onSidebarChange?: (state: false | 'chat' | 'participant-add') => void

  chatHasNotification?: boolean

  pptSlide?: string
  onPptPrevClick?: () => void
  onPptNextClick?: () => void

  onEndCallClick?: () => void
}

type CustomToolbarLayout = (
  props: CustomToolbarProps,
) => ShorthandCollection<ToolbarItemProps | ToolbarCustomItemProps, ToolbarItemShorthandKinds>

const commonLayout: CustomToolbarLayout = props =>
  [
    props.isRecording && {
      key: 'recording',
      kind: 'custom' as ToolbarItemShorthandKinds,
      focusable: true,
      content: (
        <Status state="error" title="Recording" variables={{ isRecordingIndicator: true }} />
      ),
      variables: { isCtItemPrimary: true, isCtItemIndicator: true },
    },

    {
      key: 'timer-custom',
      kind: 'custom' as ToolbarItemShorthandKinds,
      focusable: true,
      content: <Text>10:45</Text>,
      variables: { isCtItemPrimary: true, isCtItemIndicator: true },
    },

    { key: 'timer-divider', kind: 'divider' as ToolbarItemShorthandKinds },

    {
      active: props.cameraActive,
      icon: {
        name: props.cameraActive ? 'call-video' : 'call-video-off',
        size: 'large' as SizeValue,
      },
      key: 'camera',
      onClick: () => _.invoke(props, 'onCameraChange', !props.cameraActive),
      variables: { isCtItemPrimary: true },
    },

    {
      active: props.micActive,
      icon: {
        name: props.micActive ? 'mic' : 'mic-off',
        size: 'large' as SizeValue,
      },
      key: 'mic',
      onClick: () => _.invoke(props, 'onMicChange', !props.micActive),
      variables: { isCtItemPrimary: true },
    },

    {
      active: props.screenShareActive,
      icon: {
        name: props.screenShareActive ? 'call-control-close-tray' : 'call-control-present-new',
        size: 'large' as SizeValue,
      },
      key: 'screen-share',
      onClick: () => _.invoke(props, 'onScreenShareChange', !props.screenShareActive),
      variables: { isCtItemPrimary: true },
    },

    {
      key: 'more',
      icon: {
        name: 'more',
        size: 'large' as SizeValue,
      },
      onClick: () => _.invoke(props, 'onMoreClick'),
      variables: { isCtItemPrimary: true },
    },
  ].filter(Boolean)

const sidebarButtons: CustomToolbarLayout = props => [
  {
    active: props.sidebarSelected === 'chat',
    icon: {
      name: 'chat',
      outline: true,
      size: 'large' as SizeValue,
    },
    key: 'chat',
    onClick: () =>
      _.invoke(props, 'onSidebarChange', props.sidebarSelected === 'chat' ? false : 'chat'),
    variables: { isCtItemWithNotification: props.chatHasNotification, isCtItemIconNoFill: true },
  },
  {
    active: props.sidebarSelected === 'participant-add',
    icon: {
      name: 'participant-add',
      outline: true,
      size: 'large' as SizeValue,
    },
    key: 'participant-add',
    onClick: () =>
      _.invoke(
        props,
        'onSidebarChange',
        props.sidebarSelected === 'participant-add' ? false : 'participant-add',
      ),
    variables: { isCtItemIconNoFill: true },
  },
]

const layoutItems: ShorthandValue<ToolbarItemProps> = {
  endCall: props => ({
    key: 'end-call',
    icon: {
      name: 'call-end',
      size: 'large',
    },
    onClick: () => _.invoke(props, 'onEndCallClick'),
    variables: { isCtItemDanger: true },
  }),
}

const layouts: Record<CustomToolbarProps['layout'], CustomToolbarLayout> = {
  standard: props => [...commonLayout(props), ...sidebarButtons(props), layoutItems.endCall(props)],

  'desktop-share': props => [
    ...commonLayout(props),
    ...sidebarButtons(props),
    { key: 'divider-sidebar', kind: 'divider' },
    {
      key: 'stop-sharing',
      kind: 'custom',
      content: <Button content="Stop Sharing" />,
    },

    layoutItems.endCall(props),
  ],

  'powerpoint-presenter': props => [
    ...commonLayout(props),
    ...sidebarButtons(props),
    { key: 'divider-sidebar', kind: 'divider' },

    {
      key: 'stop-sharing',
      icon: {
        name: 'call-control-stop-presenting-new',
        size: 'large',
      },
      onClick: () => _.invoke(props, 'onStopSharingClick'),
    },

    {
      key: 'ppt-prev',
      icon: {
        name: 'chevron-down',
        rotate: 90,
        outline: true,
      },
      onClick: () => _.invoke(props, 'onPptPrevClick'),
    },

    {
      key: 'ppt-slide-number',
      kind: 'custom',
      fitted: true,
      content: <Text size="small">{props.pptSlide}</Text>,
    },

    {
      key: 'ppt-next',
      icon: {
        name: 'chevron-down',
        rotate: -90,
        outline: true,
      },
      onClick: () => _.invoke(props, 'onPptNextClick'),
    },

    layoutItems.endCall(props),
  ],
}

const CustomToolbar: React.FunctionComponent<CustomToolbarProps> = props => {
  const { layout = 'standard' } = props

  return <Toolbar variables={{ isCt: true }} items={layouts[layout](props)} />
}

export default CustomToolbar
