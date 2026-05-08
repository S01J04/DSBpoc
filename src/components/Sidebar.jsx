import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Search DSB Reports', path: '/search-dsb' },
  { label: 'Search threats', path: '/search-threats' },
  { label: 'User List', path: '/user-list' },
  { label: 'Data entry Report', path: '/data-entry' },
  { label: 'Terrorists Lists', path: '/terrorists-lists' },
  { label: 'Ts Facilitators', path: '/ts-facilitators' },
  { label: 'Head Money', path: '/head-money' },
  { label: '4th Schedule', path: '/4th-schedule' },
  { label: 'CRO', path: '/cro' },
  { label: 'Drug peddlers list', path: '/drug-peddlers' },
  { label: 'Snatchers list', path: '/snatchers-list' },
  { label: 'Dacoit/ Robbers', path: '/dacoit-robbers' },
  { label: 'FIR Found Notification', path: '/fir-notification' },
  { label: 'Money Changers', path: '/money-changers' },
  { label: 'Arms verification Dastak app', path: '/arms-verification' },
]

export default function Sidebar() {
  return (
    <aside
      className="bg-white border-r border-gray-200 overflow-y-auto"
      style={{ width: '260px', flexShrink: 0 }}
    >
      <nav>
        {navItems.map(({ label, path }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              `block px-4 py-2.5 text-sm border-b border-gray-100 transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white font-medium'
                  : 'text-gray-800 hover:bg-blue-50'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
