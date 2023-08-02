import React from 'react'
import { ButtonPropsType } from '../../../types'

export const Button = ({
  text,
  type,
  onClick,
  styleClasses,
}:ButtonPropsType) => {
  return (
    <button
      className={`px-4 py-3 font-medium rounded-md text-left ${styleClasses}`}
      type={type || 'button'}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
