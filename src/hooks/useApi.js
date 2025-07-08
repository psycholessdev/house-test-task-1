import { useState } from "react"

const useApi = (handler) => {
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const fetchApi = async (...data) => {
    setError(null)
    setData(null)
    setIsFetching(true)
    try {
      const response = await handler(...data)
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`)
      }

      const isJson = response.headers.has('content-type')
        && response.headers.get('content-type').startsWith('application/json')
      const parsedData = isJson ? await response.json() : null
      console.log(parsedData)

      setData(parsedData)
      return { data: parsedData, error: null }
    } catch (error) {
      setError(error)
      return { data: null, error }
    } finally {
      setIsFetching(false)
    }
  }

  return { fetchApi, isFetching, data, error }
}

export default useApi
