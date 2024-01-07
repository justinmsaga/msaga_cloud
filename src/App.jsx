import Header from './layouts/Header'
import Archive from './pages/Archive'
import Click from './pages/Click'
import Creation from './pages/Creation'
import Curation from './pages/Curation'
import Craft from './pages/Craft'
import Home from './pages/Home'
import { createHashRouter,Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

const router = createHashRouter(
  createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="Creation" element={<Creation />} />
        <Route path="Curation" element={<Curation />} />
        <Route path="Archive" element={<Archive />} />
        <Route path="Craft" element={<Craft />} />
        <Route path="*" element={<Click />} />
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

