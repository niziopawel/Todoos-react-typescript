/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faAccusoft } from '@fortawesome/free-brands-svg-icons'

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

const Logo = ({ logoSize = 50 }) => {
  return (
    <div
      css={css`
        font-size: ${logoSize}px;
      `}
    >
      <FontAwesomeIcon icon={faAccusoft} />
    </div>
  )
}

const Spinner = ({ spinnerSize = 40 }) => {
  return (
    <div
      css={css`
        font-size: ${spinnerSize}px;
        animation: ${spin} 1.5s linear infinite;
      `}
    >
      <FontAwesomeIcon icon={faSpinner} />
    </div>
  )
}

export { Logo, Spinner }
