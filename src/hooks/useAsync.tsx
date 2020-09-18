import React, { useState, useEffect, useCallback } from 'react'

type asyncStatusType = 'idle' | 'pending' | 'success' | 'error'

function useAsync<T, E = string>(asyncFun: () => Promise<T>) {
  const [status, setStatus] = useState<asyncStatusType>('idle')
  const [value, setValue] = useState<T | null>(null)
  const [error, setError] = useState<E | null>(null)

  const execute = useCallback(() => {
    setStatus('idle')
    setValue(null)
    setError(null)

    return asyncFun()
      .then(response => {
        setValue(response)
        setStatus('success')
      })
      .catch(err => {
        setStatus('error')
        setError(err)
      })
  }, [asyncFun])

  useEffect(() => {
    execute()
  }, [execute])

  return [execute, status, value, error]
}
