import type { ButtonHTMLAttributes } from 'react'

export function Button({ className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`px-4 py-2 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 active:bg-violet-800 transition-colors ${className}`}
      {...props}
    />
  )
}
