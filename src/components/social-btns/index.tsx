/**@jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa'

type SocialMediaBtnProps = {
  media: 'google' | 'facebook' | 'twitter'
  onClick: () => void
}

const base = css`
  font-size: 30px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

const google = css`
  color: #dd4b39;
`
const facebook = css`
  color: #3b5998;
`

const SocialMediaBtn: React.FC<SocialMediaBtnProps> = ({ media, onClick }) => {
  switch (media) {
    case 'facebook':
      return <FaFacebook onClick={onClick} css={[base, facebook]} />
    case 'google':
      return <FaGoogle css={[base, google]} onClick={onClick} />
    case 'twitter':
      return <FaTwitter />
  }
}

export default SocialMediaBtn
