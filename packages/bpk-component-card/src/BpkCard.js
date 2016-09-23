import React, { PropTypes } from 'react'

import './bpk-card.scss'

const BpkCard = props => {
  const classNames = [ 'bpk-card' ]

  props.padded ? classNames.push('bpk-card--padded') : null
  props.focused ? classNames.push('bpk-card--focused') : null

  return <a href={props.href} onClick={props.onClick} className={classNames.join(' ')}>{props.children}</a>
}

BpkCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  padded: PropTypes.bool,
  focused: PropTypes.bool
}

BpkCard.defaultProps = {
  onClick: null,
  padded: true,
  focused: false
}

export default BpkCard
