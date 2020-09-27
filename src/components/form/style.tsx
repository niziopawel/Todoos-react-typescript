import styled from '@emotion/styled'
import { mq } from '../../lib/mediaQueries'

const StyledForm = styled('form')`
  display: flex;
  flex-flow: column nowrap;
  padding: 15px;
  border: 0;
  flex-basis: 100%;
  & > * {
    margin-bottom: 15px;
  }

  ${mq['phone']} {
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    padding: 20px;

    & > * {
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
`
const FormGroup = styled('div')`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 5px;
  }
`
const ErrorMessage = styled('div')`
  color: ${({ color }: { color: string }) => color};
`

const FormTitle = styled('h3')``

const FormLabel = styled('label')``

export { ErrorMessage, FormGroup, FormInput, StyledForm, FormTitle, FormLabel }
