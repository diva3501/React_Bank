import React, { Component, useContext } from 'react'
import { AuthenticatedContext } from '../../Context/AuthenticatedContext'
import Login from "../Authentication/Login"

export default function PrivateRoute({ Component }) { 

    const { isAuthenticated } = useContext(AuthenticatedContext)
   
    console.log(isAuthenticated)

    if (!isAuthenticated)
        return <Login />

    return (
        <Component />
    )
}