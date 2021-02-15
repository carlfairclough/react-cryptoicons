import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const OST: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg width={`${size}`} height={`${size}`} fill={color} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M15.937 10.222l2.01-3.136a2.03 2.03 0 00.83-3.97 2.03 2.03 0 00-2.04 3.2l-2.494 3.891a7.96 7.96 0 00-7.142 8.707 7.965 7.965 0 008.706 7.142 7.965 7.965 0 007.143-8.706 7.967 7.967 0 00-7.013-7.128zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.978-9.656a4.22 4.22 0 01-4.224-4.223 4.22 4.22 0 014.224-4.224 4.22 4.22 0 013.95 2.732 2.442 2.442 0 00-3.424-.433 2.441 2.441 0 00-.433 3.424 2.441 2.441 0 003.849.007 4.214 4.214 0 01-3.942 2.717z"/></svg>
)
          
OST.defaultProps = {
  color: '#000',
  size: 32,
}
          