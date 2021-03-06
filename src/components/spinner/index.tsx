/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/core'

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(270deg)' },
})

const turn = keyframes({
  '0%': {
    strokeDashoffset: 187,
  },

  '50%': {
    strokeDashoffset: 187 / 4,
    transform: 'rotate(135deg)',
  },
  '100%': {
    strokeDashoffset: 187,
    transform: 'rotate(450deg)',
  },
})

const Spinner = ({
  spinnerSize = 40,
  color,
}: {
  spinnerSize: number
  color: string
}) => {
  return (
    <svg
      css={css`
        animation: ${spin} 1.35s linear infinite;
      `}
      width={`${spinnerSize}px`}
      height={`${spinnerSize}px`}
      viewBox="0 0 66 66"
      xmlns="http://wwww.w3.org/2000/svg"
      aria-label="loading"
    >
      <circle
        css={css`
          stroke: ${color};
          stroke-dasharray: 187;
          stroke-dashoffset: 0;
          transform-origin: center;
          animation: ${turn} 1.35s ease-in-out infinite;
        `}
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      ></circle>
    </svg>
  )
}

export default Spinner
