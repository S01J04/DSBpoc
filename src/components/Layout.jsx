import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import TabNav from './TabNav'

export default function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <Header />
      <TabNav />
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar />
        <main style={{ flex: 1, overflowY: 'auto', background: '#fff' }}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
