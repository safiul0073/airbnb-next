import React from 'react'
import { ButtonPropsType } from '../../../types'

export const Button = ({
    onClick,
    disabled,
    customStyle,
    text
}:ButtonPropsType) => {
  return (
    <button>
        {text}
    </button>
  )
}
