import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const HIGHT: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm10.496-21.668l-8.455 13.94h-5.042l3.875-6.397h-3.851l-4.49 7.404a11.905 11.905 0 0017.96-14.94l.003-.007zM19.114 7.83l-3.67 6.04H19.3l4.274-7.049a11.905 11.905 0 00-17.96 14.94l8.452-13.93h5.047z"/></svg>
)
          
HIGHT.defaultProps = {
  color: '#000',
  size: 32,
}
          