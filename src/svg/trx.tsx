import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const TRX: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg width={`${`${size}`}`} height={`${`${size}`}`} fill={color} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zM7.5 7.257l7.595 19.112 10.583-12.894-3.746-3.562L7.5 7.257zm16.252 6.977l-7.67 9.344.983-8.133 6.687-1.21zM9.472 9.488l6.633 5.502-1.038 8.58L9.472 9.487zM21.7 11.083l2.208 2.099-6.038 1.093 3.83-3.192zM10.194 8.778l10.402 1.914-4.038 3.364-6.364-5.278z"/></svg>
)
          
TRX.defaultProps = {
  color: '#000',
  size: 32,
}
          