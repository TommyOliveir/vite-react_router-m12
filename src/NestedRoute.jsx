import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function NestedRoute() {
    return (
        <>
            <div>
                <h1>Nested Route</h1>
            </div>
            <nav>
                <Link to='featured'>Featured  </Link>
                <Link to='new'>new</Link>
            </nav>
            <Outlet/>
        </>
    )
}

export default NestedRoute
