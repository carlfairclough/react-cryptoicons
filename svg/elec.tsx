import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const ELEC: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg width={`${size}`} height={`${size}`} fill={color} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16.74 14.284L19.51 4 8 18.27h6.262l-3.502 9.317 12.666-13.303H16.74zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/></svg>
)
          
ELEC.defaultProps = {
  color: '#000',
  size: 32,
}
          