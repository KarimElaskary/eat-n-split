import React from 'react'

const Button = ({children, onClick, disabled}) => {
  return (
    <button 
      disabled={disabled}
      className={`bg-orange-400 text-slate-800 py-2 px-3 border-none rounded-md font-bold transition-colors ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-orange-500'}`} 
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button