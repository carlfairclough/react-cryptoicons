import React from 'react'

interface IconProps {
    color?: string;
    size?: Number;
} 

export const EDO:React.FC<IconProps> = ({ color, size }: IconProps) => (
    <svg fill={color} height={`${size}`} viewBox="0 0 32 32" width={`${size}`} xmlns="http://www.w3.org/2000/svg"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-2.94-8.126l1.709 1.722a1.377 1.377 0 001.949 0l1.719-1.722-2.694-2.697zm6.95-9.242l2.693-2.697-2.692-2.697-2.693 2.697zm-.669 8.363l6.255-6.265a1.382 1.382 0 000-1.953l-1.718-1.721-7.23 7.242zm-7.403-.278l7.218-7.23-2.692-2.697-7.218 7.23zm-3.822-3.8l2.705-2.698-2.693-2.698-1.718 1.722a1.382 1.382 0 00-.013 1.952zM18.883 8.129l-1.719-1.725a1.377 1.377 0 00-1.949 0L8.96 12.67l2.693 2.697z" fill-rule="evenodd"/></svg>
)
          
EDO.defaultProps = {
  color: '#000',
  size: 32,
}
          