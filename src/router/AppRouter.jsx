import { BrowserRouter, useLocation, useRoutes } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const MotionDiv = motion.div
import NavigationProvider from '@/context/NavigationProvider'
import ScrollToTop from '@components/layout/ScrollToTop/ScrollToTop'
import Navbar from '@components/layout/Navbar/Navbar'
import Footer from '@components/layout/Footer/Footer'
import WhatsAppFab from '@components/layout/WhatsAppFab/WhatsAppFab'
import Home from '@pages/Home/Home'
import Drivers from '@pages/Drivers/Drivers'
import Jobs from '@pages/Jobs/Jobs'
import Fleet from '@pages/Fleet/Fleet'
import OEM from '@pages/OEM/OEM'
import About from '@pages/About/About'
import Unions from '@pages/Unions/Unions'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
}

const routes = [
  { path: '/', element: <Home /> },
  { path: '/drivers', element: <Drivers /> },
  { path: '/jobs', element: <Jobs /> },
  { path: '/fleet', element: <Fleet /> },
  { path: '/unions', element: <Unions /> },
  { path: '/oem', element: <OEM /> },
  { path: '/about', element: <About /> },
]

function PageWrap({ children }) {
  return (
    <MotionDiv variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </MotionDiv>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  const element = useRoutes(routes, location)

  return (
    <AnimatePresence mode="wait">
      <PageWrap key={location.pathname}>{element}</PageWrap>
    </AnimatePresence>
  )
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <ScrollToTop />
        <Navbar />
        <main className="main-shell">
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppFab />
      </NavigationProvider>
    </BrowserRouter>
  )
}
