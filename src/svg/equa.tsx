import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const EQUA: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg fill={color} height={`${size}`} viewBox="0 0 32 32" width={`${size}`} xmlns="http://www.w3.org/2000/svg"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm.72-21.922c3.093-.606 3.265 1.471 3.265 1.471.172 2.337-1.805 2.424-1.805 2.424l-.582.04c-.91.027-1.672.7-1.818 1.604a1.922 1.922 0 00.413 1.527c.35.425.866.677 1.414.69l.573.033c4.126-.26 5.33-3.635 5.33-3.635 1.719-4.24-1.634-6.837-1.634-6.837-2.505-1.967-5.39-1.493-7.36-.756a10.172 10.172 0 00-4.278 3.072c-4.794 5.812-.395 12.137-.395 12.137 2.246 3.044 5.707 4.31 8.286 4.136a2.014 2.014 0 001.856-2.022c0-.538-.212-1.054-.59-1.434a2.007 2.007 0 00-1.424-.594h-.258a4.36 4.36 0 01-1.113-.143c-5.246-1.386-4.608-6.52-4.608-6.52.601-4.587 4.727-5.193 4.727-5.193z"/></svg>
)
          
EQUA.defaultProps = {
  color: '#000',
  size: 32,
}
          