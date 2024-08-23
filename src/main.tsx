import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Menu from './components/menu.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="">
      {/* <SearchAppBar /> */}
      <Menu />
    </div>
    {/* <div className="searchAppBar">
      <Menu />
    </div> */}
  </StrictMode>,
)
