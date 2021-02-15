import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const DLT: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg fill={color} height={`${size}`} viewBox="0 0 32 32" width={`${size}`} xmlns="http://www.w3.org/2000/svg"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.193-23.042a.244.244 0 01.222-.143c.094 0 .18.057.22.145l6.29 13.695a.877.877 0 00.794.516h.084a.57.57 0 00.548-.423.955.955 0 00-.058-.666L16.614 6.83a.497.497 0 00-.135-.171.692.692 0 00-.892.008 1.245 1.245 0 00-.313.411l-7.19 15.148a.874.874 0 00.29 1.09l.056.04c.138.094.3.144.466.144h10.752a.96.96 0 00.835-.495.641.641 0 00.031-.56l-.01-.025a.732.732 0 00-.674-.455H9.713z"/></svg>
)
          
DLT.defaultProps = {
  color: '#000',
  size: 32,
}
          