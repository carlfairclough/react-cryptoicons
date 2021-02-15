import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const REQ: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg width={`${size}`} height={`${size}`} fill={color} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm7.073 7.5H10.296C9.263 7.5 8.5 8.28 8.5 9.346v13.33a1.697 1.697 0 001.549 1.713l.17.006a1.69 1.69 0 001.718-1.718V10.789l8.498-.001-5.022 5.012a1.686 1.686 0 000 2.395l5.735 5.717a1.689 1.689 0 002.383-2.394l-4.538-4.523 4.24-4.227c.32-.317.498-.748.497-1.197l.007-3.417a.684.684 0 00-.19-.47l-.003.002-.075-.063a.653.653 0 00-.396-.123z"/></svg>
)
          
REQ.defaultProps = {
  color: '#000',
  size: 32,
}
          