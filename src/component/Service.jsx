import React from 'react'

export default function Service({service}) {
  const {icon,title,description} = service || {}

  return (
    <>
      <li>
                  <img src={icon} alt="web" />
                  <p className="cardTitle">{title}</p>
                  <p className="cardDesorption">{description}</p>
                </li>
    
    
    </>
  )
}
