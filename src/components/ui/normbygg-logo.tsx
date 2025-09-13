import React from 'react'

interface NormLogoProps {
  width?: number
  height?: number
  className?: string
  textColor?: string
}

const NormLogo: React.FC<NormLogoProps> = ({ 
  width = 200, 
  height = 40, 
  className = '',
  textColor = '#000000' 
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 500 100" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* NORM text */}
      <text 
        x="0" 
        y="70" 
        fontSize="48" 
        fontWeight="800" 
        fontFamily="DM Sans, sans-serif"
        fill={textColor}
        letterSpacing="2px"
      >
        NORM
      </text>
      
      {/* Orange Arrow - Always stays orange */}
      <polygon 
        points="180,20 220,50 180,80" 
        fill="#FF7A00"
      />
      
      {/* SNICKERI text */}
      <text 
        x="240" 
        y="70" 
        fontSize="48" 
        fontWeight="800" 
        fontFamily="DM Sans, sans-serif"
        fill={textColor}
        letterSpacing="2px"
      >
        SNICKERI
      </text>
    </svg>
  )
}

export default NormLogo