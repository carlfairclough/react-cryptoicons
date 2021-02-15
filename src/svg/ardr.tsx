import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const ARDR: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${`${size}`}`} height={`${`${size}`}`} fill={color}><path fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.117-14.81L12.5 23l5.152-3.498-1.769-2.312zM16 6L6 23h5.455l7.272-12.526L16 6zm0 9.842L21.455 23H26l-6.364-9.842L16 15.842z"/></svg>
)
          
ARDR.defaultProps = {
  color: '#000',
  size: 32,
}
          