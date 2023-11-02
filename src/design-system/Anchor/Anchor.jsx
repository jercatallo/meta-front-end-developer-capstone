import React, { useCallback } from 'react'

export function Anchor({ children, href, onClick, hoverType, highlight, testId = 'anchor-component', fontSize = 'a6' }) {

  const hoverStyles = {
    'background': 'hover:bg-primaryColor hover:scale-105',
    'underline': 'hover:underline',
    'bold': 'hover:font-bold',
  };

  const size = {
    'a1': 'text-3xl',
    'a2': 'text-2xl',
    'a3': 'text-xl',
    'a4': 'text-lg',
    'a5': 'text-sm',
    'a6': 'text-xs',
  }

  const commonStyles = `${highlight && 'font-bold'} py-2 px-6 bg-blue-500 cursor-pointer text-white rounded-xl transition duration-200`;

  const styleClasses = `${commonStyles} ${hoverStyles[hoverType]} ${size[fontSize]}`;

  return (
    <a data-testid={testId} href={href} className={styleClasses} onClick={onClick}>{children}</a>
  )
}

