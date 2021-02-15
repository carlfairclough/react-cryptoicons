import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const XMG:React.FC<IconProps> = ({ color, size, ...rest }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7-12.46l-.741-.226a8.22 8.22 0 01-.498 1.022 5.602 5.602 0 01-.615.873 2.92 2.92 0 01-.785.654c-.302.173-.636.26-1 .26h-7.405l6.488-7.365v-.314l-5.249-6.54h3.503c.494 0 .918.02 1.273.063.354.043.632.113.834.211.286.118.611.418.975.899.365.481.807 1.206 1.327 2.175h.79L21.469 7H9.137v.992l6.653 8.376L9 24.087V25h12.517z" fill-rule="evenodd"/></svg>
)
          
XMG.defaultProps = {
  color: '#000',
  size: 32,
}
          