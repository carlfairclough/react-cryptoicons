import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const HUC: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg fill={color} height={`${size}`} width={`${size}`} xmlns="http://www.w3.org/2000/svg"><path d="M11.5 14.5V6h-3v16h3v-4.5h9V26h3V10h-3v4.5zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z" fill-rule="evenodd"/></svg>
)
          
HUC.defaultProps = {
  color: '#000',
  size: 32,
}
          