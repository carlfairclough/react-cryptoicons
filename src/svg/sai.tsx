import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const SAI: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm10.633-16.183L15.817 5 5 15.817l10.817 3.996 10.816-3.996zM8.364 14.9l7.333-7.498s7.169 7.333 7.471 7.48c.303.146-4.931 0-4.931 0l-2.42-2.475-2.448 2.493H8.364zm7.453 5.674L5 16.605l10.817 10.028L26.633 16.55l-10.816 4.024z"/></svg>
)
          
SAI.defaultProps = {
  color: '#000',
  size: 32,
}
          