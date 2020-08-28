/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAccusoft } from '@fortawesome/free-brands-svg-icons'

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

export { Logo }
