import { useState } from 'react'
import { Button } from '@/components/1_atoms/Button.tsx'

export function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="text-5xl font-bold text-slate-900 tabular-nums">{count}</div>
      <div className="flex gap-2">
        <Button onClick={() => setCount((c) => c - 1)}>−</Button>
        <Button onClick={() => setCount(0)} className="bg-slate-500 hover:bg-slate-600 active:bg-slate-700">
          Reset
        </Button>
        <Button onClick={() => setCount((c) => c + 1)}>+</Button>
      </div>
    </div>
  )
}
