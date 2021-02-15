import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const DCR:React.FC<IconProps> = ({ color, size, ...rest }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-1.144-14.38l6.023 5.257h3.99l-3.484-3.042a5.632 5.632 0 003.38-6.29A5.602 5.602 0 0019.274 9h-4.419l3.014 2.629h1.406a2.987 2.987 0 012.978 2.995 2.987 2.987 0 01-2.978 2.995h-4.42zm2.157-3.36L10.993 9h-3.99l3.481 3.043a5.632 5.632 0 00-3.38 6.29 5.602 5.602 0 005.49 4.545h4.418L14 20.25h-1.407a2.987 2.987 0 01-2.978-2.995 2.987 2.987 0 012.978-2.995h4.42z"/></svg>
)
          
DCR.defaultProps = {
  color: '#000',
  size: 32,
}
          