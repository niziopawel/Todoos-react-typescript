import { useState, useCallback } from 'react'

type asyncStateType<TData = unknown, TError = unknown> = {
  status: 'idle' | 'pending' | 'success' | 'error'
  data: TData | null
  error: TError | null
}

function useAsync<TData, TError>(): {
  isLoading: boolean
  setData: (data: TData) => void
  setError: (error: TError) => void
  run: (fn: Promise<TData>) => Promise<void>
} {
  const [asyncState, setAsyncState] = useState<asyncStateType<TData, TError>>({
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
    setData,
    setError,
    run,
  }
}

export default useAsync
