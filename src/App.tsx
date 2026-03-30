import { useTheme } from './hooks/useTheme'
import { Router } from './router'
import './index.css'

export default function App() {
  useTheme()
  return <Router />
}
