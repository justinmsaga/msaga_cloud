import Header from './layouts/header'
import Home from './pages/Home'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider, BrowserRouter, Routes } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
    </Route>
  )
)

export default function App() {

  return (
    <>
      <div className="m-5">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

