import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const MOAC: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.208-16.208L9.423 9.423l-.138-.208L7.02 7v17.515h2.284V12.4l4.916 4.985 1.592 1.592 1.592-1.592L22.32 12.4v12.115h2.284V7L22.32 9.215l-6.529 6.577z"/></svg>
)
          
MOAC.defaultProps = {
  color: '#000',
  size: 32,
}
          