import styled from '@emotion/styled'
import { mq } from '../../lib/mediaQueries'

const StyledForm = styled('form')`
  display: flex;
  flex-flow: column nowrap;
  padding: 15px;
  flex-basis: 100%;
  & > *:not(:last-child) {
    margin-bottom: 15px;
  }

  ${mq['phone']} {
    padding: 20px;
    & > *:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`

const FormInput = styled('input')`
  border: 1px solid #ddd;
  font-size: 1rem;
  border-radius: 5px;
  width: 100%;
  padding: 0.5rem 1rem;

  &:hover {
    cursor: text;
  }
`
const FormGroup = styled('div')`
  display: flex;
  flex-direction: ${({ flexDir }: { flexDir: 'column' | 'row' }) => flexDir};
  & > * {
    margin-bottom: 5px;
  }
`
const ErrorMessage = styled('div')`
  color: ${({ color }: { color: string }) => color};
`

const TextSmall = styled('p')`
  color: #666463;
  font-weight: 300;
  align-self: center;
`

const FormSeparator = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 3rem;

  & span:first-of-type {
    background-color: #ddd;
    flex-grow: 1;
    height: 1px;
  }

  & span:last-of-type {
    background-color: #ddd;
    flex-grow: 1;
    height: 1px;
  }

  & span:nth-of-type(even) {
    color: #666463;
    margin-top: -0.2rem;
    padding: 0 1rem;
    font-weight: 100;
  }
`

const FormTitle = styled('h3')``

const FormLabel = styled('label')`
  font-weight: 600;
  font-size: 0.9rem;
`

export {
  ErrorMessage,
  FormGroup,
  FormInput,
  StyledForm,
  FormTitle,
  FormLabel,
  TextSmall,
  FormSeparator,
}
