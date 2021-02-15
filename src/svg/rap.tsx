import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const RAP: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM12.478 6.435V6H9v19.913h3.478V6.435zM14.957 6H15v3.217h1.522c2.217 0 3.608 1 3.608 2.957 0 1.956-1.39 2.956-3.608 2.956h-3.348l6.956 10.783h4.087l-5.087-7.74c2.913-.738 4.522-3 4.522-5.956C23.652 8.565 20.957 6 16.913 6h-1.956z"/></svg>
)
          
RAP.defaultProps = {
  color: '#000',
  size: 32,
}
          