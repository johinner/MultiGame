import { Route, Routes } from "react-router-dom"
import { AuthenticationPage } from "../pages/AuthenticationPage"


export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element = {< AuthenticationPage />}/>
    </Routes>
  )
}
