import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const WAX: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm12-13.038L20.516 12.5h-2.375l4.625 3.998-1.461 1.257-3.039-3.708h-2.01l-3.652 4.445-.398.486 1.788-4.923H12.37l-1.184 3.325L10 14.056H8l-1.188 3.332-1.192-3.346H4l1.773 4.911h2.112L9 15.823l1.124 3.155h2.08L10.96 20.5h1.997l4.305-5.241 1.233 1.508h-1.619l-.833 1.029h3.292l.955 1.16h1.998l1.671-1.43 1.677 1.436zm-2.345-2.972l2.249-1.902-2.251-.002-1.113.948z" fill-rule="evenodd"/></svg>
)
          
WAX.defaultProps = {
  color: '#000',
  size: 32,
}
            