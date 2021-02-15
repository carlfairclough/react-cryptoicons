import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const SHIFT: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M20.52 16.42l4.478-4.478L16.056 3l-8.937 8.937H16l-.002.002H7.057l4.472 4.471.026-.026.006.006-4.49 4.488 8.943 8.943 8.943-8.943h-8.895 8.915l-4.456-4.459zm-4.471 4.457h-.014l.007-.006-.007.006h.014zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z"/></svg>
)
          
SHIFT.defaultProps = {
  color: '#000',
  size: 32,
}
          