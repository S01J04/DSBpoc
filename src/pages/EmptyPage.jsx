export default function EmptyPage({ title }) {
  return (
    <div className="flex items-center justify-center" style={{ height: '100%', minHeight: '400px' }}>
      <div className="text-center">
        <div
          className="rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ width: '80px', height: '80px', background: '#eff6ff' }}
        >
          <svg viewBox="0 0 24 24" fill="#93c5fd" width="40" height="40">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
          </svg>
        </div>
        <h2 className="font-semibold text-gray-700 text-2xl mb-2">{title}</h2>
        <p className="text-gray-400 text-sm">This page is under construction.</p>
      </div>
    </div>
  )
}
