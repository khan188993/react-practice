import React from 'react'
import { Outlet } from 'react-router-dom'

const PostLayout = () => {
    return (
        <div>
            <h1>this is post layout</h1>
            <Outlet/>
        </div>
    )
}

export default PostLayout
