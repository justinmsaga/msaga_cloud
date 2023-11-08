import Header from './layouts/header'
import Archive from './pages/Archive'
import Creation from './pages/Creation'
import Curation from './pages/Curation'
import Home from './pages/Home'
import { createHashRouter,Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

const router = createHashRouter(
  createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="Creation" element={<Creation />} />
        <Route path="Curation" element={<Curation />} />
        <Route path="Archive" element={<Archive />} />
        <Route path="*" element={<Home/>} />
      </Route>
  )
)

export default function App() {

  return (
    <>
      <div className="p-1">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

