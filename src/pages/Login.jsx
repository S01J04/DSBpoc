import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      const ok = login(form.username.trim(), form.password)
      if (ok) {
        navigate('/', { replace: true })
      } else {
        setError('Invalid username or password.')
      }
      setLoading(false)
    }, 400)
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1e40af 100%)' }}
    >
      {/* Card */}
      <div
        className="w-full flex flex-col"
        style={{
          maxWidth: '420px',
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
          overflow: 'hidden',
        }}
      >
        {/* Header band */}
        <div
          className="flex flex-col items-center justify-center py-8 px-6"
          style={{ background: '#0f172a' }}
        >
          {/* Badge icon */}
          <div
            className="flex items-center justify-center rounded-full mb-4"
            style={{ width: '72px', height: '72px', background: '#1e3a8a', border: '3px solid #3b82f6' }}
          >
            <svg viewBox="0 0 24 24" fill="white" width="36" height="36">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
            </svg>
          </div>
          <div className="text-white font-extrabold tracking-wide" style={{ fontSize: '28px', color: '#60a5fa' }}>
            DSB TANK
          </div>
          <div className="text-gray-400 text-sm mt-1">District Special Branch — Tank</div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-8 py-8">
          <div className="text-center mb-1">
            <h2 className="font-semibold text-gray-800 text-lg">Sign in to your account</h2>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Username</label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
              <div className="px-3 py-2.5 bg-gray-50 border-r border-gray-300">
                <svg viewBox="0 0 24 24" fill="#9ca3af" width="18" height="18">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Enter username"
                required
                autoComplete="username"
                className="flex-1 px-3 py-2.5 text-sm outline-none bg-white text-gray-800"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
              <div className="px-3 py-2.5 bg-gray-50 border-r border-gray-300">
                <svg viewBox="0 0 24 24" fill="#9ca3af" width="18" height="18">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                </svg>
              </div>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
                autoComplete="current-password"
                className="flex-1 px-3 py-2.5 text-sm outline-none bg-white text-gray-800"
              />
            </div>
          </div>

          {error && (
            <div
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm"
              style={{ background: '#fef2f2', border: '1px solid #fca5a5', color: '#dc2626' }}
            >
              <svg viewBox="0 0 24 24" fill="#dc2626" width="16" height="16">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-1 py-3 rounded-lg font-semibold text-white text-sm transition-opacity"
            style={{
              background: loading ? '#93c5fd' : '#2563eb',
              cursor: loading ? 'not-allowed' : 'pointer',
              border: 'none',
            }}
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>

      <p className="text-blue-300 text-xs mt-6 opacity-60">
        District Special Branch · Tank · Khyber Pakhtunkhwa
      </p>
    </div>
  )
}
