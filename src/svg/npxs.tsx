import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const NPXS: React.FC<IconProps> = ({ color, size, ...rest}: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox="0 0 32 32" fill={color} {...rest} ><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.028-28C9.372 4 4 9.372 4 15.972s5.372 11.982 11.982 11.982c6.609 0 11.981-5.372 11.981-11.982C27.963 9.363 22.582 4 15.973 4zm0 23.03c-6.092 0-11.058-4.956-11.058-11.058C4.924 9.88 9.88 4.923 15.972 4.923c6.093 0 11.059 4.957 11.059 11.059 0 6.092-4.957 11.049-11.059 11.049zM9.774 10.658l4.686 4.686.882-.881-4.687-4.687-.881.882zm6.818 6.82l4.686 4.687.882-.882-4.687-4.686-.881.881zm-1.496-1.502l.888.888.881-.881-.887-.888-.882.881zm1.509-1.474l.881.88 4.687-4.686-.882-.88-4.686 4.686zM9.808 21.29l.88.881 4.687-4.686-.881-.881-4.686 4.686z"/></svg>
)
          
NPXS.defaultProps = {
  color: '#000',
  size: 32,
}
          