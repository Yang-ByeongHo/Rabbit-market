import React from 'react'

export default function TaskStatus({onComplete, children}) {
  return (
    <div className='Task' onClick={onComplete}>{children}</div>
  )
}
