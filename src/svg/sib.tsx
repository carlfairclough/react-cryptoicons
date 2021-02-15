import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const SIB: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg width={`${`${size}`}`} height={`${`${size}`}`} fill={color} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm0-28C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12A12 12 0 0016 4zm4.176 16.527h-.488v2.732h-1.64v-2.732h-2.497v-1.015h2.537v-1.834a6.439 6.439 0 01-4.332.702c-.82-.195-1.639-.643-2.068-1.385a4.587 4.587 0 01-.586-2.38v-4.332h1.659v4.488c.039.975.663 1.951 1.62 2.244a4.991 4.991 0 003.687-.586c0-1.366-.02-3.414 0-6.146h1.678v9.23h.43v1.014z"/></svg>
)
          
SIB.defaultProps = {
  color: '#000',
  size: 32,
}
          