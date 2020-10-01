import styled from '@emotion/styled'
import { mq } from '../../lib/mediaQueries'
import { ThemeType } from '../../lib/theme'

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 12px;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid transparent;

  ${({ theme }: { theme: ThemeType }) => {
    return `
      background: ${theme.headerBgColor};
      box-shadow: ${theme.shadowElevation1};
      color: ${theme.onHeaderColor};
    `
  }}

  ${mq['phone']} {
    height: 44px;
    padding: 0 42px;
  }

  transition: all 0.2s ease-in;
`

const HeaderInner = styled('div')`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`

const ItemGroup = styled('div')`
  height: 100%;
  display: flex;
  align-items: center;

  & > * {
    margin-right: 5px;
  }
`

// const SearchInput = styled('input')``

const SearchBar = styled('div')``

const HeaderButton = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 3px;
  height: 28px;
  min-width: 28px;
  color: inherit;
  border: none;

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.2);
  }
`

export { HeaderContainer, HeaderInner, ItemGroup, HeaderButton, SearchBar }
