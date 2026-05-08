import { useState } from 'react'

export function useTableData(storageKey, initialData) {
  const [extra, setExtra] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  function addRow(formData) {
    const row = { ...formData, id: Date.now(), _new: true }
    const updated = [...extra, row]
    setExtra(updated)
    try {
      localStorage.setItem(storageKey, JSON.stringify(updated))
    } catch (e) {
      console.warn('localStorage write failed', e)
    }
  }

  return { data: [...initialData, ...extra], addRow, newCount: extra.length }
}
