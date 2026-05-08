import { useState, useMemo } from 'react'

const ROW_A = '#ffffff'
const ROW_B = '#fed7aa'
const HEAD_BG = '#1e3a8a'

export default function DataTable({ title, columns, data, badge }) {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const PER = 12

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return data
    return data.filter(row =>
      columns.some(col => String(row[col.key] ?? '').toLowerCase().includes(q))
    )
  }, [data, search, columns])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER))
  const p = Math.min(page, totalPages)
  const rows = filtered.slice((p - 1) * PER, p * PER)
  const start = filtered.length === 0 ? 0 : (p - 1) * PER + 1
  const end = Math.min(p * PER, filtered.length)

  const go = n => setPage(Math.max(1, Math.min(totalPages, n)))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Toolbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 16px', borderBottom: '1px solid #e5e7eb', background: '#f9fafb', flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontWeight: 700, color: '#1e3a8a', fontSize: '15px' }}>{title}</span>
          <span style={{ background: '#dbeafe', color: '#1e40af', borderRadius: '999px', padding: '1px 10px', fontSize: '12px', fontWeight: 600 }}>
            {filtered.length} records
          </span>
          {badge}
        </div>
        <input
          type="text"
          placeholder="Search records..."
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1) }}
          style={{
            border: '1px solid #d1d5db', borderRadius: '6px', padding: '6px 12px',
            fontSize: '13px', width: '260px', outline: 'none',
          }}
          onFocus={e => (e.target.style.borderColor = '#3b82f6')}
          onBlur={e => (e.target.style.borderColor = '#d1d5db')}
        />
      </div>

      {/* Table */}
      <div style={{ flex: 1, overflow: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12.5px', tableLayout: 'fixed' }}>
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col.key} style={{
                  background: HEAD_BG, color: 'white', padding: '8px 10px',
                  textAlign: 'left', fontWeight: 600, whiteSpace: 'nowrap',
                  borderRight: '1px solid #1d4ed8', position: 'sticky', top: 0,
                  width: col.width, minWidth: col.width, zIndex: 1, overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} style={{ textAlign: 'center', padding: '48px', color: '#9ca3af', fontSize: '14px' }}>
                  No records found
                </td>
              </tr>
            ) : rows.map((row, i) => (
              <tr key={row.id ?? i}
                style={{ background: i % 2 === 0 ? ROW_A : ROW_B, cursor: 'default' }}
                onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(0.95)')}
                onMouseLeave={e => (e.currentTarget.style.filter = 'none')}
              >
                {columns.map(col => (
                  <td key={col.key} style={{
                    padding: '6px 10px', borderRight: '1px solid #e5e7eb',
                    borderBottom: '1px solid #e5e7eb', whiteSpace: 'nowrap',
                    overflow: 'hidden', textOverflow: 'ellipsis',
                    width: col.width, maxWidth: col.width,
                  }}>
                    {col.render ? col.render(row[col.key], row) : (row[col.key] ?? '—')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '8px 16px', borderTop: '1px solid #e5e7eb', background: '#f9fafb',
        fontSize: '12.5px', color: '#6b7280', flexShrink: 0,
      }}>
        <span>Record: {start}–{end} of {filtered.length}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <PBtn onClick={() => go(1)} off={p === 1}>«</PBtn>
          <PBtn onClick={() => go(p - 1)} off={p === 1}>‹ Prev</PBtn>
          <span style={{ padding: '0 10px', fontWeight: 600, color: '#374151' }}>Page {p} / {totalPages}</span>
          <PBtn onClick={() => go(p + 1)} off={p >= totalPages}>Next ›</PBtn>
          <PBtn onClick={() => go(totalPages)} off={p >= totalPages}>»</PBtn>
        </div>
      </div>
    </div>
  )
}

function PBtn({ children, onClick, off }) {
  return (
    <button onClick={onClick} disabled={off} style={{
      padding: '3px 9px', border: '1px solid #d1d5db', borderRadius: '4px',
      background: off ? '#f3f4f6' : 'white', color: off ? '#9ca3af' : '#374151',
      cursor: off ? 'not-allowed' : 'pointer', fontSize: '12px',
    }}>
      {children}
    </button>
  )
}

export function StatusBadge({ value }) {
  const map = {
    'Active': ['#dcfce7', '#166534'],
    'Convicted': ['#fee2e2', '#991b1b'],
    'Absconder': ['#fef3c7', '#92400e'],
    'Under Trial': ['#dbeafe', '#1e40af'],
    'Released': ['#f3f4f6', '#374151'],
    'Arrested': ['#ede9fe', '#5b21b6'],
    'Expired': ['#f3f4f6', '#6b7280'],
    'Valid': ['#dcfce7', '#166534'],
    'Pending': ['#fef3c7', '#92400e'],
  }
  const [bg, color] = map[value] || ['#f3f4f6', '#374151']
  return (
    <span style={{ background: bg, color, borderRadius: '999px', padding: '1px 9px', fontSize: '11px', fontWeight: 600 }}>
      {value}
    </span>
  )
}
