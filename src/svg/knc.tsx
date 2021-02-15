import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const KNC: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.914-17.538L15.245 27l6.517-5.52-6.676-7.018zm.318-.473l6.358 6.782L22 10.677l-6.596 3.312zm-.397-.552l6.914-3.233L15.007 5v8.437zm-.477-8.2L10 10.362l1.113 10.96 3.655 5.126-.238-21.211z"/></svg>
)
          
KNC.defaultProps = {
  color: '#000',
  size: 32,
}
          