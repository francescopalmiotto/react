import { Provider, themes, pxToRem } from '@stardust-ui/react'
import AnchorJS from 'anchor-js'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { withRouter } from 'react-router-dom'

import Sidebar from 'docs/src/components/Sidebar/Sidebar'
import { scrollToAnchor } from 'docs/src/utils'
import { mergeThemes } from 'src/lib'

const anchors = new AnchorJS({
  class: 'anchor-link',
  icon: '#',
})

class DocsLayout extends React.Component<any, any> {
  scrollStartTimeout: any
  pathname: any

  static propTypes = {
    component: PropTypes.func,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    render: PropTypes.func,
    sidebar: PropTypes.bool,
  }

  static handledProps = ['component', 'history', 'location', 'match', 'render', 'sidebar']

  componentDidMount() {
    this.resetPage()
  }

  componentDidUpdate() {
    this.resetPage()
  }

  componentWillUnmount() {
    clearTimeout(this.scrollStartTimeout)
  }

  resetPage = () => {
    const { location } = this.props
    // only reset the page when changing routes
    if (this.pathname === location.pathname) return

    clearTimeout(this.scrollStartTimeout)

    scrollTo(0, 0)

    anchors.add('h2, h3, h4, h5, h6')
    anchors.remove([1, 2, 3, 4, 5, 6].map(n => `.rendered-example h${n}`).join(', '))
    anchors.remove('.no-anchor')

    this.scrollStartTimeout = setTimeout(scrollToAnchor, 500)
    this.pathname = location.pathname

    // Anchor links has issues with <base>
    // https://stackoverflow.com/questions/8108836/make-anchor-links-refer-to-the-current-page-when-using-base
    document.querySelectorAll('a.anchor-link').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault()
        document.location.hash = link.getAttribute('href')
      })
    })
  }

  renderChildren() {
    const { children, render } = this.props
    const sidebarWidth = '270px'

    const treeSectionStyle = {
      fontWeight: 700,
      margin: '0 0 .5rem',
      padding: '0 1.2857rem',
      background: '#201f1f',
      color: 'white',
    }

    const treeItemStyle = {
      padding: '.5em 1.33333333em',
      textDecoration: 'none',
      fontSize: '0.85714286em',
      fontWeight: 400,
      color: '#ffffff80',

      '& .active': {
        fontWeight: 'bold',
      },
    }

    return (
      <>
        <Provider
          theme={mergeThemes(themes.teamsDark, {
            // adjust Teams' theme to Semantic UI's font size scheme
            componentVariables: {
              TreeItem: {
                padding: `${pxToRem(7)} ${pxToRem(16)}`,
                textDecoration: 'none',
                fontSize: pxToRem(12),
                fontWeight: 400,
                color: '#ffffff80',

                '& .active': {
                  fontWeight: 'bold',
                },
              },
            },
            componentStyles: {
              TreeItem: {
                root: ({ variables: v, props: p }) => ({
                  ...(!p.items && treeItemStyle),
                  ...(p.items && treeSectionStyle),
                }),
              },
              TreeTitle: {
                root: {
                  display: 'block',
                  width: '100%',
                },
              },
            },
          })}
        >
          <Sidebar width={sidebarWidth} />
        </Provider>
        <div role="main" style={{ marginLeft: sidebarWidth }}>
          {render ? render() : children}
        </div>
      </>
    )
  }

  render() {
    return this.renderChildren()
  }
}

export default withRouter(DocsLayout)
