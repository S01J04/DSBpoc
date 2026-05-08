import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div className="flex items-stretch bg-gray-900 text-white" style={{ minHeight: '72px' }}>
      {/* Brand */}
      <div className="flex items-center gap-3 px-4" style={{ width: '260px', flexShrink: 0 }}>
        <div
          className="rounded-full bg-blue-700 overflow-hidden flex items-center justify-center"
          style={{ width: '52px', height: '52px', flexShrink: 0 }}
        >
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
            <circle cx="20" cy="14" r="8" fill="#93c5fd" />
            <path d="M4 38c0-8.837 7.163-16 16-16s16 7.163 16 16" fill="#1d4ed8" />
            <rect x="13" y="2" width="14" height="6" rx="2" fill="#1e40af" />
            <rect x="16" y="1" width="8" height="3" rx="1.5" fill="#1e3a8a" />
          </svg>
        </div>
        <div>
          <div className="font-extrabold tracking-wide" style={{ fontSize: '26px', color: '#60a5fa', lineHeight: 1.1 }}>
            DSB TANK
          </div>
          <div className="text-gray-400 text-xs">Navigation Panel</div>
        </div>
      </div>

      {/* Center title */}
      <div className="flex-1 flex flex-col justify-center px-8 border-l border-gray-700">
        <div className="text-gray-400 text-xs">All Features Summary</div>
        <div className="text-white font-semibold text-xl">Dashboard</div>
      </div>

      {/* Right side: user + notifications + logout */}
      <div className="flex items-stretch">
        {/* Logged-in user */}
        <div className="flex items-center gap-2 px-5 border-l border-gray-700">
          <div
            className="rounded-full flex items-center justify-center text-white font-bold text-xs"
            style={{ width: '32px', height: '32px', background: '#2563eb' }}
          >
            {user?.charAt(0).toUpperCase()}
          </div>
          <span className="text-gray-300 text-sm font-medium">{user}</span>
        </div>

        {/* Notifications */}
        <div
          className="flex items-center justify-center px-6 font-semibold text-sm bg-black cursor-pointer hover:bg-gray-800 transition-colors border-l border-gray-700"
          style={{ minWidth: '130px' }}
        >
          Notifications
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-5 font-semibold text-sm border-l border-gray-700 cursor-pointer transition-colors hover:bg-red-900"
          style={{ background: 'transparent', color: '#f87171', border: 'none', borderLeft: '1px solid #374151' }}
        >
          <svg viewBox="0 0 24 24" fill="#f87171" width="18" height="18">
            <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
          </svg>
          Logout
        </button>
      </div>
    </div>
  )
}
