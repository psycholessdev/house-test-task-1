import './global.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Feedback } from "@/pages"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Feedback />
  </StrictMode>,
)
