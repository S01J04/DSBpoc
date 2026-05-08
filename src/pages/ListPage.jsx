import { useState } from 'react'
import DataTable from '../components/DataTable'
import AddModal from '../components/AddModal'
import { useTableData } from '../hooks/useTableData'

export default function ListPage({ title, columns, data: initial, formFields, storageKey, filter }) {
  const { data: all, addRow, newCount } = useTableData(storageKey, initial)
  const data = filter ? all.filter(filter) : all
  const [open, setOpen] = useState(false)

  function handleAdd(row) {
    addRow(row)
    setOpen(false)
  }

  const addBtn = formFields && (
    <button
      onClick={() => setOpen(true)}
      style={{
        display: 'flex', alignItems: 'center', gap: '5px',
        background: '#f97316', color: 'white', border: 'none',
        borderRadius: '6px', padding: '5px 14px', fontSize: '12.5px',
        fontWeight: 700, cursor: 'pointer',
      }}
    >
      + Add New
    </button>
  )

  const countBadge = newCount > 0 && (
    <span style={{
      background: '#dcfce7', color: '#166534', borderRadius: '999px',
      padding: '1px 9px', fontSize: '11px', fontWeight: 600,
    }}>
      +{newCount} added
    </span>
  )

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <DataTable
        title={title}
        columns={columns}
        data={data}
        badge={<>{countBadge}{addBtn}</>}
      />
      {open && (
        <AddModal
          title={title}
          fields={formFields}
          onAdd={handleAdd}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  )
}
