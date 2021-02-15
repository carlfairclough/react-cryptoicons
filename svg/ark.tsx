import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const ARK: React.FC<IconProps> = ({ color, size}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} fill={color}><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.053-18.653L27 25 15.996 7 5 24.891l10.947-11.544zm1.588 4.585v.017l-1.662-1.953-1.76 1.936h3.422zm-6.6 3.177h9.859l-1.998-2.045-5.92.025v.009l-1.94 1.987v.024z"/></svg>
)
          
ARK.defaultProps = {
  color: '#000',
  size: 32,
}
          