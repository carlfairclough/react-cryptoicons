import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const TBX: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.3-4.6c6.462 0 11.7-5.238 11.7-11.7C27.4 9.238 22.162 4 15.7 4 9.238 4 4 9.238 4 15.7c0 6.462 5.238 11.7 11.7 11.7zm2.89-7.7l2.35-4-2.62-4.48h-5.24l-2.62 4.48 2.35 4 2.89-4 2.89 4zm.86-10.4l3.74 6.4-3.74 6.4h-7.49l-3.75-6.4 3.74-6.4h7.5z"/></svg>
)
          
TBX.defaultProps = {
  color: '#000',
  size: 32,
}
          