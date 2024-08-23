import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Menu from './components/menu.tsx'
import Table from './components/table.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="">
      <Menu />
      <Table />
    </div>
  </StrictMode>,
)
