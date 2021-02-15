import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const RADS: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg fill={color} height={`${size}`} width={`${size}`} xmlns="http://www.w3.org/2000/svg"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM11.47 7.661a3.808 3.808 0 100 7.617 3.808 3.808 0 000-7.617zm3.807 12.87a5.253 5.253 0 015.253-5.253 3.808 3.808 0 10-3.808-3.808c0 2.9-2.352 5.253-5.253 5.253a3.808 3.808 0 103.808 3.808zm5.253 3.808a3.808 3.808 0 10.001-7.616 3.808 3.808 0 000 7.616zm0-2.66a1.148 1.148 0 110-2.296 1.148 1.148 0 010 2.296zm-9.06 0a1.148 1.148 0 110-2.296 1.148 1.148 0 010 2.296zm9.06-9.062a1.148 1.148 0 110-2.296 1.148 1.148 0 010 2.296zm-9.06 0a1.148 1.148 0 110-2.296 1.148 1.148 0 010 2.296z" fill-rule="evenodd"/></svg>
)
          
RADS.defaultProps = {
  color: '#000',
  size: 32,
}
          