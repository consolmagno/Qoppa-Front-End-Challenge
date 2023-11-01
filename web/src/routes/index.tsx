import { Home } from '../pages/Home'
import { SignUp } from '../pages/SignUp'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
