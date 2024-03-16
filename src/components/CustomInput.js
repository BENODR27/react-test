import { Input } from 'antd'
import React from 'react'

function CustomInput({
    type = "text",
    placeholder = "",
    value = "",
    change = () => {},
}) {
  return (
    <>
        <Input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => change(e.target.value)}
          />
          
    </>
  )
}

export default CustomInput