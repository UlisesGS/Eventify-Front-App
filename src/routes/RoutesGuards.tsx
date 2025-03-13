import { FC } from "react"
import { Outlet } from "react-router"

export const ProtectedRoute: FC = () => {
    return (
        <Outlet/>
    )
}

export const PublicRoute: FC = () => {
    return <h1></h1>
}