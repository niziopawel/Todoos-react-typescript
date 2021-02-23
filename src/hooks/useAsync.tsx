import { useState, useCallback } from 'react'
type StatusType = 'idle' | 'pending' | 'success' | 'error'

export type AsyncStateType<TData = unknown, TError = unknown> = {
  status: StatusType
  data: TData | null
  error: TError | null
}

function useAsync<TData, TError>(): {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  data: TData | null
  error: TError | null
  status: StatusType
  setData: (data: TData) => void
  setError: (error: TError) => void
  run: (fn: Promise<TData>) => Promise<void>
} {
  const [asyncState, setAsyncState] = useState<AsyncStateType<TData, TError>>({
    status: 'idle',
    data: null,
    error: null,
  })

  const setData = useCallback(
    (data: TData) =>
      setAsyncState({ status: 'success', data: data, error: null }),
    [setAsyncState],
  )

  const setError = useCallback(
    (error: TError) =>
      setAsyncState({ status: 'error', data: null, error: error }),
    [setAsyncState],
  )

  const run = useCallback(
    (fn: Promise<TData>) => {
      setAsyncState(prevState => ({ ...prevState, status: 'pending' }))

      return fn
        .then(data => {
          setData(data)
        })
        .catch(err => {
          setError(err)
        })
    },
    [setData, setError, setAsyncState],
  )

  return {
    isLoading: asyncState.status === 'pending',
    isSuccess: asyncState.status === 'success',
    isError: asyncState.status === 'error',
    data: asyncState.data,
    error: asyncState.error,
    status: asyncState.status,
    setData,
    setError,
    run,
  }
}

export default useAsync
