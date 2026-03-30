import { lazy, Suspense } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { WhatsAppFAB } from './components/layout/WhatsAppFAB'
import { ScrollProgress } from './components/motion/ScrollProgress'

const Home = lazy(() => import('./pages/Home'))
const Drivers = lazy(() => import('./pages/Drivers'))
const Jobs = lazy(() => import('./pages/Jobs'))
const Fleet = lazy(() => import('./pages/Fleet'))
const OEM = lazy(() => import('./pages/OEM'))
const About = lazy(() => import('./pages/About'))

function Layout() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen pt-[72px]">
        <Suspense
          fallback={
            <div
              className="min-h-screen"
              style={{ background: 'var(--bg-primary)' }}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'drivers', element: <Drivers /> },
      { path: 'jobs', element: <Jobs /> },
      { path: 'fleet', element: <Fleet /> },
      { path: 'oem', element: <OEM /> },
      { path: 'about', element: <About /> },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
