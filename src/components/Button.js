import React from 'react'

const Button = ({children, onClick}) => {
  return (
    <button className='bg-orange-400 text-slate-800 py-2 px-3 border-none rounded-md font-bold cursor-pointer transition-colors hover:bg-orange-500' onClick={onClick}>{children}</button>
  )
}

export default Button