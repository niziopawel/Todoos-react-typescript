export const breakpoints: { [breakpointName: string]: number } = {
  bigDesktop: 1312,
  desktop: 992,
  tablet: 767,
  phone: 374,
}

interface IMediaQuery {
  [mediaName: string]: string
}

export const mq = Object.keys(breakpoints).reduce(
  (acc: IMediaQuery, breakpoint) => {
    acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`
    return acc
  },
  {},
)
