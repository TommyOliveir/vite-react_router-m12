import React from 'react'
import { useSearchParams } from 'react-router-dom'

function SearchParams() {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <div>
      <h1>Search params</h1>
      <button onClick={() => setSearchParams({filter: "active"})}>Active users</button>
      <button onClick={() => setSearchParams({})}>Active users</button>
      {showActiveUsers ? <h2>Showing active user</h2> : <h2>Filter showing all users</h2>}
    </div>
  )
}

export default SearchParams
