import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const VIVO: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.049-21.723c-1.664 2.772-6.527 9.835-7.036 10.44-.488-.596-5.058-7.27-7.081-10.472A1.573 1.573 0 006.73 9.76a1.647 1.647 0 00-.475 2.248c2.047 3.241 3.84 5.985 5.27 8.036C13.932 23.497 14.312 24.5 16 24.5s2.194-1.136 4.535-4.447c1.603-2.268 3.526-5.238 5.23-8.076a1.646 1.646 0 00-.526-2.237c-.75-.47-1.73-.23-2.19.537z" fill-rule="evenodd"/></svg>
)
          
VIVO.defaultProps = {
  color: '#000',
  size: 32,
}
          