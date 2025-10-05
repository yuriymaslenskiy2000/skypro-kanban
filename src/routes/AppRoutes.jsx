import { Route, Routes } from 'react-router-dom'
import { RegistrationPage } from '../pages/ Registration'
import { AddNewTaskPage } from '../pages/AddNewTask'
import { HomePage } from '../pages/Home'
import { LogoutPage } from '../pages/Logout'
import { NotFoundPage } from '../pages/NotFound'
import { SignInPage } from '../pages/SignIn'
import { ViewEditorCardPage } from '../pages/ViewEditorCard'
import { PrivateRoute } from '../components/PrivateRoutes/PrivateRoute'
import { useState } from 'react'
export const AppRoutes = () => {
const [auth, setAuth] = useState(false)
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute isAuth={auth} />}>
          <Route path="/" element={<HomePage />}>
            <Route path="add-task" element={<AddNewTaskPage />} />
            <Route path="card/:id" element={<ViewEditorCardPage />} />
            <Route path="exit" element={<LogoutPage setAuth={setAuth} />} />
          </Route>
        </Route>
        <Route path="/sign-in" element={<SignInPage setAuth={setAuth} />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
