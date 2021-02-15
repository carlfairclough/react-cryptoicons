import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const LINK: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg width={`${`${size}`}`} height={`${`${size}`}`} fill={color} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm0 6l-1.799 1.055L9.3 9.945 7.5 11v10l1.799 1.055 4.947 2.89L16.045 26l1.799-1.055 4.857-2.89L24.5 21V11l-1.799-1.055-4.902-2.89L16 6zm0 4.22l4.902 2.89v5.78L16 21.78l-4.902-2.89v-5.78L16 10.22z"/></svg>
)
          
LINK.defaultProps = {
  color: '#000',
  size: 32,
}
          