const tabs = [
  { label: 'CTP', active: true },
  { label: 'Specific to person' },
  { label: 'Specific Establishments' },
  { label: 'Source Reports' },
  { label: 'Daily Dairy' },
]

export default function TabNav() {
  return (
    <div className="flex" style={{ background: '#2563eb' }}>
      {tabs.map(({ label, active }) => (
        <button
          key={label}
          className="px-6 py-2.5 text-white font-semibold text-sm border-r border-blue-500 hover:opacity-90 transition-opacity cursor-pointer"
          style={{ background: active ? '#f97316' : '#2563eb' }}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
