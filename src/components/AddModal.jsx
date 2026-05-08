import { useState } from 'react'

export default function AddModal({ title, fields, onAdd, onClose }) {
  const [form, setForm] = useState(() =>
    Object.fromEntries(fields.map(f => [f.key, '']))
  )
  const [errors, setErrors] = useState({})

  function set(key, val) {
    setForm(p => ({ ...p, [key]: val }))
    setErrors(p => ({ ...p, [key]: false }))
  }

  function submit(e) {
    e.preventDefault()
    const errs = {}
    fields.forEach(f => {
      if (f.required && !String(form[f.key] ?? '').trim()) errs[f.key] = true
    })
    if (Object.keys(errs).length) { setErrors(errs); return }
    onAdd(form)
  }

  return (
    <div
      onClick={e => e.target === e.currentTarget && onClose()}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 1000, padding: '16px',
      }}
    >
      <div style={{
        background: 'white', borderRadius: '10px', width: '660px',
        maxWidth: '100%', maxHeight: '90vh', display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
      }}>
        {/* Header */}
        <div style={{
          background: '#1e3a8a', color: 'white', padding: '14px 20px',
          borderRadius: '10px 10px 0 0',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <span style={{ fontWeight: 700, fontSize: '14px' }}>Add New Record — {title}</span>
          <button
            onClick={onClose}
            style={{
              background: 'none', border: 'none', color: 'white',
              fontSize: '22px', cursor: 'pointer', lineHeight: 1, padding: '0 4px',
            }}
          >×</button>
        </div>

        {/* Body */}
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
          <div style={{
            padding: '20px', overflowY: 'auto', flex: 1,
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px',
          }}>
            {fields.map(f => (
              <div
                key={f.key}
                style={{ gridColumn: f.type === 'textarea' ? '1 / -1' : 'span 1' }}
              >
                <label style={{
                  display: 'block', fontSize: '12px', fontWeight: 600,
                  color: '#374151', marginBottom: '4px',
                }}>
                  {f.label}
                  {f.required && <span style={{ color: '#dc2626', marginLeft: '2px' }}>*</span>}
                </label>

                {f.type === 'select' ? (
                  <select
                    value={form[f.key]}
                    onChange={e => set(f.key, e.target.value)}
                    style={{
                      width: '100%', padding: '7px 10px', borderRadius: '6px',
                      fontSize: '13px', border: errors[f.key] ? '1.5px solid #dc2626' : '1px solid #d1d5db',
                      outline: 'none', background: 'white', boxSizing: 'border-box',
                    }}
                  >
                    <option value="">— Select —</option>
                    {f.options.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                ) : f.type === 'textarea' ? (
                  <textarea
                    value={form[f.key]}
                    onChange={e => set(f.key, e.target.value)}
                    placeholder={f.placeholder || ''}
                    rows={3}
                    style={{
                      width: '100%', padding: '7px 10px', borderRadius: '6px',
                      fontSize: '13px', border: errors[f.key] ? '1.5px solid #dc2626' : '1px solid #d1d5db',
                      outline: 'none', resize: 'vertical', boxSizing: 'border-box',
                    }}
                  />
                ) : (
                  <input
                    type={f.type || 'text'}
                    value={form[f.key]}
                    onChange={e => set(f.key, e.target.value)}
                    placeholder={f.placeholder || ''}
                    style={{
                      width: '100%', padding: '7px 10px', borderRadius: '6px',
                      fontSize: '13px', border: errors[f.key] ? '1.5px solid #dc2626' : '1px solid #d1d5db',
                      outline: 'none', boxSizing: 'border-box',
                    }}
                  />
                )}
                {errors[f.key] && (
                  <span style={{ fontSize: '11px', color: '#dc2626' }}>This field is required</span>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{
            padding: '12px 20px', borderTop: '1px solid #e5e7eb',
            display: 'flex', justifyContent: 'flex-end', gap: '10px',
            background: '#f9fafb', borderRadius: '0 0 10px 10px', flexShrink: 0,
          }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '8px 22px', border: '1px solid #d1d5db', borderRadius: '6px',
                background: 'white', color: '#374151', cursor: 'pointer',
                fontSize: '13px', fontWeight: 600,
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                padding: '8px 22px', border: 'none', borderRadius: '6px',
                background: '#2563eb', color: 'white', cursor: 'pointer',
                fontSize: '13px', fontWeight: 600,
              }}
            >
              Add Record
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
